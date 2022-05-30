import styled from 'styled-components/native';

export const Overlay = styled.Modal.attrs(props => ({
  ...props,
  animationType: 'fade',
  transparent: true,
}))``;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const Spinner = styled.ActivityIndicator.attrs(props => ({
  ...props,
  size: 'large',
  color: '#fff',
}))``;
