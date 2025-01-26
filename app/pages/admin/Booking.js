import React from 'react';
import * as SC from './adminStyling';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

const Booking = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const handlePress = () => {
    navigation.navigate('BookingForOne');
  };
  return (
    <SC.BookingContainer  onPress={handlePress} >
      <Icon name="today" size={30} color="#BF9F00" />
      <SC.BookingText>{t('booking')}</SC.BookingText>
    </SC.BookingContainer>
  );
};


export default Booking;