import React from 'react';
import {StatusBar} from 'react-native';

import useGeoPermission from '@contexts/geoPermission';

import * as S from './styles';

const RequestLocation = () => {
  const {requestPermission, permission} = useGeoPermission();
  const isLoading = permission === 'pending';

  return (
    <S.Container>
      <S.Content>
        <StatusBar translucent animated barStyle="light-content" />
        <S.DescriptionText>
          Para continuar precisamos saber sua localização
        </S.DescriptionText>

        {isLoading ? (
          <S.LoadingSpinner />
        ) : (
          <S.SubmitButton onPress={requestPermission}>
            <S.SubmitButtonText>Habilitar Geolocalização</S.SubmitButtonText>
          </S.SubmitButton>
        )}
      </S.Content>
    </S.Container>
  );
};

export default RequestLocation;
