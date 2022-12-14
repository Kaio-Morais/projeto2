import React from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';

export default function SingIn() {
  const navigation = useNavigation();
  return (
    <View style= {styles.container}>
      <Animatable.View animation="fadeInLeft" delay ={500} style={styles.containerHeader}>
      <Text style= {styles.message}>Bem Vindo(a)</Text>
      </Animatable.View>
      
      <Animatable.View animation="fadeInUp"  style={styles.containerForm}>
      <Text style= {styles.title}>Login</Text>
      <TextInput
      placeholder="Digite o login ..."
      style= {styles.input}
      />
       <Text style= {styles.title}>Senha</Text>
      <TextInput
      placeholder="Sua senha"
      style= {styles.input}
      />
      <TouchableOpacity 
      style={styles.button}
      onPress={ () => navigation.navigate('First')}
      >
        <Text  style= {styles.buttonText}>Acessar</Text>
        

      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonRegister}>
        <Text style= {styles.buttonText}>Não possui uma conta? Cadastre-se</Text>

      </TouchableOpacity>
        
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#08088A',

  },
  containerHeader:{
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',

  },
  message:{
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff'
  },
  containerForm:{
    backgroundColor:'#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart : '5%',
    paddingEnd : '5%'

  },
  title:{
    fontSize: 20,
    marginTop: 28,
  },
  input:{
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize:16,

  },
  button:{
    backgroundColor:'#08088A',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{
    color:'#fff',
    fontSize: 18,
    fontWeight:'bold',

  },
  buttonRegister:{
    color:'#a1a1a1',
    marginTop: 14,
    alignSelf:'center',
    

  },
  registerText:{
    color:'#a1a1a1',
  }


})