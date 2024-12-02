/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import * as SC from './mainPageStyling';

const LoginScreen = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleLoginPress = () => {
    alert('Login button pressed');
  };

  return (
    <SC.LoginContainer>
      <SC.BackArrow
        onPress={handleBackPress}>
        <Icon name="arrow-back" size={30} color="#6C400A" />
      </SC.BackArrow>

      <SC.LogInTitle>Welcome Back</SC.LogInTitle>
      <SC.InnerContainer>
        <View style={{ marginBottom: 20 }}>
          <SC.LogInLabels>User Name</SC.LogInLabels>
          <SC.InputBox
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <View style={{ marginBottom: 20 }}>
          <SC.LogInLabels>Password</SC.LogInLabels>
          <SC.InputBox
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!passwordVisible}
          />
        </View>

        <TouchableOpacity onPress={togglePasswordVisibility} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <SC.Checkbox checked={passwordVisible} />
          <SC.ShownPassword>{passwordVisible ? 'Hide Password' : 'Show Password'}</SC.ShownPassword>
        </TouchableOpacity>
      </SC.InnerContainer>

      {/* Login Button */}
      <TouchableOpacity onPress={handleLoginPress} style={{ marginTop: 20 }}>
        <SC.LoginButton>
          <SC.ButtonText>Login</SC.ButtonText>
        </SC.LoginButton>
      </TouchableOpacity>
    </SC.LoginContainer>
  );
};

export default LoginScreen;