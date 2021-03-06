import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, Image, View, Platform, TouchableOpacity } from 'react-native';
import { Container, Header, Footer, PortifolioForm,LogoImg, TitleLogin, css } from '../assets/css/Css';
import logoL from '../assets/img/LogoL.jpg';
import database from './firebase'


export default function LoginP (props) {
    console.log(props);
    const [display, setDisplay]=useState( 'none');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function Firebase(){
    database.auth().signInWithEmailAndPassword(email, senha)
     .then((userCredential) => {

        props.navigation.navigate('MainCliente')
        var database = userCredential.database;
    })
        .catch((error) => {

        });
    }
return(
<KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style = {[css.container, css.shkbg]}>
    <StatusBar style='light' backgroundColor="#000" translucent ={true} />
    <Container>
        <Header colors={['#83EEBA', '#837EBA']}>
            <LogoImg source= {logoL} resizeMode ="contain" style= {{marginTop: -25}}></LogoImg>
        </Header>

    <Footer>
     <PortifolioForm>

        <View>
             <Text style={Style.login__msg(display)}>Há algo de errado com seu Login :( Tenha certeza de estar colocando as credenciais corretas!</Text>
        </View>
            
                <TitleLogin>Bons negócios!</TitleLogin>

        <View style = {Style.InputMaster}>
            <TextInput style={Style.login__input} value={email}  onChangeText={email=> setEmail(email)} placeholder='Digite seu email' />

        
            <TextInput style={Style.login__input} value={senha} onChangeText={senha=> setSenha(senha)} placeholder='Digite sua senha' secureTextEntry = {true} />
        </View>

            <View style= {Style.container_forgot}>
            <TouchableOpacity > 
                <View><Text style = {Style.forgotText}>Esqueceu sua senha ?</Text></View> 
            </TouchableOpacity>
            </View>

        <TouchableOpacity style = {Style.loginbutton} onPress={()=>{Firebase()}}>
            <View ><Text style = {Style.loginbunttonText}>Entrar</Text></View>
        </TouchableOpacity>
        
    </PortifolioForm>    
   </Footer>
   </Container>
 </KeyboardAvoidingView>
);
}



const Style = StyleSheet.create({

    login__msg:(text='none')=>({
        fontWeight:"bold",
        fontSize: 15,
        color: "red",
        marginTop: 10,
        marginBottom: 15,
        alignSelf:'center',
        display: text
    }),
    InputMaster:{
        width: "98%",
    },

    login_logomarca:{
         
         marginBottom:Platform.OS === 'android' ? '3%' : '15%',
         marginTop: Platform.OS === 'android' ? '3%' : '15%',
    },
    logo_login:{
        marginBottom:10,
        width: 175,
        height: 175,
    },

    login__input:{
        
        width: '90%',
        backgroundColor: '#F4F3F3',
        marginBottom: 10,
        alignItems: "center",
        padding:7,

        borderColor: '#c3c3c3'
        
    },
    loginbutton:{
        marginTop:'15%',
        padding: 12,
        borderRadius:10,
        backgroundColor: "#009688",
        alignSelf:"center",
        alignItems:'center',
        width:'90%',
    
    },
    loginbunttonText:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:15
    },
    container_forgot:{
        width:'90%',
        alignItems:'flex-end',
    },
    forgotText:{
        color:"#83EEB7",
        fontWeight:'bold',
        marginBottom:10
    }
    
});
