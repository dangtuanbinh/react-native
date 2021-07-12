import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet, ScrollView} from 'react-native';
import CropTop from '../Screen/CropTop';
import Dress from '../Screen/Dress';
import COLORS from '../../Consts/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {alignItems, fontSize} from 'styled-system';

const Products = () => {
  const [cropScreen, setCropScreen] = useState(true);
  const [dressScreen, setDressScreen] = useState(false);

  const changeCropScreen = () => {
    setCropScreen(true);
    setDressScreen(false);
  };

  const changeDressScreen = () => {
    setCropScreen(false);
    setDressScreen(true);
  };
  return (
    <View>
      {/* Header */}
      <View style={styles.header}>
        {/* Left */}
        <View style={styles.left}>
          <Pressable
            hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}
            onPress={changeCropScreen}>
            <Text
              style={{
                color: cropScreen ? COLORS.dark : COLORS.grey,
                fontSize: 20, fontFamily:'Vogue'
              }}>
              CROP-TOP
            </Text>
          </Pressable>
          <Text style={styles.line}>|</Text>
          <Pressable
            hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}
            onPress={changeDressScreen}>
            <Text
              style={{
                color: dressScreen ? COLORS.dark : COLORS.grey,
                fontSize: 20, fontFamily:'Vogue'
              }}>
              DRESS
            </Text>
          </Pressable>
        </View>
        {/* Right */}
        <View style={styles.iconContainer}>
          <Icon name="heart" style={styles.icon} />
          <Icon name="list" style={styles.icon} />
        </View>
      </View>

      {/* Content */}
      {cropScreen && <CropTop />}

      {dressScreen && <Dress />}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    fontSize: 20,
  },
  left: {
    width: 200,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  line: {
    fontSize: 30,
    color: COLORS.dark,
    fontWeight:'100'
  },
  iconContainer: {
    width: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    fontSize: 30,
    color: COLORS.grey,
  },
});

export default Products;
