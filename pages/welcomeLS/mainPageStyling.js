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
