import React, { useState } from 'react';
import { FlatList, Alert } from 'react-native';
import * as SC from './behindAdminPageStyling'; // Import your styled components
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import CalendarPicker from 'react-native-calendar-picker'; // A library for the calendar
import { format } from 'date-fns';

const BookingCalendar = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  // State for selected date and available time slots
  const [selectedDate, setSelectedDate] = useState(null);
  const [timeSlots, setTimeSlots] = useState([
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '12:00 PM',
    '12:30 PM',
    '01:00 PM',
    '04:30 PM',
    '05:00 PM',
    '05:30 PM',
    '06:00 PM',
    '06:30 PM',
  ]);

  // Handle date selection
  const onDateChange = (date) => {
    const formattedDate = format(date, 'yyyy-MM-dd'); // Format as '2025-01-27'
    setSelectedDate(formattedDate);
  };

  // Handle slot selection
  const handleSlotSelection = (time) => {
    if (!selectedDate) {
      Alert.alert(t('Error'), t('Please select a date first.'));
      return;
    }
    navigation.navigate('BookingForOne', { date: selectedDate, time });
  };

  return (
    <SC.Container3>
      {/* Back Button */}
      <SC.BackButton onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={30} color="#BF9F00"/>
      </SC.BackButton>

      {/* Page Title */}
      <SC.Title3>{t('Book Appointment')}</SC.Title3>

      {/* Calendar */}
      <SC.CalendarContainer>
        <CalendarPicker
          onDateChange={onDateChange}
          todayBackgroundColor="#BF9F00"
          selectedDayColor="#BF9F00"
          selectedDayTextColor="#FFF"
        />
      </SC.CalendarContainer>

      {/* Selected Date */}
      {selectedDate && (
        <SC.SelectedDate>{`${t('Selected Date')}: ${selectedDate}`}</SC.SelectedDate>
      )}

      {/* Available Time Slots */}
      <SC.SectionTitle3>{t('Available Slots')}</SC.SectionTitle3>
      <FlatList
        data={timeSlots}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        renderItem={({ item }) => (
          <SC.TimeSlot onPress={() => handleSlotSelection(item)}>
            <SC.TimeSlotText>{item}</SC.TimeSlotText>
          </SC.TimeSlot>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SC.Container3>
  );
};

export default BookingCalendar;