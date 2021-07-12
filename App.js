import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Fashion from './src/views/Screen/fashion';
import Products from './src/views/Screen/products';
import LifeStyleStackScreen from './src/views/Screen/LifeStyleStackScreen';
import StoryStackScreen from './src/views/Screen/StoryStackScreen';
import MoreStackScreen from './src/views/Screen/MoreStackScreen';
import COLORS from './src/Consts/colors';

// Create Bottom Tab
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        labeled={true}
        initialRouteName="Fashion"
        screenOptions={({route}) => ({
          tabBarIcon: (focused, size, color) => {
            var iconName;
            if (route.name === 'Fashion') {
              iconName = 'tshirt';
              size = 17
              color = focused ? '#000' : '#ededed';
            } else if (route.name === 'Products') {
              iconName = 'dna';
              size = 17
              color = focused ? '#000' : '#ededed';
            } else if (route.name === 'Lifestyle') {
              iconName = 'bezier-curve';
              size = 17
              color = focused ? '#000' : '#ededed';
            } else if (route.name === 'Story') {
              iconName = 'holly-berry';
              size = 17
              color = focused ? '#000' : '#ededed';
            } else if (route.name === 'More') {
              iconName = 'ellipsis-h';
              size = 17
              color = focused ? '#000' : '#ededed';
            }
            return (
              <FontAwesome5Icon name={iconName} size={size} color={color} />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor:COLORS.dark,
          showLabel:true,
          labelStyle:{fontSize: 12,fontFamily:'Vogue'}
        }}
        >
        <Tab.Screen name="Fashion" component={Fashion} />
        <Tab.Screen name="Products" component={Products} />
        <Tab.Screen name="Lifestyle" component={LifeStyleStackScreen} />
        <Tab.Screen name="Story" component={StoryStackScreen} />
        <Tab.Screen name="More" component={MoreStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
