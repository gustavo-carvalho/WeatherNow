import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';

import raindropsImage from '@assets/raindrops.png';
import humidityImage from '@assets/humidity.png';
import windImage from '@assets/wind.png';
import type {HomeViewProps} from '@screens/Home/helpers/types';

import * as S from './styles';

const HomeView: FC<HomeViewProps> = ({
  currentTemp,
  humidity,
  icon,
  maxTemp,
  minTemp,
  precipitation,
  windSpeedKM,
  dateFormatted,
  name,
  onPressRefresh,
}) => (
  <S.Content testID="home-view">
    <S.Header>
      <S.ColumnWrapper>
        <S.CityName testID="name">{name}</S.CityName>
        <S.DateText testID="date-formatted">{dateFormatted}</S.DateText>
      </S.ColumnWrapper>
      <TouchableOpacity testID="refresh-button" onPress={onPressRefresh}>
        <S.RefreshIcon />
      </TouchableOpacity>
    </S.Header>

    <S.Body>
      <S.ColumnWrapper>
        <S.CurrentWeatherIcon source={icon} />
        <S.CurrentTemp testID="current-temp">{currentTemp}°</S.CurrentTemp>
      </S.ColumnWrapper>

      <S.MinMaxTempWrapper>
        <S.MinMaxTemp testID="max-temp">{maxTemp}°C</S.MinMaxTemp>
        <S.MinMaxTempSeparator />
        <S.MinMaxTemp testID="min-temp">{minTemp}°C</S.MinMaxTemp>
      </S.MinMaxTempWrapper>
    </S.Body>

    <S.Footer>
      <S.FooterItem>
        <S.FooterItemImage source={raindropsImage} />
        <S.FooterItemTitle>Precipitação</S.FooterItemTitle>
        <S.FooterItemDescription testID="precipitation">
          {precipitation}%
        </S.FooterItemDescription>
      </S.FooterItem>
      <S.FooterItem>
        <S.FooterItemImage source={humidityImage} />
        <S.FooterItemTitle>Umidade</S.FooterItemTitle>
        <S.FooterItemDescription testID="humidity">
          {humidity}%
        </S.FooterItemDescription>
      </S.FooterItem>
      <S.FooterItem>
        <S.FooterItemImage source={windImage} />
        <S.FooterItemTitle>Vento</S.FooterItemTitle>
        <S.FooterItemDescription testID="wind-speed-km">
          {windSpeedKM} km/h
        </S.FooterItemDescription>
      </S.FooterItem>
    </S.Footer>
  </S.Content>
);

export default HomeView;
