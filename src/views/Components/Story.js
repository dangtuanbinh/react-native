import React, {useState} from 'react';
import {View, Text, StyleSheet, ImageBackground, Pressable} from 'react-native';
import COLORS from '../../Consts/colors';
import ModalSection from './ModalSection';

const Story = props => {
  const [showModal, setShowModal] = useState(false);

  // Create press function to show Modal
  const onPressHandler = () => {
    setShowModal(true);
  };

  // Create press function to close Modal
  const onCloseHandler = () => {
    setShowModal(!showModal);
  };
  return (
    <View style={styles.body}>
      <ModalSection showModal={showModal} onCloseHandler={onCloseHandler} />
      <Pressable onPress={onPressHandler}>
        <ImageBackground
          style={styles.image}
          source={props.story.image}
          resizeMode="cover"></ImageBackground>
        <Text style={styles.category}>{props.story.category}</Text>
        <Text style={styles.title}>{props.story.title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    marginBottom: 30,
  },
  image: {
    height: 200,
  },
  category: {
    fontSize: 16,
    color: COLORS.grey,
    fontWeight: '100',
    marginTop: 10,
    fontFamily:'Vogue'
  },
  title: {
    fontSize: 30,
    color: COLORS.dark,
    fontWeight: '600',
    fontFamily:'Vogue',
    marginTop: 10
  },
});

export default Story;
