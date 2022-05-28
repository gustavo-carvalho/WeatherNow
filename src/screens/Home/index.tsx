import React from 'react';

import useGeoPosition from '@hooks/useGeoPosition';

import * as S from './styles';

const Home = () => {
  const {state} = useGeoPosition();

  return <S.Container></S.Container>;
};

export default Home;
