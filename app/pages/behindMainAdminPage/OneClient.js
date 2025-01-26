import React, { useState } from 'react';
import * as SC from './behindAdminPageStyling'; // Import your styled components
import Icon from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';
import { Linking, Alert, FlatList, View } from 'react-native';

const OneClient = ({ navigation }) => {
  const { t } = useTranslation();

  // Client data state
  const [client, setClient] = useState({
    name: 'Client Name',
    phone: '123456789',
    address: 'Client Address',
    birthday: '1990-01-01',
    naturalHairColor: 'Black',
    hairType: 'Straight',
    fileOpeningDate: '2025-01-26',
    registrationDate: '2023-12-01', // تاريخ إضافة الزبون
    notes: 'Frequent customer; prefers short styles', // ملاحظات
    appointments: [
      { id: 1, date: '2025-01-20', notes: 'Haircut - Short Style' },
      { id: 2, date: '2025-01-25', notes: 'Hair Dyeing - Blonde' },
    ],
  });

  // Toggle state for editing
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = () => {
    setIsEditing(true); // Enter edit mode
  };
  
  const handleCancel = () => {
    setIsEditing(false); // Exit edit mode without saving changes
    // Optionally, reset the client state to the original values here
  };
  
  const handleSave = () => {
    setIsEditing(false); // Exit edit mode and save changes
    Alert.alert(t('Success'), t('Client details have been updated successfully.'));
    // Add your logic to save data to the server or local storage here
  };
  const handleCall = () => {
    Linking.openURL(`tel:${client.phone}`).catch(() =>
      Alert.alert(t('Error'), t('Unable to open dialer.'))
    );
  };

  return (
    <SC.MainOneCliesntContainer>
      <FlatList
        data={[{ id: 'header' }, ...client.appointments]} // Include a dummy item for the header
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          if (item.id === 'header') {
            // Render client details (header)
            return (
              <>
                {/* Back Button */}
                <SC.BackButton onPress={() => navigation.goBack()}>
                  <Icon
                    name="arrow-back"
                    size={30}
                    color="#BF9F00"
                    style={{ alignSelf: 'flex-end' }}
                  />
                </SC.BackButton>

                {/* Title */}
                <SC.Title>{t('Client Details')}</SC.Title>

                {/* Editable Client Fields */}
                <SC.ClientDetail>
                  <SC.Label>{t('Name')}</SC.Label>
                  {isEditing ? (
                    <SC.Input
                      value={client.name}
                      onChangeText={(text) => setClient({ ...client, name: text })}
                      placeholder={t('Enter client name')}
                    />
                  ) : (
                    <SC.Value>{client.name}</SC.Value>
                  )}
                </SC.ClientDetail>
                <SC.ClientDetail>
                  <SC.Label>{t('Phone')}</SC.Label>
                  {isEditing ? (
                    <SC.Input
                      value={client.phone}
                      onChangeText={(text) => setClient({ ...client, phone: text })}
                      placeholder={t('Enter phone number')}
                    />
                  ) : (
                    <SC.Value onPress={handleCall} style={{ color: '#BF9F00' }}>
                      {client.phone}
                    </SC.Value>
                  )}
                </SC.ClientDetail>
                <SC.ClientDetail>
                  <SC.Label>{t('Address')}</SC.Label>
                  {isEditing ? (
                    <SC.Input
                      value={client.address}
                      onChangeText={(text) => setClient({ ...client, address: text })}
                      placeholder={t('Enter address')}
                    />
                  ) : (
                    <SC.Value>{client.address}</SC.Value>
                  )}
                </SC.ClientDetail>
                <SC.ClientDetail>
                  <SC.Label>{t('Birthday')}</SC.Label>
                  {isEditing ? (
                    <SC.Input
                      value={client.birthday}
                      onChangeText={(text) => setClient({ ...client, birthday: text })}
                      placeholder={t('YYYY-MM-DD')}
                    />
                  ) : (
                    <SC.Value>{client.birthday}</SC.Value>
                  )}
                </SC.ClientDetail>
                <SC.ClientDetail>
                  <SC.Label>{t('Natural Hair Color')}</SC.Label>
                  {isEditing ? (
                    <SC.Input
                      value={client.naturalHairColor}
                      onChangeText={(text) =>
                        setClient({ ...client, naturalHairColor: text })
                      }
                      placeholder={t('Enter natural hair color')}
                    />
                  ) : (
                    <SC.Value>{client.naturalHairColor}</SC.Value>
                  )}
                </SC.ClientDetail>
                <SC.ClientDetail>
                  <SC.Label>{t('Hair Type')}</SC.Label>
                  {isEditing ? (
                    <SC.Input
                      value={client.hairType}
                      onChangeText={(text) => setClient({ ...client, hairType: text })}
                      placeholder={t('Enter hair type')}
                    />
                  ) : (
                    <SC.Value>{client.hairType}</SC.Value>
                  )}
                </SC.ClientDetail>
                <SC.ClientDetail>
                  <SC.Label>{t('Registration Date')}</SC.Label>
                  <SC.Value>{client.registrationDate}</SC.Value>
                </SC.ClientDetail>
                <SC.ClientDetail>
                  <SC.Label>{t('Notes')}</SC.Label>
                  {isEditing ? (
                    <SC.Input
                      value={client.notes}
                      onChangeText={(text) => setClient({ ...client, notes: text })}
                      placeholder={t('Enter notes')}
                    />
                  ) : (
                    <SC.Value>{client.notes}</SC.Value>
                  )}
                </SC.ClientDetail>

                {/* Buttons */}
                <SC.ButtonContainer>
                {/* Update/Cancel Button */}
                <SC.Button onPress={isEditing ? handleCancel : handleUpdate}>
                  <SC.ButtonText>{isEditing ? t('Cancel') : t('Update')}</SC.ButtonText>
                </SC.Button>

                {/* Save Button */}
                {isEditing && (
                  <SC.Button onPress={handleSave}>
                    <SC.ButtonText>{t('Save')}</SC.ButtonText>
                  </SC.Button>
                )}
              </SC.ButtonContainer>
                <SC.Title>{t('Appointments')}</SC.Title>
              </>
            );
          } else {
            // Render appointments
            return (
              <SC.Appointment>
                <SC.AppointmentDate>{item.date}</SC.AppointmentDate>
                <SC.AppointmentNotes>{item.notes}</SC.AppointmentNotes>
              </SC.Appointment>
            );
          }
        }}
        contentContainerStyle={{ padding: 20, backgroundColor: '#fdfcf4' }}
        ListFooterComponent={<View style={{ height: 20 }} />} // Adds extra padding at the bottom
      />
    </SC.MainOneCliesntContainer>
  );
};

export default OneClient;