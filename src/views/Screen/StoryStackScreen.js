import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Story from '../Screen/story'
import COLORS from '../../Consts/colors';

const Stack = createStackNavigator();
const StoryStackScreen = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerStyle:{backgroundColor: '#f2f2f2'},
        headerTintColor: COLORS.grey,
        headerTitleAlign:'center',
        headerTitleStyle:{
            fontSize:25,
            fontFamily:'Vogue',
        }
      }}
    >
      <Stack.Screen name="STORY" component={Story} />
    </Stack.Navigator>
  );
};

export default StoryStackScreen;
