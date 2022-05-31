import React, {FC} from 'react';

import type {LoadingOverlayProps} from './helpers/type';
import * as S from './styles';

const LoadingOverlay: FC<LoadingOverlayProps> = ({visible = true, testID}) => {
  return (
    <S.Overlay visible={visible} testID={testID}>
      <S.Container>
        <S.Spinner />
      </S.Container>
    </S.Overlay>
  );
};

export default LoadingOverlay;
