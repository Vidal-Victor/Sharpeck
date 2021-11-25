import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {KeyboardAvoidingView, Text, View, StyleSheet, ScrollView} from 'react-native';
import banner from '../assets/img/banner.png';
import {useNavigation} from '@react-navigation/native'
import { css, ContainerM, Banner, PortifolioFormCm } from '../assets/css/Css';
import Produto from './components/produtos';


export default function mainCliente (){
const navigation = useNavigation();
   

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
            <Produto img={require('../assets/img/Leite2.png')} cost1 = "R$2,99" cost2= "R$5,99"  onClick={()=> navigation.navigate('Detail')}> Leite Piracanjuba</Produto>
            <Produto img={require('../assets/img/arroz2.png')}  cost1 = "R$15,99" cost2= "R$21,99" onClick={()=> navigation.navigate('Detail')}> Arroz Máximo</Produto>
            </View>
            <View style={{flexDirection:'row', justifyContent: 'center', justifyContent:'space-around'}}>
            <Produto img={require('../assets/img/Salsicha2.png')} cost1 = "R$6,99" cost2= "R$11,99" onClick={()=> navigation.navigate('Detail')}> Salcicha Perdigão</Produto>
            <Produto img={require('../assets/img/pão1.png')}  cost1 = "R$5,99" cost2= "R$7,99" onClick={()=> navigation.navigate('Detail')}> Pão de forma Panco</Produto>
            </View>
            <View style={{flexDirection:'row', justifyContent: 'center', justifyContent:'space-around'}}>
            <Produto img={require('../assets/img/miojo2.jpg')} cost1 = "R$0,99" cost2= "R$2,99" onClick={()=> navigation.navigate('Detail')}> Miojo de carne</Produto>
            <Produto img={require('../assets/img/macarrão2.jpg')}  cost1 = "R$6,99" cost2= "R$11,99" onClick={()=> navigation.navigate('Detail')}> Macarrão Renata</Produto>
            </View>
            <View style={{flexDirection:'row', justifyContent: 'center', justifyContent:'space-around'}}>
            <Produto img={require('../assets/img/Salgadinho2.png')} cost1 = "R$6,99" cost2= "R$12,99" onClick={()=> navigation.navigate('Detail')}> Chips Sensações</Produto>
            <Produto img={require('../assets/img/Coca1.png')}  cost1 = "R$7,99" cost2= "R$12,99" onClick={()=> navigation.navigate('Detail')}> Coca-cola 2L</Produto>
            </View>
            <View style={{flexDirection:'row', justifyContent: 'center', justifyContent:'space-around'}}>
            <Produto img={require('../assets/img/cereal2.png')} cost1 = "R$6,99" cost2= "R$12,99" onClick={()=> navigation.navigate('Detail')}> Cereal Snow Flocos</Produto>
            <Produto img={require('../assets/img/Coca3.webp')}  cost1 = "R$10,99" cost2= "R$16,99" onClick={()=> navigation.navigate('Detail')}> Fardo de Coca-cola</Produto>
            </View>
        <PortifolioFormCm colors={['#6bd1aa','#f24f00','#fff','#fff','#fff','#f24f00','#83EEBA']}>
            <View style={styles.textContainer}>
               <Text style={{fontSize:23, fontWeight:'bold', color: '#000'}}>Produtos também disponíveis</Text>
            </View>
        </PortifolioFormCm>
        <View style={{flexDirection:'row', justifyContent: 'center', justifyContent:'space-around'}}>
            <Produto img={require('../assets/img/arroz1.png')} cost1 = "R$16,99" onClick={()=> navigation.navigate('Detail')}> Arroz Tio João</Produto>
            <Produto img={require('../assets/img/cereal1.png')}  cost1 = "R$15,99" onClick={()=> navigation.navigate('Detail')}> Sucrilhos Kellogg's</Produto>
        </View>
        <View style={{flexDirection:'row', justifyContent: 'center', justifyContent:'space-around'}}>
            <Produto img={require('../assets/img/pão2.png')} cost1 = "R$7,99" onClick={()=> navigation.navigate('Detail')}> Pão de forma Pulman</Produto>
            <Produto img={require('../assets/img/Leite3.png')}  cost1 = "R$3,99"onClick={()=> navigation.navigate('Detail')}> Leite Líder</Produto>
        </View>
        <View style={{flexDirection:'row', justifyContent: 'center', justifyContent:'space-around'}}>
            <Produto img={require('../assets/img/chocolate1.jpg')} cost1 = "R$5,99" onClick={()=>navigation.navigate('Detail')}> Chocolate Nestle</Produto>
            <Produto img={require('../assets/img/coca2.png')}  cost1 = "R$2,99" onClick={()=> navigation.navigate('Detail')}> Coca-cola Lata 300ml</Produto>
        </View>
        <View style={{flexDirection:'row', justifyContent: 'center', justifyContent:'space-around'}}>
            <Produto img={require('../assets/img/Salgadinho1.png')} cost1 = "R$4,99" onClick={()=> navigation.navigate('Detail')}> Chips Cheetos</Produto>
            <Produto img={require('../assets/img/Danone1L.png')}  cost1 = "R$5,49" onClick={()=> navigation.navigate('Detail')}> Iourgute Danone 1L</Produto>
        </View>
        <View style={{flexDirection:'row', justifyContent: 'center', justifyContent:'space-around'}}>
            <Produto img={require('../assets/img/Danone2.png')} cost1 = "R$4,99" onClick={()=> navigation.navigate('Detail')}> Iourgute Danone cartela </Produto>
            <Produto img={require('../assets/img/Leite1.png')}  cost1 = "R$2,49" onClick={()=>navigation.navigate('Detail')}> Leite Elegê</Produto>
        </View>
        <View style={{flexDirection:'row', justifyContent: 'center', justifyContent:'space-around'}}>
            <Produto img={require('../assets/img/miojo1.jpg')} cost1 = "R$1,99" onClick={()=> navigation.navigate('Detail')}> miojo galinha caipira </Produto>
            <Produto img={require('../assets/img/macarrão1.jpg')}  cost1 = "R$4,49" onClick={()=> navigation.navigate('Detail')}> Macarrão Renata</Produto>
        </View>
        <View style={{flexDirection:'row', justifyContent: 'center', justifyContent:'space-around'}}>
            <Produto img={require('../assets/img/óleo1.png')} cost1 = "R$8,99" onClick={()=> navigation.navigate('Detail')}> Óleo de soja Soya </Produto>
            <Produto img={require('../assets/img/salsicha1.´ng.jpg')}  cost1 = "R$10,49" onClick={()=> navigation.navigate('Detail')}> Salsicha Sadia</Produto>
        </View>
        <View style={{flexDirection:'row', justifyContent: 'center', justifyContent:'space-around'}}>
            <Produto img={require('../assets/img/chocolate2.jpg')} cost1 = "R$8,99" onClick={()=> navigation.navigate('Detail')}> Chocolate Hershey's Oreo </Produto>
            <Produto img={require('../assets/img/óleo2.png')}  cost1 = "R$8,49" onClick={()=> navigation.navigate('Detail')}> Óleo de soja Liza</Produto>
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