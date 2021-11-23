import {KeyboardAvoidingView, StyleSheet} from "react-native";
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textPage:{
        backgroundColor:'orange',
        padding: 20
    },
    container2: {
        flex: 1,
        flexDirection:'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button__home:{
        marginRight: 40
    },
    shkbg:{
        backgroundColor:"#fff"
    },
    
});

export {css};
 
//home
export const Container = styled.View`
  height: 100%;
  width: 100%;
  background-color: #ececec;
  display: flex;
  flex: 1; 
  `;

  export const Header = styled(LinearGradient)`
  height : 0px;
  flex: 2;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.KeyboardAvoidingView`
  flex: 3;
`;

export const PortifolioForm = styled.View`
  flex: 1;
  borderRadius: 10px;
  background-color : #F7F7F7;
  border-color:#fff;
  margin: 25px;
  margin-top: -50px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
export const TitleLogin = styled.Text`
  font-weight: 700;
  font-size: 22px;
  color: #26c97a;    
  border-color: #000;
  margin-top: 25px;
  margin-Bottom:25px;
    
`;
export const ContainerH = styled(LinearGradient)`
 width: 100%;
 padding 16;
 flex: 1; 
 justify-content: center;
 
`;

export const ButtonH = styled.Button`

height:700px;
width:50px;
`;
export const HeaderH = styled.View`
height : 0px;
flex: 2;
justify-content: center;
align-items: center;
`;
export const LogoImg = styled.Image`

height:120px;
width:230px;
border-radius:50px;

`;
export const Title = styled.Text`
    font-weight: 700;
    font-size: 25px;
    color: #fff;    
    border-color: #000;
     margin-top: 25px;
     margin-Bottom:25px;
    
`;
export const ContentButton = styled.View`
    justify-content: center;
    align-items: center;
`;
export const Button = styled.TouchableOpacity`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const TextButton = styled.Text`
  font-weight: 700;
  font-size: 1500px;
  color: #fff;
`;
export const LogoImgR = styled.Image`

height:120px;
width:230px;
border-radius:50px;
margin-top: 0px;
`;

export const PortifolioFormC = styled.View`
flex: 1;
borderRadius:10px;
background-color : #F7F7F7;
border-color:#fff;
margin: 2px;
margin-top: -100px;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`;

export const ContainerM = styled.View`
  width: 100%;
  background-color: #ececec;
  flex: 1; 
  `;

export const Banner = styled.Image`
margin-top: 12px;
height: 30%;
width: 100%;
border-radius:10px;
`;

export const PortifolioFormCm = styled(LinearGradient)`
borderRadius:10px;
border-color:#fff;
height:-130px;
width: 100%;
align-items: center;
`;

export const ProdutoImg = styled.Image`
height: 30%;
width: 100%;
`;