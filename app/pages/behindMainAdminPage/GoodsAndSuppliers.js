import React from 'react';
import { FlatList } from 'react-native';
import * as SC from './goodsAndSuppliersStyling';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const GoodsAndSuppliers = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  // Example data for suppliers
  const suppliers = [
    { id: 1, name: 'BeautyCo', phone: '123-456-7890', email: 'contact@beautyco.com' },
    { id: 2, name: 'ColorPro', phone: '987-654-3210', email: 'sales@colorpro.com' },
  ];

  // Example data for goods
  const goods = [
    { id: 1, name: 'Shampoo', quantity: 50, price: '$5', supplier: 'BeautyCo', reorderLevel: 20 },
    { id: 2, name: 'Hair Dye', quantity: 15, price: '$8', supplier: 'ColorPro', reorderLevel: 10 },
    { id: 3, name: 'Conditioner', quantity: 30, price: '$6', supplier: 'BeautyCo', reorderLevel: 15 },
  ];


  return (
    <SC.Container>
      <SC.BackButton onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={30} color="#BF9F00"/>
      </SC.BackButton>
      <SC.Title>{t('Suppliers and Goods')}</SC.Title>

      {/* Suppliers List */}
      <SC.SectionTitle>{t('Suppliers List')}</SC.SectionTitle>
      <FlatList
        data={suppliers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <SC.Card>
            <SC.CardContent>
              <SC.CardText>{t('Name')}: {item.name}</SC.CardText>
              <SC.CardText>{t('Phone')}: {item.phone}</SC.CardText>
              <SC.CardText>{t('Email')}: {item.email}</SC.CardText>
            </SC.CardContent>
          </SC.Card>
        )}
      />

      {/* Goods List */}
      <SC.SectionTitle>{t('Goods List')}</SC.SectionTitle>
      <FlatList
        data={goods}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <SC.Card>
            <SC.CardContent>
              <SC.CardText>{t('Name')}: {item.name}</SC.CardText>
              <SC.CardText>{t('Quantity')}: {item.quantity}</SC.CardText>
              <SC.CardText>{t('Price')}: {item.price}</SC.CardText>
              <SC.CardText>{t('Supplier')}: {item.supplier}</SC.CardText>
              <SC.CardText>{t('Reorder Level')}: {item.reorderLevel}</SC.CardText>
            </SC.CardContent>
          </SC.Card>
        )}
      />
    </SC.Container>
  );
};
export default GoodsAndSuppliers;