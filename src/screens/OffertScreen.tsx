import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView, FlatList, Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'




export default function OffertScreen() {
  
  const oferta = [
    {
      id: 1,
      image: require('../../images/hawaiana.jpg'),
      Description: 'Hoy jueves aprovecha tu hawaiana con un descuento de hasta 30%...',
      name: 'Hawaiana:'
    },
    {
      id: 2,
      image: require('../../images/italiana.jpg'),
      Description: 'Solo por hor compra una pizza italiana de 12 slice y llevate una 6 slice.',
      name: 'Italiana:',
    },
    {
      id: 3,
      image: require('../../images/peperoni.jpg'),
      Description: 'Por la compra de una pizza peperoni te llevas un calzone mas un pichel de te helado.',
      name: 'Peperoni:',
    }
  ];

  const oneOffert = ({item}: any) =>(
    <View style={styles.item}>
      <View style={styles.pizzaContainer}>
        <Image source={item.image} style={styles.pizzas}/>
      </View>
      <View style={styles.Descrip}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.Descrip2}>{item.Description}</Text>
      </View>
    </View>
    
  )

  const headerComponent = () => {
    return <Text style={styles.listHeadline}>Ofertas</Text>
  }

  const itemSeparator = () =>{
    return <View style= { styles.separator}/>
  } 
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#DE2427"/>
        <Header/>
        <FlatList
          ListHeaderComponentStyle = {styles.listHeader}
          ListHeaderComponent={headerComponent}
          data = {oferta}
          renderItem ={oneOffert}
          ListEmptyComponent = {<Text>esto es una prueva</Text>}
          ItemSeparatorComponent = {itemSeparator}
          style={styles.body}
          />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
},
body:{
  marginHorizontal: '5%',
  marginVertical: '2%',
  

},
separator:{
  height: '1%',
  width: '100%',
  backgroundColor:'#DE2427'
},
listHeader:{
  height: '6%',
  alignItems: 'center',
  justifyContent: 'center',
},
listHeadline:{
  fontSize: 18,
  fontWeight:'bold'
},
item:{
  flex: 1,
  flexDirection: 'row',
  paddingVertical: 13,

},
pizzaContainer:{
  backgroundColor:'#d9d9d9',
  
  borderRadius: 100,
  height: '100%',
  width: '24%',
  justifyContent:'center',
  alignItems:'center',
},
pizzas:{
  height: 89,
  width: 89,
  borderRadius: 100,
  borderWidth:1.5,
  borderColor:'#8B0000',
},
name:{
  fontWeight:'800',
  fontSize: 16,
  marginLeft: 13,
  
  
},
Descrip:{
  width: '76%'
},
Descrip2:{
  fontWeight:'600',
  fontSize: 14,
  marginLeft: 13,
  

},

})

