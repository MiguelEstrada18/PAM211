import { Text, StyleSheet, View, FlatList, SectionList } from 'react-native'

export default function FlatSectionListScreen () {

  //FlatList:
  const ejercicios = [
    {id: '1', nombre: 'Sentadillas', descripcion: 'Ejercicio para piernas y glúteos'},
    {id: '2', nombre: 'Sentadillas', descripcion: 'Ejercicio para piernas y glúteos'},
    {id: '3', nombre: 'Sentadillas', descripcion: 'Ejercicio para piernas y glúteos'},
    {id: '4', nombre: 'Sentadillas', descripcion: 'Ejercicio para piernas y glúteos'},
    {id: '5', nombre: 'Sentadillas', descripcion: 'Ejercicio para piernas y glúteos'},
    {id: '6', nombre: 'Sentadillas', descripcion: 'Ejercicio para piernas y glúteos'},
    {id: '7', nombre: 'Sentadillas', descripcion: 'Ejercicio para piernas y glúteos'},
    {id: '8', nombre: 'Sentadillas', descripcion: 'Ejercicio para piernas y glúteos'},
    {id: '9', nombre: 'Sentadillas', descripcion: 'Ejercicio para piernas y glúteos'},
    {id: '10', nombre: 'Sentadillas', descripcion: 'Ejercicio para piernas y glúteos'},
  ]

  //SectionList:
  const contactos = [
    { titulo: 'A', data: ['Alejandra', 'Ana la de las tortillas', 'Adele']},
    { titulo: 'M', data: ['Mecánico', 'Amigo', 'Mecánico']},
    { titulo: 'O', data: ['Ofelia', 'Amigo', 'Ofelia']},
    { titulo: 'A', data: ['Andrés', 'Amigo mío', 'Andrés']},
    { titulo: 'N', data: ['Nando', 'Amigo', 'Nando']},
    { titulo: 'A', data: ['Alejandro', 'El UYUYUY', 'Alejandro']},

  ]

  return ( 
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <Text style={styles.titulo}> Lista de Ejercicios </Text>
          <FlatList data={ejercicios} renderItem={({item}) => (
            <View style={styles.item}>
              <Text style={styles.nombre}> {item.nombre} </Text>
              <Text style={styles.descripcion}> {item.descripcion} </Text>
            </View>
          )}></FlatList>
        </View>
        <View style={styles.listContainer}>
          <Text style={styles.titulo}> Contactos </Text>
          <SectionList sections={contactos} renderItem={({item}) => (
            <Text style={styles.item}>{item}</Text>
          )}
          
          renderSectionHeader={({section}) => (
            <Text style={styles.header}>{section.titulo}</Text>
          )}></SectionList>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  listContainer: {
    flex: 1,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  item: {
    padding: 10,
    backgroundColor: 'red',
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  nombre: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  descripcion: {
    fontSize: 14,
    color: 'black',
  },
  header: {
    fontSize: 18,
    backgroundColor: 'orange',
    padding: 10,
    marginTop: 10,
  },
});