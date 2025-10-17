//Importa React para poder usar componentes
import React from 'react';
// Importa varios componentes 
import { 
  StyleSheet, // Para crear estilos
  View,       // Componente de contenedor
  Text,       // Componente para mostrar texto
  ImageBackground, // Componente para establecer una imagen de fondo
  Dimensions, // Para obtener dimensiones de la pantalla
} from 'react-native';

// Se importa una imagen local que se usará como fondo
const backgroundImage = require('../assets/splash-icon.png');

// Componente funcional llamado "ImageBackGroundSplashScreen"
export default function ImageBackGroundSplashScreen({ navigation }) {
  return (
    // Componente que muestra una imagen de fondo
    <ImageBackground
      source={backgroundImage} // Imagen de fondo
      style={styles.background} // Aplica el estilo de fondo
      resizeMode="cover" // La imagen cubrirá todo el espacio disponible
    >
      {/* Vista superpuesta sobre la imagen de fondo */}
      <View style={styles.overlay}>
        {/* Título principal de la pantalla */}
        <Text style={styles.title}>Bienvenido</Text>
        {/* Subtítulo o mensaje adicional */}
        <Text style={styles.title}>Cargando...</Text>   
      </View>
    </ImageBackground>
  );
}

// Obtiene el ancho y alto de la pantalla del dispositivo
const { width, height } = Dimensions.get('window');

// Define los estilos para los componentes
const styles = StyleSheet.create({
  // Estilo para la imagen de fondo
  background: {
    width: width,   // Ancho igual al de la pantalla
    height: height, // Alto igual al de la pantalla
  },
  // Estilo para la vista superpuesta (overlay)
  overlay: {
    flex: 1, // Ocupa todo el espacio disponible
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente negro
    justifyContent: 'center', // Centra el contenido verticalmente
    alignItems: 'center',     // Centra el contenido horizontalmente
    padding: 20,              // Espaciado interno
  },
  // Estilo para el texto principal (título)
  title: {
    color: '#fff',       // Texto blanco
    fontSize: 32,        // Tamaño grande
    fontWeight: 'bold',  // Negrita
    marginBottom: 10,    // Espaciado inferior
    textAlign: 'center', // Centrado horizontalmente
  },
});