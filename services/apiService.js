/**
 * API Service
 * 
 * Handles all API requests to the server for the Remote PC Control application.
 */

import axios from 'axios';
import config from '../config';

// Create axios instance with configuration
const api = axios.create({
  baseURL: `http://${config.server.ip}:${config.server.port}`,
  timeout: config.server.timeout,
  headers: {
    'Content-Type': 'application/json',
  }
});

/**
 * API Service for Remote PC Control
 */
const apiService = {
  /**
   * Send a command to the server
   * 
   * @param {string} command - Command to execute ('shutdown' or 'restart')
   * @returns {Promise} - Promise resolving with the response data
   */
  sendCommand: async (command) => {
    try {
      const response = await api.get(`/${command}`);
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.error || 'Failed to connect to server',
        details: error
      };
    }
  },
  
  /**
   * Check server status
   * 
   * @returns {Promise} - Promise resolving with the server status
   */
  checkStatus: async () => {
    try {
      const response = await api.get('/status');
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      return {
        success: false,
        error: 'Server unavailable',
        details: error
      };
    }
  }
};

export default apiService;