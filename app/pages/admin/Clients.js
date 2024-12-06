import React from 'react';
import * as SC from './adminStyling';
import Icon from 'react-native-vector-icons/Ionicons'; 

const Clients = () => {
  return (
    <SC.ClientsContainer>
      <Icon name="person" size={30} color="#935B16" />
      <SC.ClientText>Clients</SC.ClientText>
    </SC.ClientsContainer>
  );
};



export default Clients;