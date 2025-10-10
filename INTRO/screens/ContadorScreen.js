//1. Zona de los Imports, todo lo que necesitemos irle agregando a todas las screens.
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React,{useState} from 'react';
import { Button } from 'react-native-web';

//2. Zona del Main: Donde pondremos nuestros componentes.
export default function ContadorScreen() {
     const [contador, setContador]= useState(0);

  return (

    <View style={styles.container}>
      <Text style={styles.text}> Contador: </Text>
      <Text style={styles.text2}> {contador} </Text>

     <View style={styles.botonesContainer}>
      <Button color='red' title='Agregar' onPress={()=>setContador(contador+1)}/>
      <Button color='gold' title='Quitar' onPress={()=>setContador(contador-1)}/>
      <Button color='orange' title='Reiniciar' onPress={()=>setContador(contador-contador)}/>
     </View>
      

      <StatusBar style="auto" />
    </View>
  );
}

//3. Zona de los estilos: Zona estética para componentes.
const styles = StyleSheet.create({ //Objeto styles en la clase container
  container: {
    flex: 1, //Crear contenedor y repartir espacios dispoinibles
    backgroundColor: '#fff', //Asigna color a Screen 
    alignItems: 'center', //Alinea elementos Maneja eje x
    justifyContent: 'center', //Alinea elemntos Maneja eje y
  },
  text:{
    color:'blue',
    fontSize:30,
    fontFamily:'Times New Roman',
    fontWeight:'bold',
    fontStyle:'italic',
    textDecorationLine:'line-through',
  },
  text2:{
    color:'red',
    fontSize:40,
    fontFamily:'Courier',
    fontWeight:'900',
    fontStyle:'italic',
    textDecorationLine:'underline',
  }, 
  botonesContainer:{
    marginTop:15,
    flexDirection:'row-reverse',
    gap:20,
  },
});