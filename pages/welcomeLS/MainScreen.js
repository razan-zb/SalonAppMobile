import React from 'react';
import * as SC from './mainPageStyling';

const MainScreen = ({ navigation }) => {
  return (
    <SC.SafeAreaViewS>
      <SC.WelcomeFrame>
        <SC.Button onPress={() => navigation.navigate('Login')}>
          <SC.ButtonText>Log In</SC.ButtonText>
        </SC.Button>
        <SC.SecondaryText onPress={() => navigation.navigate('SignUp')}>
          Sign Up
        </SC.SecondaryText>
      </SC.WelcomeFrame>
    </SC.SafeAreaViewS>
  );
};

export default MainScreen;
