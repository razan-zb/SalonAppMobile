import React, { useState } from 'react';
import * as SC from './behindAdminPageStyling';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';
import { FlatList, TouchableOpacity } from 'react-native';

const ClientsList = ({ navigation }) => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [clients, setClients] = useState([
    'Razan Zbedy',
    'Ali Ahmad',
    'Sara Omar',
    'John Doe',
    'Alaa Karem',
    'Amera Asma',
    'Hana Awed',
  ]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredClients = clients.filter((client) =>
    client.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleAddClient = () => {
    navigation.navigate('OneClient');
  };



  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SC.ClientsListContainer>
      <TouchableOpacity onPress={handleBack} style={{ marginTop: 10 ,alignSelf:"flex-end" }}>
        <Icon name="arrow-back" size={30} color="#BF9F00" />
      </TouchableOpacity>

      <SC.SearchBarContainer>
        <Icon name="search" size={20} color="#1D1D1B" />
        <SC.SearchInput
          placeholder={t('Search for a client')}
          placeholderTextColor="#1D1D1B"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </SC.SearchBarContainer>

      <FlatList
        data={filteredClients}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <SC.ClientNameContainer  >
            <SC.ClientName onPress={handleAddClient}>{item}</SC.ClientName>
          </SC.ClientNameContainer>
        )}
        contentContainerStyle={{ padding: 10 }}
      />

      {/* Plus Button */}
      <SC.PlusButton onPress={handleAddClient}>
        <Icon name="add" size={30} color="#1D1D1B" />
      </SC.PlusButton>
    </SC.ClientsListContainer>
  );
};

export default ClientsList;