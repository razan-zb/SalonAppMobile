import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './pages/welcomeLS/MainScreen';
import LoginScreen from './pages/welcomeLS/LoginScreen';
import SignUpScreen from './pages/welcomeLS/SignUpScreen';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
        </Stack.Navigator>
      </NavigationContainer>
    </I18nextProvider>
  );
}

export default App;