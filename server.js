const express = require('express');
const { exec } = require('child_process');

const app = express();
const port = 3000;

// Endpoint for shutting down the computer
app.get('/shutdown', (req, res) => {
  executeCommand('shutdown /s /t 0', 'Computer shutting down...', res);
});

// Endpoint for restarting the computer
app.get('/restart', (req, res) => {
  executeCommand('shutdown /r /t 0', 'Computer restarting...', res);
});

// Execute system command and send response to client
function executeCommand(command, message, res) {
  exec(command, (error) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(200).json({ message });
    }
  });
}

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
