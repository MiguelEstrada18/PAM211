// Importa React y useState, useEffect para manejo de estado y efectos; NUEVO
import React, { useState, useEffect } from 'react';
// Importa varios componentes de React Native
import { 
  StyleSheet, // Para crear estilos
  View,       // Componente de contenedor
  Text,       // Componente para mostrar texto
  ImageBackground, // Componente para establecer una imagen de fondo
  Dimensions, // Para obtener dimensiones de pantalla
} from 'react-native';

// Imagen local que se usará como fondo del SplashScreen
const backgroundImage = require('../assets/splash-icon.png');


// Componente funcional principal
export default function ImageBackGroundSplashScreen({ navigation }) {
  // Estado para controlar si mostrar SplashScreen o pantalla principal; NUEVO
  const [showSplash, setShowSplash] = useState(true);

  // useEffect para manejar el temporizador; NUEVO
  useEffect(() => {
    // Establece un temporizador que oculta el splash después de 3 segundos; NUEVO
    const timer = setTimeout(() => {
      setShowSplash(false); // Cambia el estado para mostrar la pantalla principal; NUEVO
    }, 3000); // 3000 ms = 3 segundos

    // Limpia el temporizador si el componente se desmonta antes; NUEVO
    return () => clearTimeout(timer);
  }, []); // El efecto se ejecuta solo una vez al montar; NUEVO

  // Si está en modo SplashScreen, muestra la imagen de fondo con texto; NUEVO
  if (showSplash) {
    return (
      <ImageBackground
        source={backgroundImage} // Imagen de fondo
        style={styles.background} // Aplica estilos para ocupar toda la pantalla
        resizeMode="cover" // La imagen cubre toda el área, después ponemos los subtitulos
      >
        <View style={styles.overlay}> 
          <Text style={styles.title}>Bienvenido</Text>
          <Text style={styles.title}>Cargando...</Text>   
        </View>
      </ImageBackground>
    );
  }

  // Si ya pasó el tiempo, muestra esta otra pantalla dentro del mismo componente; NUEVO
  return (
    <ImageBackground
        source={backgroundImage} // Imagen de fondo
        style={styles.background} // Aplica estilos para ocupar toda la pantalla
        resizeMode="cover" // La imagen cubre toda el área, después ponemos los subtitulos
      >
    <View style={styles.mainScreen}>
      <Text style={styles.mainText}>Bienvenido</Text>
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
    width: width, // Ancho igual al de la pantalla
    height: height, // Alto igual al de la pantalla
  },
  // Estilo para la vista superpuesta (overlay)
  overlay: {
    flex: 1, // Ocupa todo el espacio disponible
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente negro
    justifyContent: 'center', // Centra el contenido verticalmente
    alignItems: 'center', // Centra el contenido horizontalmente
    padding: 20, // Espaciado interno
  },
  // Estilo para el texto principal (título)
  title: {
    color: 'white', // Texto blanco
    fontSize: 32, // Tamaño grande
    fontWeight: 'bold', // Negrita
    marginBottom: 10, // Espaciado inferior
    textAlign: 'center', // Centrado horizontalmente
  },
  // Estilo para la pantalla principal después del SplashScreen; NUEVO TODO
  mainScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Texto para la pantalla principal; NUEVO TODO
  mainText: {
    fontSize: 24,
    color: 'black',
  },
});