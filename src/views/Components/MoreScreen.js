import React from 'react';
import {View, StyleSheet} from 'react-native';
import Option from '../Components/Option';

const MoreScreen = () => {
  return (
    <View style={styles.body}>
      <View style={styles.view}>
        <Option title={'Store Location'} iconName={'location'} />
        <Option title={'Settings'} iconName={'settings'} />
      </View>

      <View style={styles.view}>
        <Option title={'Shipping policy'} iconName={'send'} />
        <Option title={'Return policy'} iconName={'albums'} />
        <Option title={'Payment method'} iconName={'card'} />
      </View>

      <View style={styles.view}>
        <Option title={'Contact'} iconName={'call'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    paddingLeft: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    height: 700,
  },
  view: {
    marginBottom: 40,
  },
});

export default MoreScreen;
