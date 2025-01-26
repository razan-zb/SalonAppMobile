import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import * as SC from './adminStyling';
import logoSource from '../../assest/images/Logo.png'


const TopBar = ({ onExit, onSettings }) => {
  return (
    <SC.TopBarContainer>
      <SC.ButtonExit onPress={onExit}>
        <Icon name="exit-outline" size={24} color="#AF9202" />
      </SC.ButtonExit>

      <SC.LogoContainer>
        <SC.LogoImage source={logoSource} />
      </SC.LogoContainer>


      <SC.ButtonSetting onPress={onSettings}>
        <Icon name="settings-outline" size={24} color="#AF9202" />
      </SC.ButtonSetting>
    </SC.TopBarContainer>
  );
};

export default TopBar;