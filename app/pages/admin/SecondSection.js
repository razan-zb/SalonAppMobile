import React from 'react';
import * as SC from './adminStyling';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';

const SecondSection = () => {
  const totalClients = 25;
  const totalEarnings = 1500;
  const { t } = useTranslation();

  const clients = [
    { name: 'Amera Asma', birthday: '2024-12-05' },
    { name: 'Ali Ahmad', birthday: '2024-12-06' },
    { name: 'Sara Omar', birthday: '2024-12-05' },
  ];

  const handleBirthdayPress = () => {
    // eslint-disable-next-line no-alert
    alert(
      birthdaysToday.length
        ? `Today's birthdays:\n${birthdaysToday.map((c) => c.name).join(', ')}`
        : 'No birthdays today!'
    );
  };

  const today = new Date().toISOString().slice(0, 10); // تاريخ اليوم بصيغة YYYY-MM-DD
  const birthdaysToday = clients.filter((client) => client.birthday === today);
  return (
    <SC.SecondSectionContainer>
        <SC.Title>{t('weeklySummary')}</SC.Title>
        <SC.Container1>
            <Icon name="woman" size={50} color="#935B16" />
           <SC.StatText>{t('totalClients')}: {totalClients}</SC.StatText>
        </SC.Container1>
        <SC.Container1>
          <Icon name="balloon" size={50} color="#935B16" onPress={handleBirthdayPress} />
          <SC.StatText>{t('Birthdays Today')}: {birthdaysToday.length}</SC.StatText>
        </SC.Container1>
        <SC.Container1>
          <Icon name="cash-outline" size={50} color="#935B16"/>
          <SC.StatText>{t('totalEarnings')}: {totalEarnings} {t('currency')}</SC.StatText>
        </SC.Container1>
    </SC.SecondSectionContainer>
  );
};


export default SecondSection;
