import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons,AntDesign, Ionicons,FontAwesome5,MaterialIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//vistas Screen
import HomeScreen from './src/screens/HomeScreen';
import CartScreen from './src/screens/CartScreen';
import OffertScreen from './src/screens/OffertScreen';
import AccountScreen from './src/screens/AccountScreen';
import ShoppyDetail from './src/screens/ShoppyDetail';



const HomeStackNavigator = createNativeStackNavigator();

function myStack() {
  return(
    <HomeStackNavigator.Navigator 
    initialRouteName='HomeScreen'
    >
      <HomeStackNavigator.Screen
        name='HomeScreen'
        component={HomeScreen}
       />

      <HomeStackNavigator.Screen
      name='Stack'
      component={CartScreen}
      />

    </HomeStackNavigator.Navigator>

  )
}




const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    initialRouteName='Home'
    screenOptions={{
      tabBarActiveTintColor: '#4791d1',
    }}
    >
      <Tab.Screen 
      name='Home' 
      component={HomeScreen}
      options={{
        tabBarLabel:'Menu',
        
        tabBarIcon: ({color, size}) => (
          <MaterialIcons name="food-bank" size={30} color={color} />
        ),
        headerShown: false,
      }}

      />
      <Tab.Screen 
      name='Oferta' 
      component={OffertScreen}
      options={{
        tabBarLabel:'Oferta',
        tabBarIcon: ({color, size}) => (
          <MaterialIcons name="local-offer" size={30} color={color} />
        ),
        headerShown: false,
      }}
      />
      <Tab.Screen 
      name='Compras' 
      component={CartScreen}
      options={{
        tabBarLabel:'Carrito',
        tabBarIcon: ({color, size}) => (
          <AntDesign name="shoppingcart" size={30} color={color} />
        ),
        headerShown: false,
    }}
      />
      <Tab.Screen 
      name='Perfil' 
      component={AccountScreen}
      options={{
        tabBarLabel:'Cuenta',
        tabBarIcon: ({color , size}) => (
          <FontAwesome5 name="user" size={size} color={color} />
        ),
        headerShown: false,
        
      }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation(){
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )
}

