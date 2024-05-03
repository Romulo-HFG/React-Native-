import React from 'react';
import { StatusBar, ImageBackground } from 'react-native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function RecoverPage({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/recover.jpg')}
        style={styles.background}
      >
        <View>
          <Image
            source={require('../../assets/iconriot2.png')}
            style={styles.logo}
          />
        </View>
        <Text style={styles.title}>NÃO CONSEGUE</Text>
        <Text style={styles.title}> FAZER LOGIN?</Text>
        <Text style={styles.explicativo}>
          Você pode não estar conseguindo{'\n'} fazer login por algumas razões.{'\n'}
          Confira as opções abaixo para{'\n'} encontrar possíveis soluções para o{'\n'} problema.
        </Text>
        <TextInput
          style={styles.input}
          placeholder="DIGITE SEU E-MAIL"
          placeholderTextColor="#464646"
        />
        <Text style={styles.ou}> ou </Text>
        <TextInput
          style={[styles.input]}
          placeholder="DIGITE SE NOME DE USUÁRIO"
          placeholderTextColor="#464646"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonTitle}>➡</Text>
        </TouchableOpacity>
        
        <Text></Text>
       
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  background: {
    flex: 1,
    resizeMode: 'cover', 
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 3,
    fontWeight: 'bold',
    color: '#fff', 
  },
  ou:{
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#fff',
  },
  explicativo:{
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    margin: 30, 
    color: '#fff',
    backgroundColor: 'transparent', 
    padding: 10,
  },
  input: {
    width: '100%',
    backgroundColor: '#dddddd',
    borderRadius: 5,
    padding: 15,
    marginBottom: 5,
    fontSize: 12,
    fontWeight: 'bold',
  },
  button: {
    width: 95,
    height: 95,
    backgroundColor: 'transparent',
    borderRadius: 25,
    alignItems: 'center',
    padding: 25,
    marginTop: "40%",
    borderWidth: 2,
    borderColor: "#999999",
  },
  buttonTitle: {
    fontSize: 30,
    color: '#999999',
  },
  bottomButtons: {
    marginTop: 10,
  },
  bottomButtonText: {
    fontSize: 14,
    color: '#808080',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    textDecorationLine: 'none'
  },
  logo:{
    width: 200,
    height: 100,
    
  }
});
