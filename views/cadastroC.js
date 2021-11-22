import React, {useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity, Alert } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import {css, ContainerH, PortifolioFormC, HeaderH, Footer, LogoImg, Title} from '../assets/css/Css';
import logoC from '../assets/img/UserIcon.jpg';
import firebase from './firebase'
import "firebase/auth"

export default function CadastroC(props) {
  const database = firebase.firestore();

  console.log (props);
  const [display, setdisplay] = useState ('none');
  const [Cliente, setCliente] = useState([]);
  const [Nome, setNome] = useState('');
  const [Sobrenome, setSobrenome] = useState('');
  const [CPF, setCPF] = useState('');
  const [Endereco, setEndereco] = useState('');
  const [Telefone, setTelefone] = useState('');
  const [Email, setEmail] = useState('');
  const [Senha, setSenha] = useState('');

  useEffect(()=>{
      database.collection('Cliente').onSnapshot((query)=>{
      const list = [];
      query.forEach((doc)=>{
        list.push({...doc.data(), id: doc.id});
      })
      setCliente(list);
    })
  },[])

  function Limpar(){
    setCPF('');
    setNome('');
    setSobrenome('');
    setEndereco('');
    setTelefone('');
    setEmail('');
    setSenha('');
 }
   async function addCliente(){
     await database.collection('Cliente').add({
      CPF,
      Nome,
      Sobrenome,
      Endereco,
      Telefone,
      Email,
      Senha
    }).then(()=>{
      Limpar()
    })
  }
  // function UserFb(){
  // fi.auth().createUserWithEmailAndPassword(Email, Senha)
  // .then((userCredential) => {
  //   // Signed in
  //   var user = userCredential.user;
  //   // ...
  // })
  // .catch((error) => {
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   // ..
  // });
  // }
  function deletar(id){
    database.collection('Cliente').doc(id).delete();
  }

  function AlertCadastro(){
    Alert.alert('Cadastro Realizado', 'Deseja prosseguir para o Login ou cadastrar um novo usuário?',[
      {
        text:'Ir para Login',
        onPress:() => props.navigation.navigate('LoginC')
        
      },
      {
        text:'Criar outro Usuário',
        
        
      }
    ])
  }
    function CadastroFinalizado(){
      addCliente();
      AlertCadastro();
    }
  return ( 
    
  <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style = {[css.container, css.shkbg]}>
  <ContainerH colors={['#6bd1aa','#837EBA']}>
    <HeaderH>
    
    <LogoImg source= {logoC} resizeMode ="contain" style= {{marginTop: -100}}>
      
    </LogoImg>
    </HeaderH>
    <Footer>
    <PortifolioFormC>
      <ScrollView>
    <View>
      <Title style={{fontWeight:'bold', color:'#009688'}}>Faça seu cadastro Sharpeck!</Title> 
    </View>
    
      
      <TextInput style={styles.input} placeholder="Nome" value = {Nome} onChangeText={ Nome => setNome(Nome)}/>
      <TextInput style={styles.input} placeholder="Sobrenome" value = {Sobrenome} 
      onChangeText={ Sobrenome => setSobrenome(Sobrenome)}/>
      <TextInputMask style={styles.input} type={'cpf'} 
      placeholder="CPF" value = {CPF} keyboardType="numeric" onChangeText={ CPF => setCPF (CPF)}/> 
      <TextInput style={styles.input} placeholder="Endereco" value = {Endereco} onChangeText={Endereco => setEndereco(Endereco)}/>
      <TextInputMask style={styles.input} type={'cel-phone'}
      options={{maskType:'BRL', withDDD: true, DDDmask: '(00) ' }} placeholder="Telefone" value = {Telefone} onChangeText={Telefone => setTelefone(Telefone)}/>
      <TextInput style={styles.input} placeholder="Email" value = {Email} onChangeText={Email => setEmail(Email)}/>
      <TextInput style={styles.input} placeholder="Senha" value = {Senha} onChangeText={Senha => setSenha(Senha)} secureTextEntry = {true}/>
 

    <TouchableOpacity style={styles.buttonContainer} onPress={CadastroFinalizado}> 
        <View> 
          <Text style={styles.buttonText}> Resgistre sua Conta</Text> 
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