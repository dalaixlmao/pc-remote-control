import axios from 'axios';
import { getServerUrl } from '../config/config';

/**
 * Send a command to the server
 * @param {Object} config - The server configuration object
 * @param {string} command - The command to send (shutdown or restart)
 * @returns {Promise<Object>} - The response from the server
 * @throws {Error} - If the request fails
 */
export const sendCommand = async (config, command) => {
  try {
    const serverUrl = getServerUrl(config);
    const response = await axios.get(`${serverUrl}/${command}`);
    return {
      success: true,
      message: response.data.message
    };
  } catch (error) {
    let errorMessage = 'Failed to communicate with the server';
    
    if (error.response) {
      // The server responded with a status code outside of 2xx range
      errorMessage = error.response.data.error || 'Server error';
    } else if (error.request) {
      // The request was made but no response was received
      errorMessage = 'Server not responding. Check your connection and server settings.';
    }
    
    throw new Error(errorMessage);
  }
};