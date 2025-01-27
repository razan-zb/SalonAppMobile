import React from 'react';
import * as SC from './adminStyling';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

const Clients = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('ClientsList');
  };

  return (
    <SC.ClientsContainer onPress={handlePress}>
      <Icon name="person" size={30} color="#BF9F00" />
      <SC.ClientText>{t('clients')}</SC.ClientText>
    </SC.ClientsContainer>
  );
};
export default Clients;
