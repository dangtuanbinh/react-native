import React, {useState} from 'react';
import {View, ImageBackground, StyleSheet, Pressable} from 'react-native';
import banners from '../../Consts/banners';
import ModalSection from './ModalSection';

const FashionBanner = () => {
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
      {banners.map((banner, id) => {
        return (
          <Pressable onPress={onPressHandler}>
            <ImageBackground
              key={id}
              source={banner.image}
              resizeMode="cover"
              style={styles.background}></ImageBackground>
          </Pressable>
        );
      })}
      <ModalSection showModal={showModal} onCloseHandler={onCloseHandler}/>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    height: 350,
  },
  body: {
    marginBottom: 20,
  },
});
export default FashionBanner;
