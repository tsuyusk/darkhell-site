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
            <a href="https://discord.gg/QSNheHwEhE" target="_blank">
              <img src="/icons/discord.png" alt="Discord" />
            </a>

            <a href="https://instagram.com/dark.hell.ofc" target="_blank">
              <img src="/icons/instagram.png" alt="Instagram" />
            </a>

            <a href="https://youtube.com/c/darkhell13" target="_blank">
              <img src="/icons/youtube.png" alt="Youtube" />
            </a>
          </nav>

          <p>© Copyright 2021 - Dark Hell</p>
        </div>
      </div>
    </S.Container>
  );
};
