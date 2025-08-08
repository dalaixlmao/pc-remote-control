import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

/**
 * A control button component for sending commands
 * 
 * @param {Object} props - Component props
 * @param {string} props.type - Type of button (shutdown or restart)
 * @param {function} props.onPress - Function to call when button is pressed
 * @param {Object} props.style - Style object for the button container
 * @param {Object} props.textStyle - Style object for the button text
 */
const ControlButton = ({ type, onPress, style, textStyle }) => {
  // Determine button label based on type
  const getButtonLabel = () => {
    switch (type.toLowerCase()) {
      case 'shutdown':
        return 'Shutdown';
      case 'restart':
        return 'Restart';
      default:
        return type;
    }
  };

  return (
    <View style={style}>
      <TouchableOpacity onPress={onPress}>
        <Text style={textStyle}>{getButtonLabel()}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ControlButton;