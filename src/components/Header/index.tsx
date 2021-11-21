import React, { useState } from 'react';
import * as Icons from 'react-icons/fi';

import { Content } from '@/components/Content';
import * as S from '@/styles/components/Header';
import { useTheme } from 'styled-components';

interface HeaderProps {
  leftLinks?: React.ReactNode;
  rightLinks?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ leftLinks, rightLinks }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { white_text } = useTheme();

  return (
    <S.Container isMenuOpen={isMenuOpen}>
      <Content>
        <S.HamburgerWrapper onClick={() => setIsMenuOpen(state => !state)}>
          {isMenuOpen ? (
            <Icons.FiX size={32} color={white_text} />
          ) : (
            <Icons.FiAlignJustify size={32} color={white_text} />
          )}
        </S.HamburgerWrapper>

        <nav>
          <div>{leftLinks}</div>

          <img src="/assets/DarkHell_Logo_Symbol.png" alt="Dark Hell" />

          <div>{rightLinks}</div>
        </nav>

        <S.PageShader isMenuOpen={isMenuOpen} />
      </Content>
    </S.Container>
  );
};
