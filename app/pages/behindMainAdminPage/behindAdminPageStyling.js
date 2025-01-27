import styled from 'styled-components/native';
import { Picker } from '@react-native-picker/picker';

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
  width:auto;
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

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #fdfcf4;
`;



export const Title2 = styled.Text`
  font-size: 24px;
  color: #BF9F00;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const DetailContainer = styled.View`
  margin-top: 10px;
`;
export const DetailContainer2 = styled.View`
  margin-top: 10px;
  gap:5px;
`;

export const Label2 = styled.Text`
  font-size: 16px;
  color: #333;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Value2 = styled.TextInput`
  font-size: 16px;
  color: #555;
  margin-bottom: 15px;
  background-color:#fff;
  border: 1px ;

`;

export const Container3 = styled.View`
  flex: 1;
  background-color: #fdfcf4;
  padding: 20px;
`;



export const Title3 = styled.Text`
  font-size: 24px;
  color: #bf9f00;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

export const CalendarContainer = styled.View`
  margin-bottom: 20px;
`;

export const SelectedDate = styled.Text`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
`;

export const SectionTitle3 = styled.Text`
  font-size: 20px;
  color: #bf9f00;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const TimeSlot = styled.TouchableOpacity`
  flex: 1;
  margin: 5px;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const TimeSlotText = styled.Text`
  font-size: 16px;
  color: #333;
  font-weight: bold;
  text-align: center;
`;


export const Card = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
`;

export const CardContent = styled.View`
  flex-direction: column;
`;

export const ClientName3 = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #1d1d1b;
`;

export const DateTime = styled.Text`
  font-size: 14px;
  color: #666;
  margin-top: 5px;
`;

export const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const TextArea = styled.TextInput`
  font-size: 16px;
  color: #333;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  text-align-vertical: top;
`;

export const TextArea2 = styled.TextInput`
  font-size: 16px;
  color: #333;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  text-align-vertical: top;
  height:100px;
`;

export const SaveButton = styled.TouchableOpacity`
  background-color: #bf9f00;
  padding: 15px;
  border-radius: 8px;
  align-items: center;
`;
export const SelectContainer = styled.View`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 15px;
  width: 200px;

`;

// Directly style the Picker component
export const StyledPicker = styled(Picker)`
  color: #333; /* Text color */
  font-size: 16px;
  height: 50px;
  width: 100%;
`;

export const Button4 = styled.TouchableOpacity`
  background-color: #BF9F00;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top:10px;
`;