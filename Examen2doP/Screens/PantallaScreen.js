import { StyleSheet, Text, View, ScrollView, ImageBackground, SectionList, Dimensions } from 'react-native';
import { Button } from 'react-native-web';




const fondo = require('../assets/Como decorar un restaurante italiano con estilo.jpg');
const plato1 = require('../assets/Como decorar un restaurante italiano con estilo.jpg');
const plato2 = require('../assets/Como decorar un restaurante italiano con estilo.jpg');
const plato3 = require('../assets/Como decorar un restaurante italiano con estilo.jpg');
const plato4 = require('../assets/Como decorar un restaurante italiano con estilo.jpg');


const platillos = [
    { categoria: 'Entrada - Sopa', data: ['Sopa de Fideo', '30 pesos'] }, 
    { categoria: 'Entrada - Arroz con Plátano', data: ['Arroz rojo con fruta plátano', '50 pesos'] },
    { categoria: 'Plato Principal - Pollo a la Plancha', data: ['Pollo a la plancha con verduras', '50 pesos'] },
    { categoria: 'Plato Proncipal - Torta', data: ['Torta con Carne Asada y Verduras', '50 pesos'] },
]
export default function PantallaScreen() {
  return (
    <ImageBackground source={fondo} style={styles.background} resizeMode='cover'>
     <View style={styles.container}>
        <Text style={styles.titulofijo}> LA CASA DE MIGUEL - Restaurante de comida mexicana saludable </Text>
        <ScrollView style={styles.scrollArea} 
        contentContainerStyle={styles.scrollContent} 
        showsVerticalScrollIndicator={true}>
            <SectionList sections={platillos} renderItem={({item}) => (
                <Text style={styles.item}>{item}</Text>
            )}
            renderSectionHeader={({section}) => (
                <Text style={styles.header}>{section.categoria}</Text>
            )}></SectionList>
        </ScrollView>
     </View>
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
    color: 'red',
  },
  scrollArea: {
    flex:1,
  },
  scrollContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  item: {
    padding: 10,
    backgroundColor: 'red',
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  header: {
    fontSize: 18,
    backgroundColor: 'orange',
    padding: 10,
    marginTop: 10,
  },
});