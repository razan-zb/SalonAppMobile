import React from 'react';
import * as SC from './adminStyling';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import Clients from './Clients';
import Booking from './Booking';
import TopBar from './TopBar';
import { useTranslation } from 'react-i18next';

const MainAdminPage = () => {
  const { t } = useTranslation();

  return (
    <SC.SafeAreaViewS>
      <TopBar/>
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