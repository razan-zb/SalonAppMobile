/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as SC from './mainPageStyling';
import { useTranslation } from 'react-i18next';
import {  Button } from 'react-native';
import { I18nManager } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';

const LoginScreen = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { t, i18n } = useTranslation();

  const changeLanguage = async (lng) => {
    await AsyncStorage.setItem('language', lng);
    i18n.changeLanguage(lng);

    const isRTL = lng === 'ar' || lng === 'he';
    if (I18nManager.isRTL !== isRTL) {
      I18nManager.forceRTL(isRTL);
      setTimeout(() => {
        RNRestart.Restart();
      }, 0);
    }

  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleLoginPress = () => {
  };

  return (
    <SC.LoginContainer>
      <SC.BackArrow
        onPress={handleBackPress}>
        <Icon name="arrow-back" size={30} color="#6C400A" />
      </SC.BackArrow>

      <SC.LogInTitle>{t('welcome')}</SC.LogInTitle>
      <SC.InnerContainer>
        <View style={{ marginBottom: 20 }}>
          <SC.LogInLabels>{t('userName')}</SC.LogInLabels>
          <SC.InputBox
            placeholder={t('enterYourEmail')}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <View style={{ marginBottom: 20 }}>
          <SC.LogInLabels>{t('password')}</SC.LogInLabels>
          <SC.InputBox
            placeholder={t('enterYourPassword')}
            value={password}
            onChangeText={setPassword}
            keyboardType="password"
            secureTextEntry={!passwordVisible}
          />
        </View>

        <TouchableOpacity onPress={togglePasswordVisibility} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <SC.Checkbox checked={passwordVisible} />
          <SC.ShownPassword>{passwordVisible ? t('hidePassword') : t('showPassword')}</SC.ShownPassword>
        </TouchableOpacity>
      </SC.InnerContainer>
      <Button title="English" onPress={() => changeLanguage('en')} />
      <Button title="العربية" onPress={() => changeLanguage('ar')} />
      <Button title="עברית" onPress={() => changeLanguage('he')} />

      <SC.LoginButton  onPress={() => navigation.navigate('AdminMainPage')}>
        <SC.ButtonText>{t('login')}</SC.ButtonText>
      </SC.LoginButton>
    </SC.LoginContainer>
  );
};

export default LoginScreen;