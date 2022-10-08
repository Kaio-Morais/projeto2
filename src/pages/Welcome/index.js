
import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require('../../assets/logo.png')}
          style={{ width:'100%'}}
          resizeMode="contain"
        />
      </View>
      <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Seu controle financeiro na palma da mão</Text>
        <Text style={styles.text}>Central de ajuda</Text>

        <TouchableOpacity 
        style={styles.button}
        onPress={ () => navigation.navigate('SingIn')}
        
        >
        
        
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>


      </Animatable.View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#08088A'

  },
  containerLogo:{
    flex:2,
    backgroundColor: '#08088A',
    justifyContent: 'center',
    alignItems:'center',
   

  },
  containerForm:{
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius:25,
    paddingStart : '5%',
    paddingEnd : '5%'

  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
  },
  text: {
    color: '#a1a1a1'
  },
  button: {
    position: 'absolute',
    backgroundColor: '#08088A',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center',

  },
  buttonText:{
    fontSize: 18,
    color:'#fff',
    fontWeight: 'bold',

  }




})