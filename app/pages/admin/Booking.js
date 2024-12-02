import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as SC from './adminStyling';

const Booking = () => {
  return (
    <SC.BookingContainer>
      <Text style={styles.title}>Booking</Text>
    </SC.BookingContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Booking;