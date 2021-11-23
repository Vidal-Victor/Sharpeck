import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Image, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { database } from './firebase';
import {css, Container, PortifolioForm, Header, Footer, LogoImg, Title} from '../assets/css/Css';
import { Ionicons } from '@expo/vector-icons'; 

export default function Produto(props) {


  const [Produtos, setProdutos] = useState([]);
  const [Nome, setNome] = useState('');
  const [Tipo, setTipo] = useState('');
  const [Valor, setValor] = useState('');
  const [Quantidade, setQuantidade] = useState('');


      function getprodutoItem({ item: Produtos }) {
        return (
          <ListItem 
            key={Produtos.id}
           title={Produtos.Name}
            subtitle={Produtos.Preço}
            bottomDivider
            
          />
        )
      }

    return(
        <KeyboardAvoidingView  behavior={Platform.OS == "ios" ? "padding" : "height"} style = {[css.container, css.shkbg]}>
            <Container>
                <Header colors={['#fff','#fff']}>
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
                  <FlatList
                    keyExtractor={ Produtos => Pordutos.id.toString()}
                    data={Produtos}
                    renderItem={getprodutoItem}
                  />
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
      marginTop: 10,
    },
    texto: {
      fontSize: 25,
      color: "#fff",
      fontWeight: "bold",
      marginTop: 25,
      left: 10,
    },
    arrow:{
      marginTop: 16,
      left: 165
    }
});