import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView} from 'react-native';
import {css, ContainerH, Title, PortifolioForm, Footer, HeaderH, LogoImgR} from '../assets/css/Css';
import { TouchableOpacity } from 'react-native-gesture-handler';
import user from '../assets/img/UserIconC.jpg';


export default function Registro(props) {

  console.log (props);
  return ( 
    <KeyboardAvoidingView  behavior={Platform.OS == "ios" ? "padding" : "height"} style = {[css.container, css.shkbg]}>
    <StatusBar style='light' backgroundColor="#000" translucent ={true} />
    <ContainerH colors={['#837EBA','#6bd1aa']}>
      <HeaderH>

      <LogoImgR source= {user} resizeMode ="contain"></LogoImgR>
      
    
      </HeaderH>
      <Footer>
        
        <PortifolioForm>
        <Title style={{ fontWeight:'bold', color:'#009688'}}>Bem vindo ao seu cadastro!</Title>


        <TouchableOpacity style={styles.buttonContainer}  onPress={() => props.navigation.navigate('CadastroC')}>
                  <Text style={styles.buttonText}> Cadastre-se como Cliente</Text>
        </TouchableOpacity>
        <View style={styles.divisor}>

                 <View style={styles.divisorLine}></View>
                 <Text style={{marginHorizontal:'3%', fontWeight:'bold', color:'#009688'}}>OU</Text>
                 <View style={styles.divisorLine}></View>
                </View>

        <TouchableOpacity style={styles.buttonContainer}  onPress={() => props.navigation.navigate('CadastroPj')}>
                  <Text style={styles.buttonText}> Cadastre-se como Parceiro</Text>
        </TouchableOpacity>

        </PortifolioForm>    
      </Footer>
    </ContainerH>
    </KeyboardAvoidingView>

    
  );
}

const styles = StyleSheet.create({


  buttonContainer: {
  marginTop:'10%',    
  backgroundColor: "#009688",
  borderRadius: 10,
  alignSelf:"center",
  width:'90%',
  padding: 12,
  

  },

  buttonText:{    
  fontSize: 18,
  color: "#fff",
  fontWeight: "bold",
  alignSelf: "center",
  },

  divisor:{
      marginTop:'10%',
      flexDirection:'row',
      width: '90%',
      alignSelf:"center",
      justifyContent: 'center',
  },

  divisorLine:{
      width: '45%',
      height: 2,
      alignSelf: "center",
      backgroundColor:'#009688',
      borderRadius: 5,
  },

  labelTextC:{
      marginTop:30,
      fontSize: 18,
      color: "#009688",
      fontWeight: "bold",
      alignSelf: "center",
  },
  linearGradient: {
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5,
      marginTop: 16,
      width: 350,
    },
});