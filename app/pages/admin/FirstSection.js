import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as SC from './adminStyling';

const FirstSection = () => {
  return (
    <SC.FirstSectionContainer>
      <Text style={styles.title}>First Section</Text>
    </SC.FirstSectionContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default FirstSection;