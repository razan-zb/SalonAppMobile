import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './pages/welcomeLS/MainScreen';
import LoginScreen from './pages/welcomeLS/LoginScreen';
import SignUpScreen from './pages/welcomeLS/SignUpScreen';
import MainAdminPage from './pages/admin/MainAdminPage';
import ClientsList from './pages/behindMainAdminPage/ClientsList';
import OneClient from './pages/behindMainAdminPage/OneClient'
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BookingForOne from './pages/behindMainAdminPage/BookingForOne';
import BookingCalendar from './pages/behindMainAdminPage/BookingCalendar';
import FirstSectionList from './pages/behindMainAdminPage/FirstSectionList';
import FirstSectionOneBox from './pages/behindMainAdminPage/FirstSectionOneBox';
import GoodsAndSuppliers from './pages/behindMainAdminPage/GoodsAndSuppliers';

const Stack = createStackNavigator();

function App() {

  const changeLanguage = async (lng) => {
    try {
      await AsyncStorage.setItem('language', lng);
      i18n.changeLanguage(lng);
    } catch (error) {
      console.error('Error saving language:', error);
    }
  };

  // Function to load persisted language on app start
  const loadLanguage = async () => {
    try {
      const savedLanguage = await AsyncStorage.getItem('language');
      if (savedLanguage) {
        i18n.changeLanguage(savedLanguage);
      }
    } catch (error) {
      console.error('Error loading language:', error);
    }
  };

  // Use useEffect to load language on app start
  useEffect(() => {
    loadLanguage();
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* Pass changeLanguage to screens if needed */}
          <Stack.Screen name="Main">
            {(props) => <MainScreen {...props} changeLanguage={changeLanguage} />}
          </Stack.Screen>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="AdminMainPage" component={MainAdminPage} />
          <Stack.Screen name="ClientsList" component={ClientsList} />
          <Stack.Screen name="OneClient" component={OneClient} />
          <Stack.Screen name="BookingForOne" component={BookingForOne} />
          <Stack.Screen name="BookingCalendar" component={BookingCalendar} />
          <Stack.Screen name="FirstSectionList" component={FirstSectionList} />
          <Stack.Screen name="FirstSectionOneBox" component={FirstSectionOneBox} />
          <Stack.Screen name="GoodsAndSuppliers" component={GoodsAndSuppliers} />

          
        </Stack.Navigator>
      </NavigationContainer>
    </I18nextProvider>
  );
}

export default App;
