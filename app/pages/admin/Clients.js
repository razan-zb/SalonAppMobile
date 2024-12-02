import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as SC from './adminStyling';

const Clients = () => {
  return (
    <SC.ClientsContainer>
      <Text style={styles.title}>Clients</Text>
    </SC.ClientsContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Clients;