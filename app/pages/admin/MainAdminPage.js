import React from 'react';
import * as SC from './adminStyling';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import Clients from './Clients';
import Booking from './Booking';

const MainAdminPage = () => {
  return (
    <SC.SafeAreaViewS>
      <FirstSection/>
      <SecondSection/>
      <SC.SmallContainer>
        <Clients/>
        <Booking/>
      </SC.SmallContainer>
      <SC.Goods><SC.GoodsText>Goods</SC.GoodsText></SC.Goods>

    </SC.SafeAreaViewS>
  );
};



export default MainAdminPage;