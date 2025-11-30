import { Text, View, StyleSheet, Button, Modal } from 'react-native'
import React, {useState} from 'react';

export default function ModalScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return(
    <View style={styles.container}>
      <Button title='Mostrar Modal' onPress={()=> setModalVisible(true)} color='gray'>
        Da Click
      </Button>

      <Modal animationType='fade' transparent={true} visible={modalVisible} onRequestClose={()=> setModalVisible(!modalVisible)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.textoModal}>
              Esto es un Modal
            </Text>
            <Button title='Ocultar Modal' onPress={()=> setModalVisible(false)} color='gray'>
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000ff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'powderblue',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
  },
  textoModal: {
    color: '#000000',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});