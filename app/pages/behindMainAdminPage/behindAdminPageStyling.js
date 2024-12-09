import styled from 'styled-components/native';

// Main Container
export const ClientsListContainer = styled.View`
  flex: 1;
  background-color: #FFE0BA;
`;

// Search Bar Container
export const SearchBarContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #F6C992;
  border-radius: 10px;
  margin: 15px;
  padding: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

// Client Name Container
export const ClientNameContainer = styled.View`
  background-color: #ECAE66;
  padding: 15px;
  margin: 5px 15px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

// Client Name Text
export const ClientName = styled.Text`
  font-size: 18px;
  color: #935B16;
  text-align:center;
  font-weight: bold;

`;

// Plus Button
export const PlusButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: #CB8632;
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
    color:#fff;

`