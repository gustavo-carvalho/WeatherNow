import React, {useMemo, useRef} from 'react';

import LoadingOverlay from '@components/LoadingOverlay';
import useGeoPosition from '@hooks/useGeoPosition';

import parseWeatherData from './utils/parseWeatherData';
import useFetchWeatherData from './hooks/useFetchWeatherData';
import HomeView from './components/HomeView';
import * as S from './styles';

const Home = () => {
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
