import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import FashionHeader from '../Components/FashionHeader';
import FashionBanner from '../Components/FashionBanner';
import FashionStories from '../Components/FashionStories';
import COLORS from '../../Consts/colors';
import FashionFooter from '../Components/FashionFooter';

const Fashion = () => {
  return (
    <View style={styles.body}>
      <FashionHeader text={'ACISTIE.H'} />
      <ScrollView>
        <FashionBanner />
        <View style={styles.fashionView}>
          <View style={styles.fashionContainer}>
            <FashionStories />
          </View>
        </View>

        <FashionFooter />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: COLORS.white,
  },
  fashionView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 30,
  },
  fashionContainer: {
    width: 380,
    borderTopWidth: 1,
    borderTopColor: COLORS.dark,
    paddingTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.dark,
  },
});

export default Fashion;
