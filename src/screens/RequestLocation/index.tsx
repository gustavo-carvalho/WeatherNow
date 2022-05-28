import React from 'react';
import {StatusBar} from 'react-native';

import * as S from './styles';

const RequestLocation = () => {
  return (
    <S.Container>
      <S.Content>
        <StatusBar translucent animated barStyle="light-content" />
        <S.DescriptionText>
          Para continuar precisamos saber sua localização
        </S.DescriptionText>

        <S.SubmitButton>
          <S.SubmitButtonText>Habilitar Geolocalização</S.SubmitButtonText>
        </S.SubmitButton>
      </S.Content>
    </S.Container>
  );
};

export default RequestLocation;
