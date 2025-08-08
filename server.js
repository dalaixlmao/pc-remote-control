const express = require('express');
const { exec } = require('child_process');
const os = require('os');

const app = express();
const port = 3000;

/**
 * Get the appropriate shutdown/restart command based on operating system
 * @param {string} action - Either 'shutdown' or 'restart'
 * @returns {string} - The command to execute
 */
function getCommandForOS(action) {
  const platform = os.platform();
  
  switch (platform) {
    case 'win32': // Windows
      return action === 'shutdown' ? 'shutdown /s /t 0' : 'shutdown /r /t 0';
    
    case 'darwin': // macOS
      return action === 'shutdown' ? 'shutdown -h now' : 'shutdown -r now';
    
    case 'linux': // Linux
      return action === 'shutdown' ? 'shutdown -h now' : 'shutdown -r now';
    
    default:
      throw new Error(`Unsupported operating system: ${platform}`);
  }
}

// Endpoint for shutting down the computer
app.get('/shutdown', (req, res) => {
  try {
    const command = getCommandForOS('shutdown');
    executeCommand(command, 'Computer shutting down...', res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint for restarting the computer
app.get('/restart', (req, res) => {
  try {
    const command = getCommandForOS('restart');
    executeCommand(command, 'Computer restarting...', res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * Execute system command and send response to client
 * @param {string} command - The system command to execute
 * @param {string} message - Success message to return to client
 * @param {object} res - Express response object
 */
function executeCommand(command, message, res) {
  exec(command, (error) => {
    if (error) {
      console.error(`Command execution error: ${error.message}`);
      res.status(500).json({ 
        error: `Failed to execute command: ${error.message}` 
      });
    } else {
      res.status(200).json({ message });
    }
  });
}

// Start the server
app.listen(port, () => {
  const platform = os.platform();
  console.log(`Server running on port ${port} (OS: ${platform})`);
});