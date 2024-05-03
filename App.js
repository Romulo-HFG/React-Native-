import 'react-native-gesture-handler';
import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions, Text, Image } from 'react-native';
import { Video } from 'expo-av';
import { Button } from 'react-native-elements';
import LoginPage from './source/pages/LoginPage'
import RegisterPage from './source/pages/RegisterPage';
import HomePage from './source/pages/Homepage';
import Routes from './source/Routes';



const { width, height } = Dimensions.get('window');

const App = () => {
  const videoRef = useRef(null);

  const handlePlaybackStatusUpdate = playbackStatus => {
    if (playbackStatus.didJustFinish) {
      videoRef.current.replayAsync();
    }
  };

  return (

      <Routes/>

  );
};

export default App;
