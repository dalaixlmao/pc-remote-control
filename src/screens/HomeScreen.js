import React, { useState } from 'react';
import { View } from 'react-native';
import { styles } from '../styles/styles';
import ControlButton from '../components/ControlButton';
import StatusMessage from '../components/StatusMessage';
import { sendCommand } from '../services/apiService';

/**
 * Home screen with control buttons
 * 
 * @param {Object} props - Component props
 * @param {Object} props.config - Server configuration
 */
const HomeScreen = ({ config }) => {
  const [status, setStatus] = useState({ type: '', message: '' });

  /**
   * Execute a command (shutdown or restart)
   * @param {string} command - The command to execute
   */
  const executeCommand = async (command) => {
    try {
      // Clear previous status
      setStatus({ type: '', message: '' });
      
      // Send command to server
      const result = await sendCommand(config, command);
      
      // Display success message
      setStatus({
        type: 'success',
        message: result.message || `${command.charAt(0).toUpperCase() + command.slice(1)} command sent successfully`
      });
    } catch (error) {
      // Display error message
      setStatus({
        type: 'error',
        message: error.message
      });
    }
  };

  return (
    <View style={styles.container}>
      <StatusMessage type={status.type} message={status.message} />
      <View style={styles.box}>
        <ControlButton
          type="shutdown"
          onPress={() => executeCommand('shutdown')}
          style={styles.shutdown}
          textStyle={styles.shutdownT}
        />
        <ControlButton
          type="restart"
          onPress={() => executeCommand('restart')}
          style={styles.restart}
          textStyle={styles.restartT}
        />
      </View>
    </View>
  );
};

export default HomeScreen;