import { Text, StyleSheet, View, Button, Alert, TextInput, Platform} from 'react-native'
import React, { useState } from 'react'

export default function TextScreen() {
const [nombre,setNombre]= useState('');
const [contraseña, setContraseña]=useState('');
const [comentario, setComentario]=useState('');
const mostrarAlerta = () => {
  if (nombre.trim() === '' || contraseña.trim()=== '' || comentario.trim()=== '') {
    if (Platform.OS === 'web') {
      window.alert ('ERROR: por favor ingresa todos los datos requeridos');
    } else {
      Alert.alert ('ERROR: por favor ingresa todos los datos requeridos');
    }} 
    else {
      if (Platform.OS === 'web') {
        window.alert(`HOLA ${nombre}! Bienvenido`);
      } else {
        Alert.alert(`HOLA ${nombre}! Bienvenido`);
      }
    }}
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>TextScreen</Text>

      <TextInput 
      style={styles.recuadro}
      placeholder='Escribe tu nombre'
      value ={nombre}
      onChangeText={setNombre} 
      maxLength={50} 
      />
      <TextInput
      style={styles.recuadro}
      placeholder='Escribe tu contraseña'
      value={contraseña}
      onChangeText={setContraseña}
      secureTextEntry={true}
      maxLength={20}
      keyboardType='numeric'
      />
      <TextInput
      style={styles.recuadro}
      placeholder='Escribe tus comentarios'
      value={comentario}
      onChangeText={setComentario}
      multiline={true}
      numberOfLines={4}
      maxLength={200}
      />

      <Button color='blue' title='Mostrar saludo' onPress={mostrarAlerta} />
      </View>
    )
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight:'bold',
    marginBottom: 15,
  },
  recuadro:{
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 20,
  },
});
