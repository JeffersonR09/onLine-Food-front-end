import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.header}>
        <View style={styles.containerPhone}>
            <TouchableOpacity style={styles.phone}>
            <AntDesign name="phone" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.textPhone}>Ordenar Ahora {"\n"}2575-0096</Text>
            
        </View>
        <View style={styles.logo}>
        <Image style={styles.imageLogo} source={require('../../images/logo4.jpeg')} />
        </View>
        <TouchableOpacity style={styles.BottomRegister}>
            <Text style={styles.textRegister}>Registrarse</Text>
        </TouchableOpacity>
        
      
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        flex: 0.6,
        backgroundColor:'#DE2427',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-evenly',
    },
    phone:{
        width: 45,
        height:45,
        backgroundColor:'#FFF',
        borderRadius:30,
        alignItems: 'center',
        justifyContent:'center',
        marginRight:'2%',
    },
    textPhone:{
        color:'#FFF',
        fontSize: 14,
      fontWeight:'800',
    },
    containerPhone:{
        width:'35%',
        height:'50%',
        flexDirection:'row',
        alignItems:'center',

    },
    logo:{
        width: 80,
        height:70,
        alignItems:'flex-start',
    },
    imageLogo:{
        width:80,
        height:80,
    },
    BottomRegister:{
        width: 110,
        height: 40,
        backgroundColor:'#FFF',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 20,
    },
    textRegister:{
        color:'#000',
        fontSize: 14,
      fontWeight:'800',
    }
    
})