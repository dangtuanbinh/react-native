import React from 'react';
import {Modal, View, Text, StyleSheet, Pressable} from 'react-native';
import COLORS from '../../Consts/colors';

const ModalSection = props => {
  return (
    <View style={styles.modalContainer}>
      <Modal visible={props.showModal} animationType="slide"
      hardwareAccelerated
      >
        <View>
          <Text>This is modal</Text>
        </View>
        <Pressable style={styles.closeButton} onPress={props.onCloseHandler}>
          <Text style={styles.textButton}>x</Text>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 15,
    right: 25,
    alignItems:'center',
    justifyContent:'center',
    width:35,
    height:35,
    backgroundColor:COLORS.grey,
    borderRadius:999,
    opacity:0.6
  },
  textButton:{
    fontSize:25,
    color:COLORS.white,
    fontWeight:'bold'
  }
});
export default ModalSection;
