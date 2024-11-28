/* eslint-disable eol-last */
import styled from 'styled-components/native';
import { ImageBackground } from 'react-native';
import mobileFrame from '../../assest/images/WelcomeFrameMobile.png';
import ss from '../../assest/fonts/Crisa.otf';
export const SafeAreaViewS = styled.SafeAreaView`
  flex: 1;
`;

export const WelcomeFrame = styled(ImageBackground).attrs({
  source: mobileFrame,
  resizeMode: 'cover',
})`
  flex: 1;
  justify-content: center; 
  align-items: center; 
`;


export const Button = styled.TouchableOpacity`
background-color: #CB8632; 
padding: 12px 24px;
border-radius: 8px;
margin-top: 150px;
width: 40%; 
align-items: center;

`;

export const ButtonText = styled.Text`
        color: #fff;
        font-size: 18px;
        font-weight: bold;
        text-transform: uppercase;
        
        `;
export const SecondaryText = styled.Text`
    color: #CB8632; 
    font-size: 18px;
    margin-top: 1px;

`;

//LogIn
export const LoginContainer = styled.View`
    flex:1;
    justify-content: center; 
    align-items: center; 
    background-color:#E6A556;
    width:100%;
    higth:100%
`;

export const InnerContainer = styled.View`
    background-color:#F6C992;
    width:350px;
    height:300px;
    padding:10px;
    margin-top:20px;
    justify-content: center;



`;

export const LogInTitle = styled.Text`
    font-size:30px;
    font-weight: bold;
    color:#6C400A;
    font-family: cursive;


`;

export const LogInLabels = styled.Text`
    font-size:20px;
    font-weight: bold;
    color:#6C400A;
    font-family: cursive;

`;

export const ShownPassword = styled.Text`
    font-size:16px;
    font-weight: bold;
    color:#6C400A;
    font-family: cursive;

`;


