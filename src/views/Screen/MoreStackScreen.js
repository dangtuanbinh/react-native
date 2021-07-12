import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import More from '../Screen/more';
import COLORS from '../../Consts/colors';

const Stack = createStackNavigator();
const MoreStackScreen = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerStyle:{backgroundColor: '#f2f2f2'},
        headerTintColor: COLORS.grey,
        headerTitleAlign:'center',
        headerTitleStyle:{
            fontSize:25,
            fontFamily:'Vogue'
        }
      }}>
      <Stack.Screen name="MORE" component={More} />
    </Stack.Navigator>
  );
};

export default MoreStackScreen;
