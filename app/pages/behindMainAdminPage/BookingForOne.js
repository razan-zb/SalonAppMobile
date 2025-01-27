import React from 'react';
import * as SC from './behindAdminPageStyling'; // Replace with your styled-components file
import Icon from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';
import { Alert } from 'react-native';

const BookingForOne = ({ navigation, route }) => {
  const { t } = useTranslation();
  const { date, time } = route.params;
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

  const handleSave= () => {
    Alert.alert( t('Saved!'));
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
        <SC.Value2>{date}</SC.Value2>

        <SC.Label2>{t('Time')}</SC.Label2>
        <SC.Value2>{time}</SC.Value2>

        <SC.ButtonContainer>
          <SC.Button onPress={handleSave}>
            <SC.ButtonText>Save</SC.ButtonText>
          </SC.Button>
        </SC.ButtonContainer>

      </SC.DetailContainer>
    </SC.Container>
  );
};

export default BookingForOne;