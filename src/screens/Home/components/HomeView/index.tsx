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
  <S.Content>
    <S.Header>
      <S.ColumnWrapper>
        <S.CityName>{name}</S.CityName>
        <S.DateText>{dateFormatted}</S.DateText>
      </S.ColumnWrapper>
      <TouchableOpacity onPress={onPressRefresh}>
        <S.RefreshIcon />
      </TouchableOpacity>
    </S.Header>

    <S.Body>
      <S.ColumnWrapper>
        <S.CurrentWeatherIcon source={icon} />
        <S.CurrentTemp>{currentTemp}°</S.CurrentTemp>
      </S.ColumnWrapper>

      <S.MinMaxTempWrapper>
        <S.MinMaxTemp>{maxTemp}°C</S.MinMaxTemp>
        <S.MinMaxTempSeparator />
        <S.MinMaxTemp>{minTemp}°C</S.MinMaxTemp>
      </S.MinMaxTempWrapper>
    </S.Body>

    <S.Footer>
      <S.FooterItem>
        <S.FooterItemImage source={raindropsImage} />
        <S.FooterItemTitle>Precipitação</S.FooterItemTitle>
        <S.FooterItemDescription>{precipitation}%</S.FooterItemDescription>
      </S.FooterItem>
      <S.FooterItem>
        <S.FooterItemImage source={humidityImage} />
        <S.FooterItemTitle>Umidade</S.FooterItemTitle>
        <S.FooterItemDescription>{humidity}%</S.FooterItemDescription>
      </S.FooterItem>
      <S.FooterItem>
        <S.FooterItemImage source={windImage} />
        <S.FooterItemTitle>Vento</S.FooterItemTitle>
        <S.FooterItemDescription>{windSpeedKM} km/h</S.FooterItemDescription>
      </S.FooterItem>
    </S.Footer>
  </S.Content>
);

export default HomeView;
