import React, { useCallback, useRef } from 'react';
import * as Icons from 'react-icons/fi';

import * as S from '@/styles/components/Slider';

interface SliderProps {
  slidedScrollLeftPerClick?: number;
}

export const Slider: React.FC<SliderProps> = ({
  slidedScrollLeftPerClick = 64,
  children,
}) => {
  const itemsDiv = useRef<HTMLDivElement>(null);

  const handleScrollLeft = useCallback(() => {
    if (!itemsDiv.current) return;

    itemsDiv.current.scrollLeft -= slidedScrollLeftPerClick;
  }, [slidedScrollLeftPerClick]);

  const handleScrollRight = useCallback(() => {
    if (!itemsDiv.current) return;

    itemsDiv.current.scrollLeft += slidedScrollLeftPerClick;
  }, [slidedScrollLeftPerClick]);

  return (
    <S.Container>
      <S.SliderButtons>
        <button onClick={handleScrollLeft}>
          <Icons.FiArrowLeft size={36} />
        </button>

        <button onClick={handleScrollRight}>
          <Icons.FiArrowRight size={36} />
        </button>
      </S.SliderButtons>

      <S.Items ref={itemsDiv}>{children}</S.Items>
    </S.Container>
  );
};
