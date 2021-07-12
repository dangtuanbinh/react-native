import React from 'react';
import {StyleSheet, View} from 'react-native';
import COLORS from '../../Consts/colors';
import MoreScreen from '../Components/MoreScreen';

const More = () => {
  return (
    <View style={styles.body}>
        <MoreScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: COLORS.white,
  },
});
export default More;
