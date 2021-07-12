import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../../Consts/colors';

const Option = props => {
  return (
    <View>
      <Pressable style={styles.body}>
        <Icon name={props.iconName} style={styles.icon} />
        <Text style={styles.text}>{props.title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    fontSize: 20,
    marginRight: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
    color: COLORS.grey,
  },
});
export default Option;
