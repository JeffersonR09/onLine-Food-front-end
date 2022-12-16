import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import Navigation from '../../navigation';





interface Props {
    image:{},
    name:string,
    price:String,
    
}




export default function MenuOfPizza({image, name, price}:Props,) {
  return (
    <View style={styles.container}>
      <Image style={styles.imagePizza} source={image} />
        <Text style={styles.text}>{name}</Text>
      <View style={styles.line}></View>
        <Text style={styles.text}>{price}</Text>
      <TouchableOpacity style={styles.btnOrder} onPress={()=>{}}>
        <Text style={styles.textBtnOrder}>Ordenar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        height:280,
        width:190,
        marginRight:20,
        marginVertical:10,
        borderWidth:0.5,
        borderRadius:20,
        borderColor:'#8B0000'
       
    },
    imagePizza:{
        width:'100%',
        height:'50%',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    },
    text:{
        fontSize:16,
        fontWeight:'bold',
        marginHorizontal:20,
        marginTop:10,
    },
    line:{
        borderBottomWidth:1,
        marginHorizontal:10,
        marginTop:5,
        borderColor:'#8B0000',
    },
    btnOrder:{
        width:85,
        height:35,
        borderRadius:10,
        backgroundColor:'#DE2427',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        marginTop:18,
    },
    textBtnOrder:{
        fontSize:13,
        fontWeight:'bold',
        color:'#fff'
    }

})