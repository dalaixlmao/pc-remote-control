import AsyncStorage from '@react-native-async-storage/async-storage';

// Default server configuration
const DEFAULT_CONFIG = {
  serverIp: '192.168.1.6',
  port: 3000,
};

// Keys for AsyncStorage
const STORAGE_KEYS = {
  SERVER_IP: 'remote_pc_control_server_ip',
  PORT: 'remote_pc_control_port',
};

/**
 * Load server configuration from AsyncStorage
 * @returns {Promise<Object>} The configuration object
 */
export const loadConfig = async () => {
  try {
    const serverIp = await AsyncStorage.getItem(STORAGE_KEYS.SERVER_IP);
    const port = await AsyncStorage.getItem(STORAGE_KEYS.PORT);
    
    return {
      serverIp: serverIp || DEFAULT_CONFIG.serverIp,
      port: port ? Number(port) : DEFAULT_CONFIG.port,
    };
  } catch (error) {
    console.error('Failed to load config:', error);
    return DEFAULT_CONFIG;
  }
};

/**
 * Save server configuration to AsyncStorage
 * @param {Object} config - The configuration object to save
 * @returns {Promise<void>}
 */
export const saveConfig = async (config) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.SERVER_IP, config.serverIp);
    await AsyncStorage.setItem(STORAGE_KEYS.PORT, String(config.port));
  } catch (error) {
    console.error('Failed to save config:', error);
    throw error;
  }
};

/**
 * Get server URL from configuration
 * @param {Object} config - The configuration object
 * @returns {string} The complete server URL
 */
export const getServerUrl = (config) => {
  return `http://${config.serverIp}:${config.port}`;
};