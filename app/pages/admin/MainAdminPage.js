import React from 'react';
import * as SC from './adminStyling';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import Clients from './Clients';
import Booking from './Booking';
import TopBar from './TopBar';
import { useTranslation } from 'react-i18next';
import { Alert } from 'react-native';

const MainAdminPage = ({navigation}) => {
  const { t } = useTranslation();
  
  const handleExit = () => {
    Alert.alert(
      t('Exit Application'),
      t('Are you sure you want to exit the application?'),
      [
        { text: t('Cancel'), style: 'cancel' },
        {
          text: t('Exit'),
          style: 'destructive',
          onPress: () => {
            // Add your exit logic here
            navigation.replace('Login'); // Example: Redirect to Login page
          },
        },
      ]
    );
  };

  // Method for handling "Settings"
  const handleSettings = () => {
    navigation.navigate('Settings'); // Redirect to the Settings page
  };

  return (
    <SC.SafeAreaViewS>
      <TopBar onExit={handleExit} onSettings={handleSettings} />
      <FirstSection/>
      <SecondSection/>
      <SC.SmallContainer>
        <Clients/>
        <Booking/>
      </SC.SmallContainer>
      <SC.Goods><SC.GoodsText>{t('goods')}</SC.GoodsText></SC.Goods>
    </SC.SafeAreaViewS>
  );
};



export default MainAdminPage;