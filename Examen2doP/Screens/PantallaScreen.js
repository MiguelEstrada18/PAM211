import { StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { ScrollView, View } from 'react-native-web';

const fondo = require('../assets/Como decorar un restaurante italiano con estilo.jpg');

export default function PantallaScreen() {
  return (
    <ImageBackground source={fondo} style={styles.background} resizeMode='cover'>

    </ImageBackground>   
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  titulofijo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
});