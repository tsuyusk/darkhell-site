import React from 'react';

import { Content } from '@/components/Content';
import * as S from '@/styles/components/Header';

export const Header: React.FC = () => {
  return (
    <S.Container>
      <Content>
        <div>
          <a href="#">Início</a>
          <a href="#">Sobre Nós</a>
        </div>

        <img src="/logo.jpg" alt="Dark Hell" />

        <div>
          <a href="#">Loja</a>
          <a href="#">Notícias</a>
        </div>
      </Content>
    </S.Container>
  );
};
