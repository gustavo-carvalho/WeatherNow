import React, {useEffect, useMemo, useRef} from 'react';
import {Alert} from 'react-native';

import useGeoPermission from '@contexts/geoPermission';
import LoadingOverlay from '@components/LoadingOverlay';
import useGeoPosition from '@hooks/useGeoPosition';

import parseWeatherData from './utils/parseWeatherData';
import useFetchWeatherData from './hooks/useFetchWeatherData';
import HomeView from './components/HomeView';
import * as S from './styles';

const Home = () => {
  const {setPermission} = useGeoPermission();
  const {state, getPosition} = useGeoPosition();
  const {data, status} = useFetchWeatherData(state.position);
  const bgGradient = useRef(['#541111', '#000']);

  const isLoading =
    state.status === 'idle' ||
    state.status === 'loading' ||
    status === 'idle' ||
    status === 'loading';

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

  if (formattedData?.gradientColors) {
    bgGradient.current = formattedData?.gradientColors;
  }

  useEffect(() => {
    if (!state.error) return;

    if (state.error.code === 1) {
      setPermission('idle');
    } else {
      Alert.alert('Ocorreu um ero ao buscar sua localização, tente novamente.');
    }
  }, [setPermission, state.error]);

  return (
    <S.Container testID="home-container" colors={bgGradient.current}>
      <LoadingOverlay
        testID="home-loading-overlay"
        visible={isLoading || !formattedData}
      />
      {formattedData ? (
        <HomeView
          dateFormatted={dateFormatted}
          onPressRefresh={getPosition}
          {...formattedData}
        />
      ) : null}
    </S.Container>
  );
};

export default Home;
