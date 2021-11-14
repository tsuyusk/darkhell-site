import React from 'react';

import * as S from '@/styles/components/Footer';

export const Footer: React.FC = () => {
  return (
    <S.Container>
      <div>
        <nav>
          <a href="#">Início</a>
          <a href="#">Sobre nós</a>

          <img src="/logo.jpg" alt="Dark Hell" />

          <a href="#">Loja</a>
          <a href="#">Notícias</a>
        </nav>

        <div>
          <nav>
            <a href="#">
              <img src="/icons/youtube.png" alt="Youtube" />
            </a>

            <a href="#">
              <img src="/icons/instagram.png" alt="Instagram" />
            </a>

            <a href="#">
              <img src="/icons/discord.png" alt="Discord" />
            </a>
          </nav>

          <p>© Copyright 2021 - Dark Hell</p>
        </div>
      </div>
    </S.Container>
  );
};
