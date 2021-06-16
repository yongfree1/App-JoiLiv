import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, TextInput , TouchableOpacity,Image, ScrollView} from 'react-native';

import { Text, View } from 'react-native';

export default function Login() {

  const [email,setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/images/control.png')} />
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subTitle}>Faça login para ter acesso ao app</Text>
      <TextInput 
      style={styles.input}
      placeholder="Digite seu email"
      onChangeText={value => setEmail(null)}
      keyboardType="email-address"
      />

      <TextInput 
      style={styles.input}
      placeholder="Digite sua senha"
      onChangeText={value => setPassword(null)}
      secureTextEntry={true}
      />

      <TouchableOpacity style={styles.btnAcesso}>
        <Text style={styles.acessoText}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnGoogle}>
        <Text style={styles.googleText}>Login com Google</Text>
      </TouchableOpacity>
      <Text style={styles.crie}>Criar uma conta gratuita</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logo:{
    height: 100,
    width: 100,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B200F0'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  subTitle:{
    fontSize: 15,
    color: 'white',
    paddingBottom: 15
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input:{
    width: '90%',
    backgroundColor: '#fff',
    marginBottom:16,
    color:'#222',
    borderRadius: 10,
    fontSize: 17,
    padding: 10
  },
  btnAcesso:{
    backgroundColor: '#6B51F5',
    width:'90%',
    height: 45,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 10
  },
  acessoText:{
    color:'#FFF',
    fontSize: 18
  },
  btnGoogle:{
    backgroundColor: 'black',
    width:'90%',
    height: 45,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 10,
    marginTop:10
  },
  googleText:{
    color:'#FFF',
    fontSize: 18
  },
  crie:{
    marginTop: 15,
    color:'#FFF',
    fontSize: 15
  },
});
