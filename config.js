/**
 * Application Configuration
 * 
 * This file contains configuration settings for the Remote PC Control application.
 * Edit these values to match your environment.
 */

const config = {
  // Server configuration
  server: {
    // IP address of the server (should be the IP of the computer you want to control)
    ip: '192.168.1.6',
    
    // Port the server is running on
    port: 3000,
    
    // Timeout for API requests in milliseconds
    timeout: 5000
  },
  
  // UI configuration
  ui: {
    // Theme colors
    colors: {
      primary: '#004382',
      secondary: '#3775AF',
      background: '#A8CDEF',
      text: '#FFFFFF'
    }
  }
};

export default config;