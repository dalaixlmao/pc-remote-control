import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/styles';

/**
 * Component for displaying status messages (success/error)
 * 
 * @param {Object} props - Component props
 * @param {string} props.type - Message type ('error' or 'success')
 * @param {string} props.message - The message to display
 */
const StatusMessage = ({ type, message }) => {
  if (!message) {
    return null;
  }

  const containerStyle = type === 'error' 
    ? styles.errorContainer 
    : styles.successContainer;
    
  const textStyle = type === 'error'
    ? styles.errorText
    : styles.successText;

  return (
    <View style={containerStyle}>
      <Text style={textStyle}>{message}</Text>
    </View>
  );
};

export default StatusMessage;