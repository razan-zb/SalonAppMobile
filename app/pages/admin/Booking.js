import React from 'react';
import * as SC from './adminStyling';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { useTranslation } from 'react-i18next';

const Booking = () => {
  const { t } = useTranslation();

  return (
    <SC.BookingContainer>
      <Icon name="today" size={30} color="#935B16" />
      <SC.BookingText>{t('booking')}</SC.BookingText>
    </SC.BookingContainer>
  );
};


export default Booking;