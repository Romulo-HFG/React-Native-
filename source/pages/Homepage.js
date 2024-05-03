import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions, Text, Image } from 'react-native';
import { Video } from 'expo-av';
import { Button } from 'react-native-elements';


const { width, height } = Dimensions.get('window');

const HomePage = ({navigation}) => {
  const videoRef = useRef(null);

  const handlePlaybackStatusUpdate = playbackStatus => {
    if (playbackStatus.didJustFinish) {
      videoRef.current.replayAsync();
    }
  };

  return (
    <View style={styles.container}>
     
      
      { <Video
        ref={videoRef}
        source={require('../../assets/lol.mp4')}
        style={styles.video}
        resizeMode="cover"
        shouldPlay
        onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
      /> }
      { <View style={styles.textContainer}>
        <Text style={styles.text}>Boas-vindas ao Jean Mobile!</Text>
        <Text style={styles.text2}>Faça login para conferir as últimas notícias, 
        visualizar seu perfil, assistir a partidas de Esports e conversar com amigos.</Text>
      </View> }
      { <View style={styles.buttonContainer}>
        <Button
          title="Riot"
          onPress={() => navigation.navigate("Login")}
          buttonStyle={styles.buttonStyle}
          iconRight
          icon={
            <Image
              source={require('../../assets/Riot.png')}
              style={{ width: 30, height: 30 }}
            />
          }
        />
      </View> }
      { <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/Google.png')}
          style={[styles.image, styles.imageMargin]}
        />
        <Image
          source={require('../../assets/Xbox.png')}
          style={[styles.image, styles.imageMargin]}
        />
        <Image
          source={require('../../assets/Mac.png')}
          style={[styles.image, styles.imageMargin]}
        />
        <Image
          source={require('../../assets/Face.png')}
          style={[styles.image, styles.imageMargin]}
        />
      </View> }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
   video: {
     width: '100%',
     height: '100%',
     position: 'absolute',
   },
   textContainer: {
     position: 'absolute',
     textAlign: 'center',
     bottom: 200,
     backgroundColor: 'rgba(0, 0, 0, 0.0)',
     padding: 10,
     borderRadius: 5,
     zIndex: 1,
   },
   text: {
     color: 'white',
     fontSize: 20,
     textAlign: 'center',
     fontWeight: 'bold',
   },
   text2: {
     fontSize: 15,
     color: 'white',
     textAlign: 'center',
   },
   buttonContainer: {
     position: 'absolute',
     bottom: 145,
     zIndex: 1,
   },
   buttonStyle: {
     backgroundColor: '#D32F2F',
     flexDirection: 'row-reverse',
     alignItems: 'center', 
     padding: 10,
     width: '100%',
     height: 50,
     textAlign: 'center',
     borderRadius: 15
   },
   imageContainer: {
     position: 'absolute',
     bottom: 95,
     zIndex: 1,
     flexDirection: 'row',
   },
   image: {
     width: 40,
     height: 40,
     borderRadius: 5,
     margin: 1,
   },
   imageMargin: {
     marginHorizontal: 10, 
   },
 });

export default HomePage;
