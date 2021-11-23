import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Produto(props) {
 return (
   <TouchableOpacity style={styles.container} onPress={props}>
       <Image
        source={props.img}
        style ={styles.produtoImg}
       />
        <Text style={styles.produtoText}>
            {props.children}
        </Text>
            <View style={[styles.produtoText],{flexDirection:'row', alignContent: 'space-between'}}>
                <Text style={{color:'gray'}}>{props.cost2}</Text> 
                <Text>   </Text> 
                <Text style={[styles.produtoText],{color:'green', fontSize:17}}>{props.cost1}</Text>
            </View>
   </TouchableOpacity>
   
    
  );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical:'2%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    produtoImg: {
        width:165,
        height:165,
    },
    produtoText:{
     fontSize:16,
     justifyContent:'space-between'
    },
    divisorLine:{
        width: '45%',
        height: 2,
        alignSelf: "center",
        backgroundColor:'grey',
        borderRadius: 5,
    },
    divisor:{
        marginTop:'10%',
        flexDirection:'row',
        width: '90%',
        alignSelf:"center",
        justifyContent: 'center',
    },
});