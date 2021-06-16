import * as React from 'react';
import { useState } from 'react';
import { TextInputMask } from 'react-native-masked-text'
import { StyleSheet,TextInput, ScrollView,TouchableOpacity } from 'react-native';

import { Text, View } from 'react-native';

export default function Cadastro() {

  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [cell, setCell] = useState('');
  const [date,setDate] = useState('');
  const [email,setEmail] = useState(null);
  const [password, setPassword] = useState('')


  return (
    <ScrollView centerContent>
      <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <Text style={styles.subTitle}>Crie um cadastro e preencha todos os campos a seguir:</Text>
      <Text style={styles.supTitle}>Nome completo:</Text>
      <TextInput 
      style={styles.input}
      placeholder="Nome completo"
      />
      <Text style={styles.supTitle}>Gênero:</Text>
      <TextInput 
      style={styles.input}
      placeholder="Digite seu gênero:"
      />
      <Text style={styles.supTitle}>CPF:</Text>
      <TextInputMask
      placeholder="Digite seu CPF"
      style={styles.input}
      type={'cpf'}
      value={cpf}
      onChangeText={ text => setCpf(text)}
      />
      <Text style={styles.supTitle}>RG:</Text>
      <TextInputMask
      placeholder="Digite seu RG"
      type={'cpf'}
      style={styles.input}
      value={rg}
      onChangeText={ text => setRg(text)}
/>
<Text style={styles.supTitle}>Celular:</Text>
    <TextInputMask  
    placeholder="Digite seu celular"
    style={styles.input}
    type={'cel-phone'}
    options={{
      maskType: 'BRL',
      withDDD: true,
      dddMask: '(99)'
    }}
    value={cell}
    onChangeText={ text => setCell(text)}
    />
    <Text style={styles.supTitle}>Data de nascimento:</Text>
    <TextInputMask
    placeholder="Digite sua data de nascimento"
    style={styles.input}
    type={'datetime'}
    options={{
    format: 'DD/MM/YYYY'
    }}
    value={date}
    onChangeText={ text => setDate(text)}
    />
    <Text style={styles.supTitle}>Endereço profissal:</Text>
    <TextInput 
      style={styles.input}
      placeholder="Digite seu endereço profissal"
      />
      <Text style={styles.supTitle}>Empresa:</Text>
      <TextInput 
      style={styles.input}
      placeholder="Digite o nome da Empresa"
      />
      <Text style={styles.supTitle}>Cargo:</Text>
      <TextInput 
      style={styles.input}
      placeholder="Digite seu cargo"
      />
      <Text style={styles.supTitle}>E-mail:</Text>
      <TextInput 
      style={styles.input}
      placeholder="Digite um endereço de email"
      onChangeText={value => setEmail(null)}
      keyboardType="email-address"
      />
      <Text style={styles.supTitle}>Confirmar e-mail:</Text>
      <TextInput 
      style={styles.input}
      placeholder="Repita o endereço de e-mail"
      onChangeText={value => setEmail(null)}
      keyboardType="email-address"
      />
      <Text style={styles.supTitle}>Crie uma senha:</Text>
      <TextInput 
      style={styles.input}
      placeholder="Senha"
      onChangeText={value => setPassword('')}
      secureTextEntry={true}
      />
      <Text style={styles.supTitle}>Confirmar senha:</Text>
      <TextInput 
      style={styles.input}
      placeholder="Repita a senha"
      onChangeText={value => setPassword('')}
      secureTextEntry={true}
      />
      <TouchableOpacity style={styles.btnAcesso}>
        <Text style={styles.acessoText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnGoogle}>
        <Text style={styles.googleText}>Cadastrar com Google</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B200F0',
    paddingLeft: 25
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
  title: {
    marginTop: 10,
    paddingLeft: 95,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  subTitle:{
    fontSize: 15,
    paddingTop: 10,
    padding:20,
    color: 'white'
  },
  supTitle:{
    fontSize: 15,
    paddingBottom: 8,
    paddingTop: 3,
    fontWeight: 'bold',
    color: 'white'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    color:'#fff'
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
    marginTop:10,
    marginBottom: 10
  },
  googleText:{
    color:'#FFF',
    fontSize: 18
  },
});
