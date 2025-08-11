import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, ActivityIndicator } from 'react-native';
import { SvgXml } from 'react-native-svg';

// Import configuration and services
import config from './config';
import apiService from './services/apiService';

// Import components
import CommandButton from './components/CommandButton';

// Import SVG assets as strings
const shutdownSvg = `<svg width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.04193 7.84723C4.09519 9.79585 2.77 12.278 2.23395 14.9798C1.6979 17.6816 1.97505 20.4816 3.03036 23.0259C4.08568 25.5701 5.87175 27.7443 8.16273 29.2735C10.4537 30.8027 13.1467 31.6181 15.9011 31.6168C18.6556 31.6155 21.3478 30.7974 23.6373 29.266C25.9267 27.7346 27.7107 25.5587 28.7636 23.0134C29.8164 20.4681 30.0908 17.6678 29.5522 14.9665C29.0135 12.2653 27.6859 9.7844 25.7373 7.83766M16.43 1.08519L16.43 14.4762" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const restartSvg = `<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.75683 5.94765C7.32263 3.24068 10.9689 1.54974 15.014 1.54974C22.7816 1.54974 29.0785 7.78494 29.0785 15.4764C29.0785 23.168 22.7816 29.4031 15.014 29.4031C10.9689 29.4031 7.32263 27.7122 4.75683 25.0052M6.63899 10.0725L1.2251 10.0725L1.2251 4.71165" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

/**
 * Remote PC Control Application
 * 
 * A mobile app that allows users to send shutdown and restart commands
 * to a remote computer running the companion server.
 */
export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [serverStatus, setServerStatus] = useState(null);

  // Check server status on component mount
  useEffect(() => {
    checkServerStatus();
  }, []);

  /**
   * Check if the server is available
   */
  const checkServerStatus = async () => {
    const result = await apiService.checkStatus();
    setServerStatus(result.success ? 'online' : 'offline');
  };

  /**
   * Execute a command on the remote server
   * 
   * @param {string} command - The command to execute ('shutdown' or 'restart')
   */
  const executeCommand = async (command) => {
    // Show confirmation dialog
    Alert.alert(
      `Confirm ${command}`,
      `Are you sure you want to ${command} the remote computer?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Yes', 
          style: 'destructive',
          onPress: async () => {
            setIsLoading(true);
            
            try {
              const result = await apiService.sendCommand(command);
              
              if (result.success) {
                Alert.alert('Success', result.data.message);
              } else {
                Alert.alert('Error', result.error);
              }
            } catch (error) {
              Alert.alert('Error', 'An unexpected error occurred');
              console.error(error);
            } finally {
              setIsLoading(false);
            }
          }
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      {serverStatus === 'offline' && (
        <View style={styles.statusBanner}>
          <Text style={styles.statusText}>Server offline</Text>
        </View>
      )}
      
      <View style={styles.box}>
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={config.ui.colors.text} />
            <Text style={styles.loadingText}>Sending command...</Text>
          </View>
        ) : (
          <>
            <CommandButton 
              onPress={() => executeCommand('shutdown')}
              label="Shutdown"
              svgContent={shutdownSvg}
              style={styles.shutdown}
              disabled={isLoading || serverStatus === 'offline'}
            />

            <CommandButton 
              onPress={() => executeCommand('restart')}
              label="Restart"
              svgContent={restartSvg}
              style={styles.restart}
              disabled={isLoading || serverStatus === 'offline'}
            />
          </>
        )}
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.ui.colors.background,
  },
  statusBanner: {
    backgroundColor: '#FF5252',
    padding: 10,
    alignItems: 'center',
  },
  statusText: {
    color: 'white',
    fontWeight: 'bold',
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shutdown: {
    flex: 1,
    backgroundColor: config.ui.colors.primary,
  },
  restart: {
    flex: 1,
    backgroundColor: config.ui.colors.secondary,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#004382',
    marginTop: 10,
    fontSize: 16,
  }
});