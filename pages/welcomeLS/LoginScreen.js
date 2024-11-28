/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import * as SC from './mainPageStyling';

const LoginScreen = () => {
  // State to manage password visibility and checkbox state
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false); // For checkbox

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Toggle checkbox state
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <SC.LoginContainer>
      <SC.LogInTitle>Welcome Back</SC.LogInTitle>
      <SC.InnerContainer>
        <View style={{ marginBottom: 20 }}>
          <SC.LogInLabels>User Name</SC.LogInLabels>
          <TextInput
            style={SC.inputBox}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <View style={{ marginBottom: 20 }}>
          <SC.LogInLabels>Password</SC.LogInLabels>
          <TextInput
            style={SC.inputBox} // Assuming you have an inputBox style defined
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!passwordVisible}
          />
        </View>

        {/* Show password toggle */}
        <TouchableOpacity onPress={togglePasswordVisibility} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{
            width: 20,
            height: 20,
            borderWidth: 1,
            borderColor: '#6C400A',
            backgroundColor: passwordVisible ? '#6C400A' : 'white', // Checked/unchecked background color
            marginRight: 10,
            borderRadius: 3,
          }} />
          <SC.ShownPassword>{passwordVisible ? 'Hide Password' : 'Show Password'}</SC.ShownPassword>
        </TouchableOpacity>

      </SC.InnerContainer>
    </SC.LoginContainer>
  );
};

export default LoginScreen;