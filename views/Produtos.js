import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Image, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { database } from './firebase';
import {css, Container, PortifolioForm, Header, Footer, LogoImg, Title} from '../assets/css/Css';
import { Ionicons } from '@expo/vector-icons'; 
import pro from './data/pro';

export default function Produtos(props) {


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
                      <Text style={styles.texto}>
                        Lista de Produtos
                      </Text>
                    <Ionicons style={styles.arrow}
                    type="clear"
                    name="add" 
                    size={50} 
                    color="white"
                    onPress ={()=>props.navigation.navigate('ProdutosC')}
                    />
                    </View>
                </Header>
                <View>
                </View>
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
      left: 10
    },
    arrow:{
      marginTop: 16,
      left: 165
    }
});
