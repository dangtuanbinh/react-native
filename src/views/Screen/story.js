import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import COLORS from '../../Consts/colors';
import FashionStories from '../Components/FashionStories';

const Story = () => {
  return (
    <View style={styles.body}>
      <ScrollView>
        <View style={styles.container}>
          <FashionStories />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: COLORS.white,
  },
  container: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});
export default Story;
