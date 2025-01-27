import React, { useState } from 'react';
import { Alert, ScrollView } from 'react-native';
import * as SC from './behindAdminPageStyling'; 
import { useTranslation } from 'react-i18next';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Ionicons';

const FirstSectionOneBox = ({ route, navigation }) => {
  const { t } = useTranslation();

  // Get appointment details passed from navigation
  const { clientName, time, date, service } = route.params;

  // State for editable fields
  const [status, setStatus] = useState(''); // 'done' or 'canceled'
  const [price, setPrice] = useState('');
  const [notes, setNotes] = useState('');

  const handleSave = () => {
    if (!status || !price) {
      Alert.alert(t('Error'), t('Please fill in all required fields.'));
      return;
    }

    // Add logic here to save the details (e.g., send to the server)
    Alert.alert(t('Success'), t('Appointment details have been updated.'));
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <SC.Container>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {/* Back Button */}
        <SC.BackButton onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={30} color="#BF9F00" />
        </SC.BackButton>

        {/* Title */}
        <SC.Title>{t('Booking Details')}</SC.Title>

        {/* Client Details (Non-editable fields) */}
        <SC.DetailContainer2>
          <SC.Label>{t('Client Name')}</SC.Label>
          <SC.Value>{clientName}</SC.Value>

          <SC.Label>{t('Time')}</SC.Label>
          <SC.Value>{time}</SC.Value>

          <SC.Label>{t('Date')}</SC.Label>
          <SC.Value>{date}</SC.Value>

          <SC.Label>{t('Service')}</SC.Label>
          <SC.Value>{service}</SC.Value>
        </SC.DetailContainer2>
        <SC.DetailContainer>
          <SC.Label>{t('Status')}</SC.Label>
          <SC.SelectContainer>
            <SC.StyledPicker
                selectedValue={status}
                onValueChange={(value) => setStatus(value)}
            >
                <Picker.Item label={t('Done')} value="done" />
                <Picker.Item label={t('Canceled')} value="canceled" />
            </SC.StyledPicker>
         </SC.SelectContainer>

          <SC.Label>{t('Price')}</SC.Label>
          <SC.Input
            value={price}
            onChangeText={(text) => setPrice(text)}
            placeholder={t('Enter price')}
            keyboardType="numeric"
          />

          <SC.Label>{t('Notes')}</SC.Label>
          <SC.TextArea2
            value={notes}
            onChangeText={(text) => setNotes(text)}
            placeholder={t('Enter notes')}
            multiline={true}
            numberOfLines={4}
          />
        </SC.DetailContainer>
        <SC.Button4 onPress={handleSave}>
          <SC.ButtonText>{t('Save')}</SC.ButtonText>
        </SC.Button4>
      </ScrollView>
    </SC.Container>
  );
};

export default FirstSectionOneBox;
