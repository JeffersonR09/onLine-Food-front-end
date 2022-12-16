import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import MenuOfPizza from '../components/MenuOfPizza'

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#DE2427"/>
        <Header/>
        <View style={{flex:2.6}}>
        <ScrollView horizontal={true} style={styles.body}>
        <MenuOfPizza image={require('../../images/hawaiana.jpg')} name={'Hawaiana'} price={'C$200'}/>
        <MenuOfPizza image={require('../../images/margarita.jpg')} name={'Margarita'} price={'C$300'}/>
        <MenuOfPizza image={require('../../images/italiana.jpg')} name={'Italiana'} price={'C$500'}/>
        <MenuOfPizza image={require('../../images/margarita.jpg')} name={'Hawaiana'} price={'C$200'}/>
        </ScrollView>
        <ScrollView horizontal={true} style={styles.body}>
        <MenuOfPizza image={require('../../images/peperoni.jpg')} name={'Peperoni'} price={'C$600'}/>
        <MenuOfPizza image={require('../../images/italiana.jpg')} name={'Italiana'} price={'C$250'}/>
        <MenuOfPizza image={require('../../images/margarita.jpg')} name={'Hawaiana'} price={'C$200'}/>
        <MenuOfPizza image={require('../../images/hawaiana.jpg')} name={'Hawaiana'} price={'C$200'}/>
        </ScrollView>
        </View>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    body:{
   
      marginHorizontal:20,
    }
})

