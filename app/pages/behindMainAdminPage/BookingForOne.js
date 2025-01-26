import React from 'react';
import * as SC from './behindAdminPageStyling'; // Replace with your styled-components file
import Icon from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';

const BookingForOne = ({ navigation, route }) => {
  const { t } = useTranslation();
  
  // Example booking data (temporary)
  const bookingDetails = {
    date: '2025-01-26',
    time: '3:00 PM',
    service: 'Haircut - Short Style',
    clientName: 'John Doe',
    stylist: 'Sarah Smith',
  };

  // Handle Back Navigation
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SC.Container>
      {/* Back Button */}
      <SC.BackButton onPress={handleBack}>
        <Icon name="arrow-back" size={30} color="#BF9F00" />
      </SC.BackButton>

      {/* Page Title2 */}
      <SC.Title2>{t('Booking Details')}</SC.Title2>

      {/* Booking Details */}
      <SC.DetailContainer>
        <SC.Label2>{t('Client Name')}</SC.Label2>
        <SC.Value2>{bookingDetails.clientName}</SC.Value2>

        <SC.Label2>{t('Service')}</SC.Label2>
        <SC.Value2>{bookingDetails.service}</SC.Value2>

        <SC.Label2>{t('Date')}</SC.Label2>
        <SC.Value2>{bookingDetails.date}</SC.Value2>

        <SC.Label2>{t('Time')}</SC.Label2>
        <SC.Value2>{bookingDetails.time}</SC.Value2>

        <SC.Label2>{t('Stylist')}</SC.Label2>
        <SC.Value2>{bookingDetails.stylist}</SC.Value2>
      </SC.DetailContainer>
    </SC.Container>
  );
};

export default BookingForOne;