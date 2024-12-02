import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as SC from './adminStyling';

const SecondSection = () => {
  return (
    <SC.SecondSectionContainer>
      <Text style={styles.title}>Second Section</Text>
    </SC.SecondSectionContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SecondSection;