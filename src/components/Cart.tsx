import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity,TextInput } from 'react-native';
import { Feather, Entypo, AntDesign, FontAwesome,SimpleLineIcons, Ionicons, MaterialIcons } 
from '@expo/vector-icons';

export default function Cart() {
  return (
    <View>
        <View style={styles.containerPerfil}>
            <Text style={styles.textHeader}>Cuenta</Text>
            <View>
            <Image style={styles.imagePerfil} source={require('../../images/perfil.jpg')}/>
            <TouchableOpacity style={styles.containerIcon}>
            <Entypo style={styles.icon} name="camera" size={25} color="white" />
            </TouchableOpacity>
            </View>
        </View>
        <Text style={styles.textInfo}>Informacion Personal</Text>
        <View style={styles.containerInput}>
            <Text style={styles.textInput}>Nombre</Text>
            <TextInput style={styles.input}placeholder="Jeycol Perez"/>
        </View>
        <View style={styles.containerInput}>
            <Text style={styles.textInput}>Numero de Contacto</Text>
            <View style={styles.InputEdit}>
            <TextInput style={styles.input}placeholder="+505 --- --- "/>
            <Feather style={styles.icon2}name="edit-2" size={24} color="black" />
            </View>
        </View>
        <View style={styles.containerInput}>
            <Text style={styles.textInput}>Fecha de Nacimiento</Text>
            <View style={styles.InputEdit}>
            <TextInput style={styles.input}placeholder="DD/MM/AA"/>
            <Feather style={styles.icon2}name="edit-2" size={24} color="black" />
            </View>
        </View>
        <View style={styles.containerInput}>
            <Text style={styles.textInput}>Ubicacion Actual</Text>
            <TextInput style={styles.input}placeholder="Ciudad"/>
        </View>
        

    </View>
  )
}

const styles = StyleSheet.create({
    containerPerfil:{
        height: '30%',
        width:'100%',
        backgroundColor:'#DE2427',
        borderBottomStartRadius: 35,
        borderBottomRightRadius: 35,
        alignItems:'center',
        justifyContent:'center',
        padding:10,
    },
    textHeader:{
        top: -15,
        fontSize:18,
        fontWeight:'900',
        color: 'white',

    },
    imagePerfil:{
        width: 140,
        height: 140,
        borderRadius:100,
       

    },
    containerIcon:{
        alignSelf:'flex-end',
        top: -50,
        backgroundColor:'#858995',
        width: 40,
        height: 40,
        borderRadius:20,
        justifyContent:'center',
    },
    icon:{
        alignSelf:'center'
    },
    textInfo:{
        marginTop: 10,
        fontSize:18,
        fontWeight:'900',
        alignSelf:'center',
    },
    containerInput:{
        width:'90%',
        height:'11%',
        backgroundColor:'#ffffff',
        borderRadius:14,
        padding:10,
        alignSelf:'center',
        margin:5,
    },
    textInput:{
        fontSize:14,
        fontWeight:'900',
        color:'#DE2427'
    },
    input:{
        fontSize:17,
        fontWeight:'900',
    },
    InputEdit:{
        flexDirection: 'row',
    },
    icon2:{
        left:230,

    },
   

})