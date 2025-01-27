import styled from 'styled-components/native';

// Main Container
export const Container = styled.ScrollView`
  flex: 1;
  padding: 20px;
  background-color: #f9f9f9;
`;
export const BackButton = styled.TouchableOpacity`
  border: none;
  cursor: pointer;
  width:auto;
  align-self:flex-end;
 `;
// Title for the Page
export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #bf9f00;
  text-align: center;
  margin-bottom: 20px;
`;

// Section Title
export const SectionTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  margin-top: 20px;
`;

// Card
export const Card = styled.View`
  background-color: #fff;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

// Card Content
export const CardContent = styled.View`
  flex-direction: column;
`;

// Card Text
export const CardText = styled.Text`
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
`;