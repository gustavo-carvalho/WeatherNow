import styled from 'styled-components/native';

import refreshImage from '@assets/refresh.png';

export const Content = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  justify-content: space-between;
  flex-direction: row;
  padding: 16px 24px 0;
`;

export const RefreshIcon = styled.Image.attrs(props => ({
  ...props,
  source: refreshImage,
}))``;

export const ColumnWrapper = styled.View`
  flex: 1;
`;

export const CityName = styled.Text`
  font-family: 'Roboto-Light';
  color: #fff;
  font-size: 24px;
`;

export const DateText = styled(CityName)`
  padding-top: 8px;
  padding-left: 2px;
  font-size: 12px;
`;

export const Body = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 16px 32px 0;
`;

export const CurrentWeatherIcon = styled.Image.attrs(props => ({
  ...props,
  resizeMode: 'contain',
}))`
  max-width: 60px;
  max-height: 60px;
  margin-left: 16px;
`;

export const CurrentTemp = styled.Text`
  font-family: 'Roboto-Medium';
  color: #fff;
  font-size: 128px;
`;

export const MinMaxTempWrapper = styled.View`
  margin-top: 60px;
`;

export const MinMaxTempSeparator = styled.View`
  height: 1px;
  width: 100%;
  margin: 10px 0;
  background: rgba(255, 255, 255, 0.25);
`;

export const MinMaxTemp = styled.Text`
  font-family: 'Roboto-Light';
  color: #fff;
  font-size: 24px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 20px;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 40px;
`;

export const FooterItem = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const FooterItemImage = styled.Image`
  max-height: 24px;
  max-width: 21px;
`;

export const FooterItemTitle = styled.Text`
  font-family: 'Roboto-Light';
  color: #fff;
  font-size: 14px;
  margin-top: 8px;
`;

export const FooterItemDescription = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 14px;
  color: #fff;
`;
