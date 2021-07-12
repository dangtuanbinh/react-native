import React from 'react'
import {View ,StyleSheet, Text} from 'react-native'
import COLORS from '../../Consts/colors';
import LifestyleContainer from '../Components/LifestyleContainer';

const LifeStyle = () => {
    return (
        <View style={styles.body}>
            <LifestyleContainer />
            
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
      backgroundColor: COLORS.white,
    },
   
  });
export default LifeStyle
