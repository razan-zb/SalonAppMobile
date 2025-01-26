import styled from 'styled-components/native';

export const SafeAreaViewS = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color:#fff;


`;

export const FirstSectionText = styled.Text`
    font-size:26px;
    font-weight:bold;
    color: #1D1D1B;
    font-family: cursive;
    margin-top:20px;
`;

export const SmallContainer = styled.View`
    height: 150px;
    width: 90%;
    display:flex;
    flex-direction:row;
    justify-content: space-around;
    align-items: center;
`;

//First Section
export const FirstSectionContainer = styled.View`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  border:#1D1D1B;
  border-radius: 10px; 
  padding: 5px;
  margin: 10px 20px; 
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 
  elevation: 3; 
`;

export const FirstSectionContainer1 = styled.View`
  height: 80px;
  width: 100%; 
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 10px; 
  justify-content: space-between; 
  padding: 0 10px; 
`;

export const ArrowButton = styled.TouchableOpacity`
  position: absolute;
  bottom: -10px;
  right: -10px;
  height: 30px;
  width: 30px;
  border-radius: 25px;
  background-color: #C4A50B;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const MiniBoxContainer = styled.View`
    height: 50px;
    width: 100px;
    background-color: #E6A556;
    border-radius: 10px;
    background-color: ${(props) => props.bgColor || '#E6A556'}; /* Dynamic color */

`;

export const MiniBoxText = styled.Text`
    text-align:center;
    color:white;
    font-weight: bold;
    font-size: 16px;


`;

//Second Section
export const SecondSectionContainer = styled.View`
    height: 300px;
    width: 90%;
    justify-content:center;
    align-items: center;
    margin-top:10px;
`;

export const Container1 = styled.View`
    height: 80px;
    justify-content:center;
    flex-direction: column;
    align-items: center;
    gap:5px;
    

`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #1D1D1B;
  font-family: cursive;


`;


export const StatText = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #1D1D1B;
  font-family: cursive;
  

`;


//Client
export const ClientsContainer = styled.TouchableOpacity`
    height: 100px;
    width: 150px;
    background-color: #1D1D1B;
    justify-content:center;
    align-items: center;
    border-radius:10px;
    shadow-color: #000;
    shadow-opacity: 0.25;
    shadow-radius: 3.84px;
    elevation: 10;
`;

export const ClientText = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: #BF9F00;
  font-family: cursive;

`;

//Booking
export const BookingContainer = styled.View`
    height: 100px;
    width: 150px;
    background-color: #1D1D1B;
    justify-content:center;
    align-items: center;
    border-radius:10px;
    shadow-color: #000;
    shadow-opacity: 0.25;
    shadow-radius: 3.84px;
    elevation: 10;
    

`;

export const BookingText = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: #BF9F00;
  font-family: cursive;


`;

//Goods
export const Goods = styled.View`
    height: 80px;
    background-color: #1D1D1B;
    justify-content:center;
    align-items: center;
    width: 85%;
    border-radius:10px;
    elevation: 10;
`;

export const GoodsText = styled.Text`
    font-size: 24px;
    font-weight: 600;
    color: #BF9F00;
    font-family: cursive;

`;


//Top Bar

export const TopBarContainer = styled.View`
  width: 100%;
  height: 60px;
  background-color: #1D1D1B;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;

export const LogoText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const ButtonSetting = styled.TouchableOpacity`
  padding: 5px;
`;

export const ButtonExit = styled.TouchableOpacity`
  padding: 5px;
`;

export const LogoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top:10px;
`;

export const LogoImage = styled.Image`
  width: 50px;
  height: 50px;
  margin-right: 8px;
`;


