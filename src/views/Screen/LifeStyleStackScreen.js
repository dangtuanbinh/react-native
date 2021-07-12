import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LifeStyle from './lifestyle';
import COLORS from '../../Consts/colors';


const Stack = createStackNavigator();

const LifeStyleStackScreen = () => {
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
      <Stack.Screen
        name="LIFESTYLE"
        component={LifeStyle}
      />
    </Stack.Navigator>
  );
};

export default LifeStyleStackScreen;
