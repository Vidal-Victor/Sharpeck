import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ContainerH, HeaderH, Footer, LogoImg, Title, css } from '../assets/css/Css';
import { StyleSheet,KeyboardAvoidingView, Text, View } from 'react-native';
import logo from '../assets/img/LogoH.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Home (props)
{
    console.log(props);
return(

<KeyboardAvoidingView  behavior={Platform.OS == "ios" ? "padding" : "height"} style = {[css.container, css.shkbg]}>
    <StatusBar style='light' backgroundColor="#000" translucent ={true} />
    <ContainerH colors={['#83EEBA','#6bd1aa', '#837EBA']}>
        <HeaderH>
        <LogoImg source= {logo} style= {{marginTop: 100}} resizeMode ="contain"></LogoImg>
        <Title>Seja bem vindo ao Sharpeck!</Title>
            
            
        </HeaderH>

        <Footer>
                
                <Text style={styles.labelText}> Ofertas fresquinhas te aguardam, entre e veja!</Text>
                
                <TouchableOpacity style={styles.buttonContainer} onPress={() => props.navigation.navigate('Logar')}>
                    <Text style={styles.buttonText}>Realize seu Login</Text>
                </TouchableOpacity>

                <View style={styles.divisor}>
                 <View style={styles.divisorLine}></View>
                 <Text style={{marginHorizontal:'3%', fontWeight:'bold', color:'#fff'}}>OU</Text>
                 <View style={styles.divisorLine}></View>
                </View>

                <Text style={styles.labelText}> Caso não tenha uma conta: </Text>

                <TouchableOpacity style={styles.buttonContainer}  onPress={() => props.navigation.navigate('Registro')}>
                  <Text style={styles.buttonText}> Cadastre-se</Text>
                </TouchableOpacity>
        
        </Footer>
    </ContainerH>
</KeyboardAvoidingView>



);
}
/*<Button title='faça seu login' color = '#83EEBA' onPress={() => props.navigation.navigate('Login')} />
        <Button title='Cadastre-se'   color = '#83EEBA' onPress={() => props.navigation.navigate('CadastroPj')} />*/
const styles = StyleSheet.create({


    buttonContainer: {
    marginTop:'15%',    
    backgroundColor: "#009688",
    borderRadius: 10,
    alignSelf:"center",
    width:'90%',
    paddingVertical: 10,
    paddingHorizontal: 12

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

    labelText:{
        marginTop:40,
        marginBottom:-45,
        marginLeft:10,

        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
    },

 });