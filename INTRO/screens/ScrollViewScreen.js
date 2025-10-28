import { Text, StyleSheet, View, ScrollView } from 'react-native'
import React, { Component } from 'react'

export default function ScrollViewScreen() {
    return (
      <View style = {styles.container}>
        <ScrollView style={styles.scrollArea} 
        contentContainerStyle={styles.scrollContent} 
        showsHorizontalScrollIndicator={true}
        horizontal={true}>
          <Text style={styles.title}>Comics En Lista</Text>
          <Text style={styles.item}>MI lista</Text>
          <Text style={styles.textRed}>Comics Marvel</Text>
          <Text style={styles.subtitleRed}>House of M</Text>
          <Text style={styles.text}>Seguimos buscando....</Text>
          <Text style={styles.subtitleRed}>New Avengers (Iluminati)</Text>
          <Text style={styles.text}>Seguimos buscando....</Text>
          <Text style={styles.subtitleRed}>Planet Hulk</Text>
          <Text style={styles.text}>Seguimos buscando....</Text>
          <Text style={styles.subtitleRed}>Back In Black</Text>
          <Text style={styles.text}>Seguimos buscando....</Text>
          <Text style={styles.subtitleRed}>X-men Messiah Complex</Text>
          <Text style={styles.text}>Seguimos buscando....</Text>
          <Text style={styles.subtitleRed}>Brand New Day</Text>
          <Text style={styles.text}>Seguimos buscando....</Text>
          <Text style={styles.subtitleRed}>Dark Avengers</Text>
          <Text style={styles.text}>Seguimos buscando....</Text>
          <Text style={styles.subtitleRed}>Siege</Text>
          <Text style={styles.text}>Seguimos buscando....</Text>
          <Text style={styles.subtitleRed}>Avengers vs X-men</Text>
          <Text style={styles.text}>Seguimos buscando....</Text>
          <Text style={styles.subtitleRed}>Gorr Carnicero de Dioses</Text>
          <Text style={styles.text}>Seguimos buscando....</Text>
          <Text style={styles.subtitleRed}>Infinity</Text>
          <Text style={styles.text}>Seguimos buscando....</Text>
          <Text style={styles.subtitleRed}>Age of Ultron vs Marvel Zombies</Text>
          <Text style={styles.text}>Seguimos buscando....</Text>
          <Text style={styles.subtitleRed}>Spider Island</Text>
          <Text style={styles.text}>Seguimos buscando....</Text>
          <Text style={styles.subtitleRed}>Moonknight: Lunático</Text>
          <Text style={styles.text}>Seguimos buscando....</Text>
        </ScrollView>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ffffff',
  },
  scrollArea: {
    flex: 1,
  },
  scrollContent: {
    alignItems: "center",
    paddingVertical: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  item: {
    backgroundColor: 'red',
    color: 'white',
    padding: 12,
    marginVertical: 8,
    borderRadius: 10,
    textAlign: 'center',
  },
  subtitleRed: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'red',
    borderRadius: 10,
    marginVertical: 12,
    paddingVertical: 12,
    paddingHorizontal: 10,
    width: '95%',
    alignSelf: 'center',
  },
  text: {
    fontSize: 16,
    color: 'black',
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 15,
    padding: 10,
  },
  textRed: {
    fontSize: 16,
    color: 'white',
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 15,
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 10,
  },
});