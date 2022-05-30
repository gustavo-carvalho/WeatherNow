import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs(props => ({
  ...props,
  colors: props.colors ?? ['#3f64a4', '#ceaca7'],
}))`
  flex: 1;
  justify-content: center;
`;
