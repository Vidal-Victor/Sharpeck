import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {KeyboardAvoidingView, Text, View} from 'react-native';

import { css } from '../assets/css/Css';



export default function mainCliente (){

   

return(

<KeyboardAvoidingView  behavior={Platform.OS == "ios" ? "padding" : "height"} style = {[css.container, css.shkbg]}>
<StatusBar style='light' backgroundColor="#000" translucent ={true} />
    
    

</KeyboardAvoidingView>



);
}

const styles = StyleSheet.create({
    container: {

    }
});