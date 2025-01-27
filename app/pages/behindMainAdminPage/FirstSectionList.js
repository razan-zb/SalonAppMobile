import React from 'react';
import { FlatList } from 'react-native';
import * as SC from './behindAdminPageStyling'; // Import your styled-components for styling
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';

const FirstSectionList = ({ navigation }) => {
  const { t } = useTranslation();

  // Example appointments data
  const appointments = [
    { id: 1, clientName: 'Razan Zbedy', date: '2025-01-27', time: '11:30 AM' },
    { id: 2, clientName: 'Ali Ahmad', date: '2025-01-27', time: '1:00 PM' },
    { id: 3, clientName: 'Sara Omar', date: '2025-01-27', time: '3:30 PM' },
    { id: 4, clientName: 'Hana Awed', date: '2025-01-28', time: '9:00 AM' },
  ];

  // Handler to navigate to appointment details
  const handlePressAppointment = (appointment) => {
    navigation.navigate('FirstSectionOneBox', {
      date: appointment.date,
      time: appointment.time,
      clientName: appointment.clientName,
    });
  };

  return (
    <SC.Container>

      <SC.BackButton onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={30} color="#BF9F00"/>
      </SC.BackButton>

      <SC.Title>{t('Review Appointments')}</SC.Title>

      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <SC.Card onPress={() => handlePressAppointment(item)}>
            <SC.CardContent>
              <SC.ClientName3>{item.clientName}</SC.ClientName3>
              <SC.DateTime>{`${item.date}, ${item.time}`}</SC.DateTime>
            </SC.CardContent>
            <SC.IconContainer>
              <Icon name="chevron-back" size={24} color="#BF9F00" />
            </SC.IconContainer>
          </SC.Card>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SC.Container>
  );
};

export default FirstSectionList;