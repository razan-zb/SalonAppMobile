import React from 'react';
import * as SC from './adminStyling';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { useTranslation } from 'react-i18next';

const Clients = () => {
  const { t } = useTranslation();

  return (
    <SC.ClientsContainer>
      <Icon name="person" size={30} color="#935B16" />
      <SC.ClientText>{t('clients')}</SC.ClientText>
    </SC.ClientsContainer>
  );
};



export default Clients;