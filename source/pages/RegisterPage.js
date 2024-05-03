import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function RegisterPage() {
  return (
    <View style={styles.container}>
      <View>
      <Image
          source={require('../../assets/iconriot.jpg')}
          style={[styles.logo]}
        />
      </View>
      <Text style={styles.title}>Criar conta</Text>
      <TextInput
        style={styles.input}
        placeholder="NOME DE USUÁRIO"
        placeholderTextColor="#464646"
      />
         <TextInput
        style={styles.input}
        placeholder="E-MAIL"
        placeholderTextColor="#464646"
      />
         <TextInput
        style={styles.input}
        placeholder="NOME DE INVOCADOR"
        placeholderTextColor="#464646"
      />
         <TextInput
        style={styles.input}
        placeholder="SENHA"
        placeholderTextColor="#464646"
      />
      <TextInput
        style={[styles.input]}
        placeholder="DIGITE SUA SENHA NOVAMENTE"
        placeholderTextColor="#464646"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonTitle}>➡</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
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
  title: {
    fontSize: 24,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    backgroundColor: '#dddddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 12,
    fontWeight: 'bold',
  },
  button: {
    width: 95,
    height: 95,
    backgroundColor: '#fff',
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
