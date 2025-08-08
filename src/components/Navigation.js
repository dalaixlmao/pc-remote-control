import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

/**
 * Navigation bar component for switching between screens
 * 
 * @param {Object} props - Component props
 * @param {string} props.currentScreen - The currently active screen
 * @param {function} props.onNavigate - Function to call with the target screen name
 */
const Navigation = ({ currentScreen, onNavigate }) => {
  const isActive = (screen) => currentScreen === screen;
  
  return (
    <View style={styles.navContainer}>
      <TouchableOpacity
        style={[styles.navButton, isActive('home') && styles.navButtonActive]}
        onPress={() => onNavigate('home')}
      >
        <Text style={styles.navButtonText}>Control</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.navButton, isActive('settings') && styles.navButtonActive]}
        onPress={() => onNavigate('settings')}
      >
        <Text style={styles.navButtonText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navigation;