import React from 'react';
import * as SC from './adminStyling';
import Icon from 'react-native-vector-icons/Ionicons'; 

const Booking = () => {
  return (
    <SC.BookingContainer>
      <Icon name="today" size={30} color="#935B16" />
      <SC.BookingText>Booking</SC.BookingText>
    </SC.BookingContainer>
  );
};


export default Booking;