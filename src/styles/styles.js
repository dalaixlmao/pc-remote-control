import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
  },

  box: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#A8CDEF',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  shutdown: {
    flex: 1,
    backgroundColor: '#004382',
    height: 100,
    width: "50%",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },

  restart: {
    flex: 1,
    backgroundColor: '#3775AF',
    width: "50%",
    height: 100,
    alignItems: 'center',
    borderRadius: 100,
    justifyContent: 'center',
  },

  shutdownT: {
    color: 'white',
  },

  restartT: {
    color: 'white',
  },

  // Settings screen styles
  settingsContainer: {
    flex: 1,
    backgroundColor: '#A8CDEF',
    padding: 20,
  },
  
  settingsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#004382',
  },
  
  inputContainer: {
    marginBottom: 20,
  },
  
  inputLabel: {
    fontSize: 16,
    marginBottom: 5,
    color: '#004382',
  },
  
  input: {
    borderWidth: 1,
    borderColor: '#3775AF',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  
  saveButton: {
    backgroundColor: '#004382',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Navigation
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#004382',
    padding: 10,
  },

  navButton: {
    padding: 10,
  },

  navButtonText: {
    color: 'white',
    fontSize: 16,
  },

  navButtonActive: {
    borderBottomWidth: 2,
    borderBottomColor: 'white',
  },

  // Error message
  errorContainer: {
    backgroundColor: 'rgba(255, 0, 0, 0.1)',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    borderWidth: 1,
    borderColor: 'red',
  },
  
  errorText: {
    color: 'red',
  },

  // Success message
  successContainer: {
    backgroundColor: 'rgba(0, 255, 0, 0.1)',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    borderWidth: 1,
    borderColor: 'green',
  },
  
  successText: {
    color: 'green',
  },
});