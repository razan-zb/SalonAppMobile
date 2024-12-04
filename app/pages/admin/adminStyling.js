import styled from 'styled-components/native';

export const SafeAreaViewS = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  `;


export const SmallContainer = styled.View`
    height: 150px;
    width: 90%;
    background-color: #F6C992;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items: center;
    margin-top:10px;
    gap:10px;


`;

//First Section
export const FirstSectionContainer = styled.View`
  height: 200px;
  width: 90%;
  background-color: #F6C992;
  align-items: center;
  justify-content: center; 
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-flow: row wrap; 
  padding: 10px;
  gap:5px;
  overflow: hidden;

`;

export const ArrowButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 5px;
  right: 5px;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background-color: #935B16;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const MiniBoxContainer = styled.View`
    height: 40px;
    width: 100px;
    background-color: #E6A556;
    border-radius: 10px;
    background-color: ${(props) => props.bgColor || '#E6A556'}; /* Dynamic color */

`;

export const MiniBoxText = styled.Text`
    text-align:center;
    color:white;
    font-weight: bold;



`;

//Second Section
export const SecondSectionContainer = styled.View`
    height: 300px;
    width: 90%;
    background-color: #F6C992;
    justify-content:center;
    align-items: center;
    margin-top:10px


`;

//Client
export const ClientsContainer = styled.View`
    height: 150px;
    width: 150px;

    background-color: #CB8632;
    justify-content:center;
    align-items: center;

`;

//Booking
export const BookingContainer = styled.View`
    height: 150px;
    background-color: #CB8632;
    justify-content:center;
    align-items: center;
    width: 150px;
`;

//Goods
export const Goods = styled.View`
    height: 80px;
    background-color: #CB8632;
    justify-content:center;
    align-items: center;
    width: 90%;
    margin-top:10px;
`;

export const GoodsText = styled.Text`
    font-size:18px;
    font-weight:bold;
`;




