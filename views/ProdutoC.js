import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { database } from './firebase';
import {css, Container, PortifolioForm, Header, Footer, LogoImg, Title} from '../assets/css/Css';
import { AntDesign } from '@expo/vector-icons'; 

export default function ProdutosC(props) {

    console.log (props);
    const [display, setdisplay] = useState ('none');
  
    const [Comerciante, setComerciante] = useState([]);
    const [CNPJ, setCNPJ] = useState('');
    const [NomeFantasia, setNomeFantasia] = useState('');
    const [RazaoSocial, setRazaoSocial] = useState('');
    const [Sigla, setSigla] = useState('');
    const [Email, setEmail] = useState('');
    const [Senha, setSenha] = useState('');
  
    function addComerciante(){
      database.collection('Comerciante').add({
        NomeFantasia,
        Sigla,
        CNPJ,
        RazaoSocial,
        Email,
        Senha
      });
    }

    return(
        <KeyboardAvoidingView  behavior={Platform.OS == "ios" ? "padding" : "height"} style = {[css.container, css.shkbg]}>
            <Container colors={['#fff','#fff']}>
                <Header>
                    <View style={styles.banner}>
                    <AntDesign style={styles.arrow}
                    name="arrowleft"
                    type="clear" 
                    size={35} 
                    color="white"
                    onPress ={()=>props.navigation.navigate('Produtos')}
                    />
                      <Text style={styles.texto}>
                        Cadastrar Produtos
                      </Text>
                    </View>
                </Header>
            </Container>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({

    banner: {
      backgroundColor: '#6bd1aa',
      width: '100%',
      flexDirection:'row',
      bottom: 310,
      height: '10%',
    },
    texto: {
      fontSize: 25,
      color: "#fff",
      fontWeight: "bold",
      marginTop: 25,
      left: 10,
    },
    arrow:{
      marginTop: 24
    }
});
