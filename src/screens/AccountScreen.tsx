import { AppRegistry,FlatList, StyleSheet, Text, View,SafeAreaView, StatusBar, Image } from 'react-native'
import React, {Component} from 'react'
import Cart from '../components/Cart'


export default function AccountScreen() {


  return (
    
    <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#DE2427"/>
        <Cart/>
        
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  
})