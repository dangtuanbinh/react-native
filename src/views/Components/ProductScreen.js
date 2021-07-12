import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Pressable,
} from 'react-native';
import lifestyle from '../../Consts/lifeStyle';
import cropTop from '../../Consts/cropTop';
import COLORS from '../../Consts/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const ProductScreen = props => {
  const [liked, setLiked] = useState(false);

  const putToWishList = () => {
    setLiked(!liked);
  };

  return (
    <View>
      <ScrollView horizontal style={styles.scrollContainer}>
        {lifestyle.map((style, index) => {
          return (
            <Pressable style={styles.styleContainer} key={index}>
              <ImageBackground
                style={styles.styleBackground}
                source={style.background}
                resizeMode="cover"></ImageBackground>
              <Text style={{fontFamily: 'Vogue', marginTop: 5, fontSize: 12}}>
                {style.name}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      <View style={{height: 600}}>
        <ScrollView>
          <View style={styles.productContainer}>
            {cropTop.map((product, index) => {
              return (
                <View key={index} style={styles.view}>
                  <ImageBackground
                    resizeMode="cover"
                    style={styles.productBackground}
                    source={product.image}></ImageBackground>
                  <Icon
                    name="heart"
                    style={styles.productIcon}
                  />
                  <View style={styles.textContainer}>
                    <Text style={styles.productText}>{product.name}</Text>
                    <Text style={styles.productText}>{product.price}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    height: 90,
    backgroundColor: COLORS.white,
  },
  styleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 18,
  },
  styleBackground: {
    width: 55,
    height: 55,
    borderRadius: 999,
    // use when border radius doesnt work
    overflow: 'hidden',
  },
  productContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  view: {
    marginBottom: 20,
    position: 'relative',
  },
  productBackground: {
    width: '100%',
    height: 350,
    minWidth: 210,
    marginBottom: 10,
  },
  textContainer: {
    paddingLeft: 15,
  },
  productText: {
    fontSize: 15,
    color: COLORS.dark,
  },
  productIcon: {
    fontSize: 30,
    position: 'absolute',
    bottom: 65,
    right: 15,
    color: COLORS.dark,
  },
});

export default ProductScreen;
