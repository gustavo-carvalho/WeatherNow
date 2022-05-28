import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs(props => ({
  ...props,
  colors: ['#541111', '#000'],
}))`
  flex: 1;
  justify-content: center;
`;
