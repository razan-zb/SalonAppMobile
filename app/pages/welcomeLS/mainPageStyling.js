/* eslint-disable eol-last */
import styled from 'styled-components/native';
import { ImageBackground } from 'react-native';
import mobileFrame from '../../assest/images/WelcomeFrameMobile.png';
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
background-color: #CAB572; 
padding: 12px 24px;
border-radius: 8px;
margin-top: 100px;
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
    color: #CAB572; 
    font-size: 18px;
    margin-top: 1px;

`;

//LogIn
export const LoginContainer = styled.View`
    flex:1;
    justify-content: center; 
    align-items: center; 
    background-color:#fff;
    width:100%;
    higth:100%
`;

export const InnerContainer = styled.View`
    background-color:#F9F0C3;
    width:350px;
    height:300px;
    padding:10px;
    margin-top:20px;
    justify-content: center;
    border-radius: 10px;
    border:1px;
    border: 2px solid #AF9202;



`;

export const LogInTitle = styled.Text`
    font-size:24px;
    font-weight: bold;
    color:#AF9202;


`;

export const LogInLabels = styled.Text`
    font-size:20px;
    font-weight: bold;
    color:#AF9202;

`;

export const ShownPassword = styled.Text`
    font-size:16px;
    font-weight: bold;
    color:#AF9202;
    font-family: cursive;

`;


export const InputBox = styled.TextInput`
    font-size:16px;
    color:#AF9202;
    border: 0; 

`;

export const Checkbox = styled.View`
  width: 20px;
  height: 20px;
  border-width: 1px;
  border-color: #97883A;
  margin-right: 10px;
  border-radius: 3px;
  background-color: ${(props) => (props.checked ? '#AF9202' : 'white')};
`;

export const LoginButton = styled.TouchableOpacity`
  background-color: #97883A;
  padding: 15px 20px;
  border-radius: 5px;
  align-items: center;
  margin-top: 30px;
`;

export const LoginButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

export const BackArrow = styled.TouchableOpacity`
  position:absolute;
  align-self:flex-end;
  top:20px; 

`;




