import styled from 'styled-components/native';

// Main Container
export const ClientsListContainer = styled.View`
  flex: 1;
  background-color: #fff;
`;

// Search Bar Container
export const SearchBarContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #BF9F00;
  border-radius: 10px;
  margin: 15px;
  padding: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

// Client Name Container
export const ClientNameContainer = styled.View`
  background-color: #BF9F00;
  padding: 15px;
  margin: 5px 15px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

// Client Name Text
export const ClientName = styled.Text`
  font-size: 18px;
  color: #1D1D1B;
  text-align:center;
  font-weight: bold;

`;

// Plus Button
export const PlusButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: #BF9F00;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
`;

export const SearchInput = styled.TextInput`
    flex:1;
    margin-left:10px;
    font-size:18px;
    color:#1D1D1B;

`;

export const OneClientContainer = styled.FlatList`
  padding: 20px;
  background-color: #fdfcf4;
  color: #333;
  font-family: 'Arial, sans-serif';
  flex: 1;

`;

export const MainOneCliesntContainer = styled.View`
  flex: 1;

`;

// Back Button
export const BackButton = styled.TouchableOpacity`
  border: none;
  cursor: pointer;
  margin-bottom: 20px;
  width:100px;
  align-self:flex-end;


  `;

// Titles
export const Title = styled.Text`
  font-size: 24px;
  color: #bf9f00;
  margin-bottom: 20px;
`;

export const SectionTitle = styled.Text`
  font-size: 24px;
  color: #bf9f00;
  margin-top: 30px;
  margin-bottom: 10px;
`;

// Client Details
export const ClientDetail = styled.View`
  display: flex;
  align-items: center;
  height:70px;
  flex-direction:row;
`;

export const Label = styled.Text`
  font-weight: bold;
  margin-right: 10px;
  font-size: 20px;

`;

export const Value = styled.Text`
  font-size: 16px;
  flex: 1;
  padding: 5px;
  background-color: #fff;
  border-radius: 5px;
  width: 200px;
  color: #333;
`;

// Appointments
export const AppointmentList = styled.FlatList`
  margin-top: 10px;
`;

export const Appointment = styled.View`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  border: 2px solid #ddd;;

`;

export const AppointmentDate = styled.TextInput`
  font-weight: bold;
  color: #333;
`;

export const AppointmentNotes = styled.TextInput`
  font-size: 14px;
  color: #666;
`;

export const Input = styled.TextInput`
  flex: 1;
  padding: 8px;
  font-size: 16px;
  color: #1D1D1B;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  width:200px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  align-self:center;
  margin-bottom:10px;
  gap:10px;

`;

export const Button = styled.TouchableOpacity`
  background-color: #BF9F00;
  padding: 10px 20px;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  text-align: center;
`;