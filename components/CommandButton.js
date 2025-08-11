/**
 * CommandButton Component
 * 
 * A reusable button component for the Remote PC Control application
 * that displays an SVG icon and text.
 */

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';

/**
 * CommandButton component
 * 
 * @param {object} props - Component props
 * @param {function} props.onPress - Function to call when button is pressed
 * @param {string} props.label - Button label text
 * @param {string} props.svgContent - SVG content as string
 * @param {object} props.style - Additional style for the button container
 * @param {boolean} props.disabled - Whether the button is disabled
 */
export default function CommandButton({ onPress, label, svgContent, style, disabled = false }) {
  return (
    <View style={[styles.buttonContainer, style]}>
      <TouchableOpacity 
        onPress={onPress}
        disabled={disabled}
        style={styles.button}
        activeOpacity={0.7}
      >
        {svgContent && <SvgXml xml={svgContent} width={24} height={24} />}
        <Text style={styles.buttonText}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#004382',
    height: 100,
    borderRadius: 20,
    margin: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  button: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
    textAlign: 'center',
  },
});