import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './src/styles/styles';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import Navigation from './src/components/Navigation';
import { loadConfig } from './src/config/config';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [config, setConfig] = useState({
    serverIp: '192.168.1.6',
    port: 3000
  });
  const [isLoading, setIsLoading] = useState(true);

  // Load saved configuration on app startup
  useEffect(() => {
    async function initializeApp() {
      try {
        const savedConfig = await loadConfig();
        setConfig(savedConfig);
      } catch (error) {
        console.error('Failed to load configuration:', error);
      } finally {
        setIsLoading(false);
      }
    }

    initializeApp();
  }, []);

  // Handle navigation between screens
  const handleNavigate = (screen) => {
    setCurrentScreen(screen);
  };

  // Update configuration after settings are saved
  const handleUpdateConfig = (newConfig) => {
    setConfig(newConfig);
  };

  // Show loading state while loading configuration
  if (isLoading) {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <StatusBar style="auto" />
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Navigation 
        currentScreen={currentScreen} 
        onNavigate={handleNavigate} 
      />
      
      {currentScreen === 'home' ? (
        <HomeScreen config={config} />
      ) : (
        <SettingsScreen 
          config={config} 
          onUpdateConfig={handleUpdateConfig} 
        />
      )}
      
      <StatusBar style="auto" />
    </View>
  );
}