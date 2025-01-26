import React from 'react';
import * as SC from './adminStyling';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { useTranslation } from 'react-i18next';

const Booking = () => {
  const { t } = useTranslation();

  return (
    <SC.BookingContainer>
      <Icon name="today" size={30} color="#BF9F00" />
      <SC.BookingText>{t('booking')}</SC.BookingText>
    </SC.BookingContainer>
  );
};


export default Booking;