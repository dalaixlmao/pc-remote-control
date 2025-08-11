/**
 * Remote PC Control Server
 * 
 * This server provides endpoints for controlling a Windows PC remotely.
 * It supports shutdown and restart operations through simple HTTP endpoints.
 */

const express = require('express');
const { exec } = require('child_process');
const os = require('os');

const app = express();
const port = process.env.PORT || 3000;

// Add middleware to handle errors
app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
});

/**
 * Execute a system command safely and send response to client
 * 
 * @param {string} command - System command to execute
 * @param {string} successMessage - Message to return on success
 * @param {object} res - Express response object
 */
function executeCommand(command, successMessage, res) {
  exec(command, (error) => {
    if (error) {
      console.error(`Command execution failed: ${error.message}`);
      res.status(500).json({ 
        error: `Failed to execute command: ${error.message}`,
        success: false 
      });
    } else {
      console.log(`Command executed successfully: ${command}`);
      res.status(200).json({ 
        message: successMessage,
        success: true
      });
    }
  });
}

// Get the correct shutdown commands based on OS
const getShutdownCommand = () => {
  const platform = os.platform();
  
  if (platform === 'win32') {
    return { 
      shutdown: 'shutdown /s /t 0',
      restart: 'shutdown /r /t 0'
    };
  } else if (platform === 'linux' || platform === 'darwin') {
    return {
      shutdown: 'sudo shutdown -h now',
      restart: 'sudo shutdown -r now'
    };
  } else {
    throw new Error(`Unsupported platform: ${platform}`);
  }
};

// Endpoint for shutting down the computer
app.get('/shutdown', (req, res) => {
  try {
    const commands = getShutdownCommand();
    executeCommand(commands.shutdown, 'Computer shutting down...', res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint for restarting the computer
app.get('/restart', (req, res) => {
  try {
    const commands = getShutdownCommand();
    executeCommand(commands.restart, 'Computer restarting...', res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Server status endpoint
app.get('/status', (req, res) => {
  res.status(200).json({ 
    status: 'online',
    platform: os.platform(),
    uptime: os.uptime(),
    hostname: os.hostname()
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Server IP addresses: ${Object.values(os.networkInterfaces())
    .flat()
    .filter(item => !item.internal && item.family === 'IPv4')
    .map(item => item.address)
    .join(', ')}`);
});