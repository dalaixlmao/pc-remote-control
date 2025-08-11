# Remote PC Control

Remote PC Control is a mobile application built with React Native and Expo that allows you to remotely control a computer by sending shutdown and restart commands to a server.

## Features

- Remote shutdown of a computer
- Remote restart of a computer
- Clean, modern UI with SVG icons
- Server status monitoring
- Cross-platform server support (Windows, Linux, macOS)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/dalaixlmao/pc-remote-control.git
   cd remote-pc-control
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the application:
   - Edit the `config.js` file to set your server's IP address

4. Make sure you have Expo CLI installed globally:
   ```bash
   npm install -g expo-cli
   ```

## Usage

### Mobile App
1. Start the Expo development server:
   ```bash
   expo start
   ```

2. Use the Expo app on your mobile device to scan the QR code displayed in the terminal or web browser.

### Server
1. Start the server on the computer you want to control:
   ```bash
   node server.js
   ```
   
2. Ensure your mobile device and the server are on the same network.

3. Use the app to send shutdown or restart commands to the computer.

## API Endpoints

The server exposes the following API endpoints:

- **GET /shutdown**: Sends a shutdown command to the computer
- **GET /restart**: Sends a restart command to the computer
- **GET /status**: Returns the current server status information

## Project Structure

```
remote-pc-control/
├── assets/               # SVG icons and images
├── components/           # Reusable UI components
│   └── CommandButton.js  # Button component for commands
├── services/             # Service modules
│   └── apiService.js     # API communication service
├── App.js                # Main application component
├── config.js             # Application configuration
├── server.js             # Express server for handling commands
└── package.json          # Project dependencies
```

## Dependencies

```json
"dependencies": {
  "axios": "^1.4.0",
  "expo": "~48.0.18",
  "expo-status-bar": "~1.4.4",
  "express": "^4.18.2",
  "react": "18.2.0",
  "react-native": "0.71.8",
  "react-native-svg": "^13.9.0"
}
```

## Contributing

Contributions to Remote PC Control are welcome! If you find any issues or have suggestions for improvements, please feel free to open a pull request or submit a bug report.

## Author

Anubhav Aaryan

Email: aaryan4nbhav@gmail.com