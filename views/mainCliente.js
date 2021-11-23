import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {KeyboardAvoidingView, Text, View, StyleSheet, ScrollView} from 'react-native';
import banner from '../assets/img/banner.png';

import { css, ContainerM, Banner, PortifolioFormCm } from '../assets/css/Css';
import Produto from './components/produtos';


export default function mainCliente (){

   

return(

<KeyboardAvoidingView  behavior={Platform.OS == "ios" ? "padding" : "height"} style = {[css.container, css.shkbg]}>
<StatusBar style='light' backgroundColor="#000" translucent ={true} />
    <ContainerM>
    
        <Banner source= {banner} resizeMode ="contain"></Banner>
        <ScrollView>
        <PortifolioFormCm colors={['#6bd1aa','#ffff00','#fff','#fff','#fff','#ffff00','#83EEBA']}>
            <View style={styles.textContainer}>
               <Text style={{fontSize:23, fontWeight:'bold', color: '#000'}}>Produtos em </Text>
               <Text style={{fontSize:23, fontWeight:'bold', color: 'red'}}>Promoção</Text>
            </View>
        </PortifolioFormCm>

        
            <View style={{flexDirection:'row', justifyContent: 'center', justifyContent:'space-around'}}>
            <Produto img={require('../assets/img/Leite2.png')} cost1 = "R$2,99" cost2= "R$5,99" onClick={()=> navigation.navigate}> Leite Piracanjuba</Produto>
            <Produto img={require('../assets/img/arroz2.png')}  cost1 = "R$15,99" cost2= "R$21,99"> Arroz Máximo</Produto>
            </View>
            <View style={{flexDirection:'row', justifyContent: 'center', justifyContent:'space-around'}}>
            <Produto img={require('../assets/img/Salsicha2.png')} cost1 = "R$6,99" cost2= "R$11,99"> Salcicha Perdigão</Produto>
            <Produto img={require('../assets/img/pão1.png')}  cost1 = "R$5,99" cost2= "R$7,99"> Pão de forma Panco</Produto>
            </View>
            <View style={{flexDirection:'row', justifyContent: 'center', justifyContent:'space-around'}}>
            <Produto img={require('../assets/img/miojo2.jpg')} cost1 = "R$0,99" cost2= "R$2,99"> Miojo de carne</Produto>
            <Produto img={require('../assets/img/macarrão2.jpg')}  cost1 = "R$6,99" cost2= "R$11,99"> Macarrão Renata</Produto>
            </View>
            <View style={{flexDirection:'row', justifyContent: 'center', justifyContent:'space-around'}}>
            <Produto img={require('../assets/img/Salgadinho2.png')} cost1 = "R$6,99" cost2= "R$12,99"> Chips Sensações</Produto>
            <Produto img={require('../assets/img/Coca1.png')}  cost1 = "R$7,99" cost2= "R$12,99"> Coca-cola 2L</Produto>
            </View>
            <View style={{flexDirection:'row', justifyContent: 'center', justifyContent:'space-around'}}>
            <Produto img={require('../assets/img/cereal2.png')} cost1 = "R$6,99" cost2= "R$12,99"> Cereal Snow Flocos</Produto>
            <Produto img={require('../assets/img/Coca3.webp')}  cost1 = "R$10,99" cost2= "R$16,99"> Fardo de Coca-cola</Produto>
            </View>
        <PortifolioFormCm colors={['#6bd1aa','#f24f00','#fff','#fff','#fff','#f24f00','#83EEBA']}>
            <View style={styles.textContainer}>
               <Text style={{fontSize:23, fontWeight:'bold', color: '#000'}}>Produtos também disponíveis</Text>
            </View>
        </PortifolioFormCm>
        <View style={{flexDirection:'row', justifyContent: 'center', justifyContent:'space-around'}}>
            <Produto img={require('../assets/img/arroz1.png')} cost1 = "R$16,99"> Arroz Tio João</Produto>
            <Produto img={require('../assets/img/cereal1.png')}  cost1 = "R$15,99" > Sucrilhos Kellogg's</Produto>
        </View>
        <View style={{flexDirection:'row', justifyContent: 'center', justifyContent:'space-around'}}>
            <Produto img={require('../assets/img/pão2.png')} cost1 = "R$7,99" > Pão de forma Pulman</Produto>
            <Produto img={require('../assets/img/Leite3.png')}  cost1 = "R$3,99"> Leite Líder</Produto>
        </View>
        <View style={{flexDirection:'row', justifyContent: 'center', justifyContent:'space-around'}}>
            <Produto img={require('../assets/img/chocolate1.jpg')} cost1 = "R$5,99" > Chocolate Nestle</Produto>
            <Produto img={require('../assets/img/coca2.png')}  cost1 = "R$2,99"> Coca-cola Lata 300ml</Produto>
        </View>
        <View style={{flexDirection:'row', justifyContent: 'center', justifyContent:'space-around'}}>
            <Produto img={require('../assets/img/Salgadinho1.png')} cost1 = "R$4,99" > Chips Cheetos</Produto>
            <Produto img={require('../assets/img/Danone1L.png')}  cost1 = "R$5,49"> Iourgute Danone 1L</Produto>
        </View>
        <View style={{flexDirection:'row', justifyContent: 'center', justifyContent:'space-around'}}>
            <Produto img={require('../assets/img/Danone2.png')} cost1 = "R$4,99" > Iourgute Danone cartela </Produto>
            <Produto img={require('../assets/img/Leite1.png')}  cost1 = "R$2,49"> Leite Elegê</Produto>
        </View>
        <View style={{flexDirection:'row', justifyContent: 'center', justifyContent:'space-around'}}>
            <Produto img={require('../assets/img/miojo1.jpg')} cost1 = "R$1,99" > miojo galinha caipira </Produto>
            <Produto img={require('../assets/img/macarrão1.jpg')}  cost1 = "R$4,49"> Macarrão Renata</Produto>
        </View>
        <View style={{flexDirection:'row', justifyContent: 'center', justifyContent:'space-around'}}>
            <Produto img={require('../assets/img/óleo1.png')} cost1 = "R$8,99" > Óleo de soja Soya </Produto>
            <Produto img={require('../assets/img/salsicha1.´ng.jpg')}  cost1 = "R$10,49"> Salsicha Sadia</Produto>
        </View>
        <View style={{flexDirection:'row', justifyContent: 'center', justifyContent:'space-around'}}>
            <Produto img={require('../assets/img/chocolate2.jpg')} cost1 = "R$8,99" > Chocolate Hershey's Oreo </Produto>
            <Produto img={require('../assets/img/óleo2.png')}  cost1 = "R$8,49"> Óleo de soja Liza</Produto>
        </View>
        </ScrollView>
    </ContainerM>
</KeyboardAvoidingView>
);
}

const styles = StyleSheet.create({
    header: {
        marginBottom: 8,
    },
    Image: {
        width:'100%'
    },
    textContainer:{
        flexDirection:'row',
        marginVertical:'5%',
        marginHorizontal:'5%',
        alignSelf: 'center',
        marginTop:12
    },
});