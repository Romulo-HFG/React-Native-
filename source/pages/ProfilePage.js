import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function ProfilePage({ navigation }) {
  const handleRedirect = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/iconriot2.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Riot game creator and developer {'\n'}Rômulo Henrique </Text>
      <Image
        source={require('../../assets/eu.jpg')}
        style={styles.eu}
      />
      <Text style={styles.title}>More About Me</Text>
      <Text style={styles.Text}> Hello, I'm Rômulo Henrique, currently 26 years old and originally from
      Petrópolis. Since childhood, I've developed a deep affinity for
      technology, always intrigued by the mysteries of electronic devices
      and the codes that bring the digital world to life. This initial
      affinity naturally guided me into the exciting universe of full-stack
      development. Currently, I'm immersed in my studies, constantly seeking
      to enhance my skills in this field. My dedication and willingness to
      tackle technical challenges reflect my commitment to knowledge and the
      pursuit of professional excellence. Outside the realm of development,
      my hobby is gaming, and I enjoy practically all types of games,
      especially FPS, MOBA, and RPG. Participating in competitions and
      collaborating with other players are activities that complement my
      relationship with technology. I approach technology practically and
      with determination, aiming not only to understand the basics but also
      to create innovative solutions. The future in full-stack development
      looks promising, and I'm ready to face the challenges that come my
      way.</Text>
      
      <View style={styles.iconsContainer}>
      <TouchableOpacity onPress={() => handleRedirect('https://github.com/Romulo-HFG')}>
    <Image source={require("../../assets/github.png")} style={styles.icon} />
  </TouchableOpacity>
  <TouchableOpacity onPress={() => handleRedirect('https://br.linkedin.com/in/r%C3%B4mulo-henrique-ferreira-gon%C3%A7alves-255b31298')}>
    <Image source={require("../../assets/linkedin.png")} style={styles.icon} />
  </TouchableOpacity>
  <TouchableOpacity onPress={() => handleRedirect('https://romulo-hfg.github.io/Portfolio/')}>
    <Image source={require("../../assets/portfolio.png")} style={styles.icon} />
  </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: "#151320",
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    margin: 10,
    color: "#0ef",
    textAlign: "center",
  },
  Text: {
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: "center",
    color: "#0ef"
  },
  logo: {
    width: 200,
    height: 100,
  },
  eu: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "#0ef",
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 20,
  },
  icon: {
  width: 50,
  height: 50,
  }
});
