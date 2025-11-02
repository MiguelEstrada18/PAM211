import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Switch, TouchableOpacity, Alert, Platform, Image, ImageBackground, Dimensions } from 'react-native';

const ImageSplash = require('../assets/WhatsApp Image 2025-11-01 at 6.44.42 PM.jpeg');
const fondo = require('../assets/WhatsApp Image 2025-11-01 at 6.42.59 PM.jpeg');
const logo = require('../assets/WhatsApp Image 2025-11-01 at 6.50.06 PM.jpeg');

export default function RepasoScreen() {
  const [showSplash, setShowSplash] = useState(true);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [aceptaTerminos, setTerminos] = useState(false);
  const [loading, setCargando] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  const showAlert = (title, message) => {
    if (Platform.OS === 'web') {
      window.alert(title + '\n' + message);
    } else {
      Alert.alert(title, message);
    }
  };

const Registrar = () => {
    if (nombre.trim() === '' || correo.trim() === '') {
      showAlert('ERROR', 'Escribir su nombre');
      return;
    }
    const correoMalo = /^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/;
    if (!correoMalo.test(correo)) {
      showAlert('ERROR', 'Correo electrónico inválido.');
      return;
    }
    if (!aceptaTerminos) {
      showAlert('ERROR', 'Se deben aceptar los términos y condiciones para ingresar');
      return;
    }
    setCargando(true);
    setTimeout(() => {
      setCargando(false);
      showAlert('Registro exitoso, Bienvenido', `Nombre: ${nombre}\nCorreo: ${correo}`);
    }, 1500);
  };

  if (showSplash) {
    return (
      <View style={estilos.centro}>
        <ImageBackground source={ImageSplash} style={estilos.fondoPantalla} resizeMode="cover">
          <View style={estilos.capa}>
            {logo ? (
              <Image source={logo} style={estilos.logoSplash} resizeMode="contain" />
            ) : (
              <View style={estilos.logoPlaceholderSplash}>
                <Text style={estilos.logoTexto}>Mi Logo</Text>
              </View>
            )}
            <Text style={estilos.titulo}>Cargando...</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }

  return (
    <ImageBackground source={fondo} style={estilos.fondoPantalla} resizeMode="cover">
      <View style={estilos.forma}>
        <View style={estilos.logo} pointerEvents="none">
          {(logo && <Image source={logo} style={estilos.logoImg} resizeMode="contain" />) || (
            <View style={estilos.logoPlaceholder}>
              <Text style={estilos.logoTexto}>Mi Logo</Text>
            </View>
          )}
        </View>
        <Text style={estilos.etiqueta}>Nombre</Text>
        <TextInput
          style={estilos.campo}
          placeholder="Escribe tu nombre"
          value={nombre}
          onChangeText={setNombre}
          maxLength={100}
        />
        <Text style={estilos.etiqueta}>Correo</Text>
        <TextInput
          style={estilos.campo}
          placeholder="ejemplo@correo.com"
          value={correo}
          onChangeText={setCorreo}
          keyboardType="email-address"
          autoCapitalize="none"
          maxLength={100}
        />
        <View style={estilos.switchFila}>
          <Text style={estilos.switchTexto}>Aceptar términos y condiciones</Text>
          <Switch value={aceptaTerminos} onValueChange={setTerminos} />
        </View>
        <TouchableOpacity style={estilos.boton} onPress={Registrar} disabled={loading}>
          <Text style={estilos.botonTexto}>{loading ? 'REGISTRANDO...' : 'REGISTRARSE'}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const { width, height } = Dimensions.get('window');
const estilos = StyleSheet.create({
  fondoPantalla: {
    width: width,
    height: height,
  },
  capa: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 32,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  logoSplash: {
    width: 120,
    height: 100,
    marginBottom: 10,
  },
  forma: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 100,
    marginBottom: 100,
    flex: 1,
  },
  logo: {
    alignItems: 'center',
    marginBottom: 12,
  },
  logoImg: {
    width: 100,
    height: 80,
  },
  logoTexto: {
    color: 'black',
    fontWeight: '700',
  },
  etiqueta: {
    marginTop: 8,
    marginBottom: 6,
    color: 'black',
    fontWeight: '600',
  },
  campo: {
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  switchFila: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  switchTexto: {
    flex: 1,
    marginRight: 10,
    color: 'black',
  },
  boton: {
    backgroundColor: 'red',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 6,
    width: '100%',
  },
  botonTexto: {
    color: 'white',
    fontWeight: '700',
  },
});