import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import useGeoPermission from '@contexts/geoPermission';
import LoadingOverlay from '@components/LoadingOverlay';

import * as S from './styles';

const RequestLocation = () => {
  const navigation = useNavigation();
  const {requestPermission, permission} = useGeoPermission();
  const isLoading = permission === 'pending';

  useEffect(() => {
    if (permission === 'granted') {
      navigation.navigate('Home');
    }
  }, [permission, navigation]);

  return (
    <>
      <LoadingOverlay visible={isLoading} />
      <S.Container>
        <S.Content>
          <S.DescriptionText>
            Para continuar precisamos saber sua localização
          </S.DescriptionText>

          <S.SubmitButton onPress={requestPermission}>
            <S.SubmitButtonText>Habilitar Geolocalização</S.SubmitButtonText>
          </S.SubmitButton>
        </S.Content>
      </S.Container>
    </>
  );
};

export default RequestLocation;
