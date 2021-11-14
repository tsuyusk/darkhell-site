import React from 'react';

import { Content } from '@/components/Content';
import * as S from '@/styles/components/Header';

interface HeaderProps {
  leftLinks?: React.ReactNode;
  rightLinks?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ leftLinks, rightLinks }) => {
  return (
    <S.Container>
      <Content>
        <div>{leftLinks}</div>

        <img src="/logo.jpg" alt="Dark Hell" />

        <div>{rightLinks}</div>
      </Content>
    </S.Container>
  );
};
