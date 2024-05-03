import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image,Alert } from 'react-native';


export default function LoginPage({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'desenvolvedor' && password === 'RiotGames') {
      navigation.navigate("Profile");
    } else {
      Alert.alert('Erro de login', 'Nome de usuário ou senha incorretos.');
    }
  };
  return (
    <View style={styles.container}>
      
      <View>
        <Image
          source={require('../../assets/iconriot2.png')}
          style={[styles.logo]}
        />
      </View>
      <Text style={styles.title}>Iniciar sessão</Text>
      <TextInput
        style={styles.input}
        placeholder="NOME DE USUÁRIO"
        placeholderTextColor="#464646"
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="SENHA"
        placeholderTextColor="#464646"
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonTitle} onPress={handleLogin}>➡</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomButtons}>
        <Text style={styles.bottomButtonText} onPress={() => navigation.navigate("Recover")}>Não consegue fazer login?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomButtons } onPress={() => navigation.navigate("Register")} >
        <Text style={styles.bottomButtonText}>Criar conta</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
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
    marginTop: "80%",
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
