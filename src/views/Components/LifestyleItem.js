import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  ScrollView,
} from 'react-native';
import LifestyleProduct from './LifestyleProduct';

const LifestyleItem = props => {
  const {name, background, products} = props.item;
  return (
    <Pressable>
      <View style={styles.body}>
        <Text style={styles.title}>{name}</Text>
        <ImageBackground
          source={background}
          style={styles.background}
          resizeMode="cover"
        />
        <ScrollView horizontal style={styles.scrollView}>
          {products.map((product, index) => {
            return <LifestyleProduct product={product} key={index} />;
          })}
        </ScrollView>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  body: {
    marginBottom: 30,
  },
  background: {
    height: 400,
  },
  scrollView: {
    width: 1000,
  },
  title: {
    fontSize: 30,
    fontFamily:'Vogue',
    marginBottom:15,
    marginTop:15
  },
});

export default LifestyleItem;
