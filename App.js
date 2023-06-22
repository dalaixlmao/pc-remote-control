import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import axios from 'axios';
import { NetworkInfo } from 'react-native-network-info';
//const { exec } = require('child_process');
//import shutdown from './shutdown';

const ip='192.168.1.6';



export default function App() {

  const executeCommand = (command) => {
    axios.get(`http://${ip}:3000/${command}`)
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.error(error.response.data.error);
      });
    }
  const handleShutdown = () => {


  };

  const handleRestart = () => {
    console.log('Restart');
  };




  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.shutdown}>
          <TouchableOpacity onPress={() => executeCommand('shutdown')}>
            <Text style={styles.shutdownT}>Shutdown</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.restart}>
          <TouchableOpacity onPress={() => executeCommand('restart')}>
          <Text style={styles.restartT}>Restart</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
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
    textColor:"white",
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

  HybernateT: {
    color: 'white',
  },





});
