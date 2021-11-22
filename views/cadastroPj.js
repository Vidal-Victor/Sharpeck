import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, ScrollView, TouchableOpacity, Alert } from 'react-native';
import firebase from './firebase'
import { TextInputMask } from 'react-native-masked-text';
import {css, ContainerH, PortifolioFormC, HeaderH, Footer, LogoImg, Title} from '../assets/css/Css';
import logoPJ from '../assets/img/borsa.png';


export default function CadastroPj(props) {
  const database = firebase.firestore();
  console.log (props);
  const [display, setdisplay] = useState ('none');
  const [Comerciante, setComerciante] = useState([]);

  const [CNPJ, setCNPJ] = useState('');
  const [NomeFantasia, setNomeFantasia] = useState('');
  const [RazaoSocial, setRazaoSocial] = useState('');
  const [Endereco, setEndereco] = useState('');
  const [Numero, setNumero] = useState('');
  const [Sigla, setSigla] = useState('');
  const [Email, setEmail] = useState('');
  const [Senha, setSenha] = useState('');
  
 function Limpar(){
    setCNPJ('');
    setEndereco('');
    setNumero('');
    setNomeFantasia('');
    setRazaoSocial('');
    setSigla('');
    setEmail('');
    setSenha('');
 }


  async function addComerciante(){
    await database.collection('Comerciante').add({
      NomeFantasia,
      Sigla,
      CNPJ,
      Numero,
      Endereco,
      RazaoSocial,
      Email,
      Senha,
    }).then(() => {
      Limpar()
    })
  }

  function deletar(id){
    database.collection('Comerciante').doc(id).delete();
  }

  function AlertCadastro(){
    Alert.alert('Cadastro Realizado', 'Deseja prosseguir para o Login ou cadastrar um novo usuário?',[
      {
        text:'Ir para Login',
        onPress:() => props.navigation.navigate('LoginP')
        
      },
      {
        text:'Criar outro Usuário',
        
        
      }
    ])
  }
    function CadastroFinalizado(){
      addComerciante();
      AlertCadastro();
    }


  return ( 
    


  <KeyboardAvoidingView  behavior={Platform.OS == "ios" ? "padding" : "height"} style = {[css.container, css.shkbg]}>
  <ContainerH colors={['#6bd1aa','#837EBA']}>
    <HeaderH>
    <LogoImg source= {logoPJ} resizeMode ="contain" style= {{marginTop: -100}}>
      
    </LogoImg>


    </HeaderH>
      
      <Footer>
      <PortifolioFormC>
      <ScrollView>
      <View>
      <Title style={{ fontWeight:'bold', color:'#009688'}}>Faça seu cadastro Sharpeck!</Title> 
      </View>
      
      

        <TextInput style={styles.input} placeholder="NomeFantasia" value = {NomeFantasia} onChangeText={NomeFantasia=> setNomeFantasia(NomeFantasia)} />
        <TextInput style={styles.input} placeholder="Sigla" value = {Sigla} onChangeText={Sigla => setSigla(Sigla)}/>
        <TextInputMask style={styles.input} type={'cnpj'} placeholder="CNPJ" value = {CNPJ} onChangeText={CNPJ => setCNPJ(CNPJ)}/>
        <TextInput style={styles.input} placeholder="Endereco" value = {Endereco} onChangeText={Endereco => setEndereco(Endereco)}/>
        <TextInput style={styles.input}  placeholder="Numero Residencial" keyboardType="numeric" value = {Numero} onChangeText={Numero => setNumero(Numero)}/>
        <TextInput style={styles.input} placeholder="Razão Social" value = {RazaoSocial} onChangeText={RazaoSocial => setRazaoSocial(RazaoSocial)} />
        <TextInput style={styles.input} placeholder="Email" value = {Email} onChangeText={Email => setEmail(Email)}/>
        <TextInput style={styles.input} placeholder="Senha" value = {Senha}  onChangeText={Senha => setSenha(Senha)} secureTextEntry = {true} />

        

        <TouchableOpacity style={styles.buttonContainer} onPress={CadastroFinalizado}> 
        <View> 
          <Text style={styles.buttonText}> Resgistre sua empresa</Text> 
        </View> 
        </TouchableOpacity>
        </ScrollView>
      </PortifolioFormC>
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

    input:{
       width: '90%',
       alignItems: 'center',
        alignSelf: "center",
        backgroundColor: '#F4F3F3',
        marginBottom: 10,
        padding:7,
        borderColor: '#c3c3c3',
        marginTop: 3,
    },
    InputMaster:{
      width: "98%",
  },
  textoc: {
    alignSelf: 'center',
    marginBottom: 20,
    fontSize:17,
    fontWeight:'bold',
    marginTop: 10,
  },
});