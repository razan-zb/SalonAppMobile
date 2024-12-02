import React from 'react';
import * as SC from './mainPageStyling';
import { useTranslation } from 'react-i18next';

const MainScreen = ({ navigation }) => {

  const { t } = useTranslation();

  return (
    <SC.SafeAreaViewS>
      <SC.WelcomeFrame>
        <SC.Button onPress={() => navigation.navigate('Login')}>
          <SC.ButtonText>{t('login')}</SC.ButtonText>
        </SC.Button>
        <SC.SecondaryText onPress={() => navigation.navigate('SignUp')}>
        {t('SignUp')}
        </SC.SecondaryText>
      </SC.WelcomeFrame>
    </SC.SafeAreaViewS>
  );
};

export default MainScreen;
