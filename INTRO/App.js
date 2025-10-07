//1. Zona de los Imports, todo lo que necesitemos irle agregando a todas las screens.
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React,{useState} from 'react';
import { Button } from 'react-native-web';

//2. Zona del Main: Donde pondremos nuestros componentes.
export default function App() {
     const [contador, setContador]= useState(0);

  return (

    <View style={styles.container}>
      <Text>Contador: {contador} </Text>
      <Button title='Agregar' onPress={()=>setContador(contador+1)}/>
      <Button title='Quitar' onPress={()=>setContador(contador-1)}/>
      <Button title='Reiniciar' onPress={()=>setContador(contador-contador)}/>

      <StatusBar style="auto" />
    </View>
  );
}

//3. Zona de los estilos: Zona estética para componentes.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
