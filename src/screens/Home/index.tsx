import React, {useMemo} from 'react';
import {TouchableOpacity} from 'react-native';

import raindropsImage from '@assets/raindrops.png';
import humidityImage from '@assets/humidity.png';
import windImage from '@assets/wind.png';
import useGeoPosition from '@hooks/useGeoPosition';

import parseWeatherData from './utils/parseWeatherData';
import useFetchWeatherData from './hooks/useFetchWeatherData';
import * as S from './styles';

const Home = () => {
  const {state, getPosition} = useGeoPosition();
  const {data} = useFetchWeatherData(state.position);

  const dateFormatted = useMemo(
    () =>
      new Date().toLocaleDateString('pt-BR', {
        day: '2-digit',
        weekday: 'long',
        month: 'long',
      }),
    [],
  );

  const formattedData = useMemo(
    () => (data ? parseWeatherData(data) : null),
    [data],
  );

  if (!formattedData) return null;

  return (
    <S.Container colors={formattedData.gradientColors}>
      <S.Content>
        <S.Header>
          <S.ColumnWrapper>
            <S.CityName>{formattedData.name}</S.CityName>
            <S.DateText>{dateFormatted}</S.DateText>
          </S.ColumnWrapper>
          <TouchableOpacity onPress={getPosition}>
            <S.RefreshIcon />
          </TouchableOpacity>
        </S.Header>

        <S.Body>
          <S.ColumnWrapper>
            <S.CurrentWeatherIcon source={formattedData.icon} />
            <S.CurrentTemp>{formattedData.currentTemp}°</S.CurrentTemp>
          </S.ColumnWrapper>

          <S.MinMaxTempWrapper>
            <S.MinMaxTemp>{formattedData.maxTemp}°C</S.MinMaxTemp>
            <S.MinMaxTempSeparator />
            <S.MinMaxTemp>{formattedData.minTemp}°C</S.MinMaxTemp>
          </S.MinMaxTempWrapper>
        </S.Body>

        <S.Footer>
          <S.FooterItem>
            <S.FooterItemImage source={raindropsImage} />
            <S.FooterItemTitle>Precipitação</S.FooterItemTitle>
            <S.FooterItemDescription>
              {formattedData.precipitation}%
            </S.FooterItemDescription>
          </S.FooterItem>
          <S.FooterItem>
            <S.FooterItemImage source={humidityImage} />
            <S.FooterItemTitle>Umidade</S.FooterItemTitle>
            <S.FooterItemDescription>
              {formattedData.humidity}%
            </S.FooterItemDescription>
          </S.FooterItem>
          <S.FooterItem>
            <S.FooterItemImage source={windImage} />
            <S.FooterItemTitle>Vento</S.FooterItemTitle>
            <S.FooterItemDescription>
              {formattedData.windSpeedKM} km/h
            </S.FooterItemDescription>
          </S.FooterItem>
        </S.Footer>
      </S.Content>
    </S.Container>
  );
};

export default Home;
