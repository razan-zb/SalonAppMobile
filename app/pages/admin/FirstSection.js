import React from 'react';
import * as SC from './adminStyling';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

const FirstSection = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const appointments = [
    { name: 'Razan Zbedy', time: '18:00' },
    { name: 'Ali Ahmad', time: '19:00' },
    { name: 'Sara Omar', time: '20:30' },
    { name: 'John Doe', time: '21:15' },
    { name: 'Alaa kaxrem', time: '17:00' },
    { name: 'Hana Awed', time: '22:30' },
    { name: 'John Dock', time: '21:45' },
    { name: 'Ali Ahmad', time: '19:00' },
    { name: 'Sara Omar', time: '20:30' },
    { name: 'John Doe', time: '21:15' },
    { name: 'Amera asma', time: '13:00' },

  ];

  const timeToMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const sortedAppointments = [...appointments].sort(
    (a, b) => timeToMinutes(a.time) - timeToMinutes(b.time)
  );


  const generateShade = (index, total) => {
    const lightenFactor = (total - index) / total;
    return `rgba(191, 159, 50, ${lightenFactor})`;
  };

  const handleArrowClick = () => {
    navigation.navigate('FirstSectionList');
  };
  const handlePressAppointment = (appointment) => {
    navigation.navigate('FirstSectionOneBox', {
      time: appointment.time,
      clientName: appointment.name,
    });
  };
  return (
    <SC.FirstSectionContainer>
      <SC.FirstSectionText>{t('scheduleForToday')}</SC.FirstSectionText>
      <SC.FirstSectionContainer1>
        {sortedAppointments.slice(0,3).map((appointment, index) => (
          <SC.MiniBoxContainer
            key={index}
            bgColor={generateShade(index, sortedAppointments.length)}
            onPress={() => handlePressAppointment(appointment)}
          >
            <SC.MiniBoxText>{appointment.name}</SC.MiniBoxText>
            <SC.MiniBoxText>{appointment.time}</SC.MiniBoxText>
          </SC.MiniBoxContainer>
        ))}
        <SC.ArrowButton onPress={handleArrowClick}>
          <Icon name="arrow-down" size={20} color="#fff" />
        </SC.ArrowButton>
      </SC.FirstSectionContainer1>
    </SC.FirstSectionContainer>
  );
};



export default FirstSection;