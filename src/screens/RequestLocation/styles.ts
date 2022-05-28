import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs(props => ({
  ...props,
  colors: ['#541111', '#000'],
}))`
  flex: 1;
  justify-content: center;
`;

export const Content = styled.SafeAreaView`
  flex: 1;
  margin: 60% 0 40%;
  justify-content: space-between;
`;

export const DescriptionText = styled.Text`
  font-family: 'Roboto';
  font-size: 24px;
  color: rgba(255, 255, 255, 0.9);
  padding: 0 24px;
`;

export const SubmitButton = styled.TouchableOpacity`
  margin: 0 24px 32px;
  height: 60px;
  justify-content: center;
  border-color: #fff;
  border-width: 1px;
  border-radius: 36px;
`;

export const SubmitButtonText = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 16px;
  color: #fff;
  text-align: center;
`;

export const LoadingSpinner = styled.ActivityIndicator.attrs(props => ({
  ...props,
  size: 'large',
  animating: true,
  color: '#fff',
}))`
  margin: 0 24px 32px;
`;
