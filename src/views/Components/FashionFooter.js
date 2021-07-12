import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';

const FashionFooter = () => {
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Text style={styles.title}>FOLLOW US ON</Text>
      </View>
      <View style={styles.iconContainer}>
        <Pressable>
          <Image
            style={styles.image}
            source={require('../../Assets/icons/insta.png')}
          />
        </Pressable>

        <Text>OR</Text>
        <Pressable>
          <Image
            style={styles.image}
            source={require('../../Assets/icons/tiktok.png')}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    marginBottom:50
  },
  container: {
    minWidth: 380,
  },
  title:{
      textAlign:'center',
      fontFamily:'Vogue'
  },
  image: {
    width: 100,
    height: 100,
  },
  iconContainer:{
      marginTop:30,
      width:'100%',
      flexDirection:'row',
      justifyContent:'space-evenly',
      alignItems:'center'
  }
});
export default FashionFooter;
