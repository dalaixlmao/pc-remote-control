import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';
import { saveConfig } from '../config/config';
import StatusMessage from '../components/StatusMessage';

/**
 * Settings screen for server configuration
 * 
 * @param {Object} props - Component props
 * @param {Object} props.config - Current server configuration
 * @param {function} props.onUpdateConfig - Function to call with updated configuration
 */
const SettingsScreen = ({ config, onUpdateConfig }) => {
  const [serverIp, setServerIp] = useState(config.serverIp);
  const [port, setPort] = useState(String(config.port));
  const [status, setStatus] = useState({ type: '', message: '' });

  /**
   * Save the configuration settings
   */
  const handleSave = async () => {
    try {
      // Validate port is a number
      const portNumber = Number(port);
      if (isNaN(portNumber)) {
        setStatus({
          type: 'error',
          message: 'Port must be a number'
        });
        return;
      }

      // Save configuration
      const updatedConfig = {
        serverIp,
        port: portNumber
      };

      await saveConfig(updatedConfig);
      
      // Update the config in parent component
      onUpdateConfig(updatedConfig);
      
      // Show success message
      setStatus({
        type: 'success',
        message: 'Settings saved successfully'
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: `Failed to save settings: ${error.message}`
      });
    }
  };

  return (
    <View style={styles.settingsContainer}>
      <Text style={styles.settingsTitle}>Server Settings</Text>
      
      <StatusMessage type={status.type} message={status.message} />
      
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Server IP Address:</Text>
        <TextInput
          style={styles.input}
          value={serverIp}
          onChangeText={setServerIp}
          placeholder="e.g. 192.168.1.6"
          keyboardType="numeric"
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Port:</Text>
        <TextInput
          style={styles.input}
          value={port}
          onChangeText={setPort}
          placeholder="e.g. 3000"
          keyboardType="numeric"
        />
      </View>
      
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;