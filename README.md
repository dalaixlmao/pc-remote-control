# Remote PC Control

Remote PC Control is a mobile application built with React Native and Expo that allows you to remotely control a computer by sending shutdown and restart commands to a server.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/dalaixlmao/pc-remote-control.git
   ```

2. Install dependencies:
     ```bash
     cd remote-pc-control
     npm install
     ```
  
3. Make sure you have Expo CLI installed globally on your machine. If not, you can install it by running the following command:
     ```bash
     npm install -g expo-cli
     ```

4. Start expo server:
    ```bash
    expo start
    ```
 
5. Use the Expo app on your mobile device to scan the QR code displayed in the terminal or web browser.

6. Start the server
     ```bash
     node server.js
     ```
## Usage
1. Launch the Remote PC Control application on your mobile device using the Expo app.

2. Ensure that your mobile device and the computer you want to control are on the same network.

2. Enter the IP address of the server in the App.js file of the mobile application.

3. On the mobile application, tap the "Shutdown" button to send a shutdown command to the server. The computer will start shutting down.

4. To restart the computer, tap the "Restart" button.

## API Endpoints
The server exposes the following API endpoints:

  1. **/shutdown**: Sends a shutdown command to the computer.

  2. **/restart**: Sends a restart command to the computer.

These endpoints accept HTTP GET requests.

## Dependencies

   ```code
   "dependencies": {
     "axios": "^1.4.0",
     "expo": "~48.0.18",
     "expo-status-bar": "~1.4.4",
     "express": "^4.18.2",
     "react": "18.2.0",
     "react-native": "0.71.8",
     "react-native-network-info": "^5.2.1"
   }
   ```

## Contributing
Contributions to Remote PC Control are welcome! If you find any issues or have suggestions for improvements, please feel free to open a pull request or submit a bug report.

## Author

Anubhav Aaryan

Email: aaryan4nbhav@gmail.com


