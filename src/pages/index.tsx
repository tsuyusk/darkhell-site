import React, { useCallback, useRef } from 'react';
import { useTheme } from 'styled-components';
import * as Icons from 'react-icons/fi';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Content } from '@/components/Content';
import { Slider } from '@/components/Slider';
import { SEO } from '@/components/SEO';
import { useCustomThemeProvider } from '@/hooks/theme';
import * as S from '@/styles/pages/index';

const Home: React.FC = () => {
  const { handleSwitchTheme, themeName } = useCustomThemeProvider();
  const { white_text } = useTheme();
  const bannerRef = useRef<HTMLElement>(null);
  const aboutUsRef = useRef<HTMLElement>(null);

  const goTo = useCallback((sectionName: string) => {
    const handlers = {
      LandingPageTop: () => {
        window.scrollTo({
          top: bannerRef.current?.offsetTop,
        });
      },
      AboutUs: () => {
        window.scrollTo({
          top: aboutUsRef.current?.offsetTop,
        });
      },
    };

    return handlers[sectionName] || function () {};
  }, []);

  return (
    <S.Container>
      <SEO title="Dark hell" shouldExcludeTitleSuffix />
      <Header
        leftLinks={
          <>
            <button onClick={goTo('Banner')}>Início</button>
            <button onClick={goTo('AboutUs')}>Sobre Nós</button>
          </>
        }
        rightLinks={
          <>
            <a href="#">Loja</a>
            <a href="#">Notícias</a>

            <button onClick={handleSwitchTheme}>
              {themeName === 'light' ? (
                <Icons.FiMoon size={24} color={white_text} />
              ) : (
                <Icons.FiSun size={24} color={white_text} />
              )}
            </button>
          </>
        }
      />

      <S.Banner ref={bannerRef}>
        <Content>
          <div>
            <h1>Dark Hell</h1>
            <strong>
              O inferno está vazio, <br /> os demônios já estão fora.
            </strong>

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
          </div>
        </Content>

        <video
          src="/assets/BannerBg.mp4"
          autoPlay
          muted
          playsInline
          controls={false}
          loop
        />
      </S.Banner>

      <S.WhoWeAre ref={aboutUsRef}>
        <h1>
          Sobre <span>nós</span>
        </h1>

        <S.ImageTextSection>
          <Content>
            <img src="/assets/dark_hell.jpg" alt="Dark Hell" />

            <div>
              <h1>
                O que é a <span>Dark Hell</span> ?
              </h1>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </Content>
        </S.ImageTextSection>

        <S.ImageTextSection reverseRow>
          <Content>
            <img src="/assets/person_hand.png" alt="Dark Hell" />

            <div>
              <h1>
                Como <span>você</span> pode <br />
                ser <span>útil</span> para <span>nós</span> ?
              </h1>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </Content>
        </S.ImageTextSection>

        <S.TopDoubleTextSection>
          <header>
            <Content>
              <h1>
                Como funciona a <span>Dark Hell</span> ?
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </Content>
          </header>

          <main>
            <Slider>
              <div>
                <S.Card>
                  <strong>Lorde</strong>
                  <span>(Lider)</span>
                </S.Card>

                <Icons.FiChevronRight size={48} />

                <S.Card>
                  <strong>Leviatã</strong>
                  <span>(Co-lider)</span>
                </S.Card>

                <Icons.FiChevronRight size={48} />

                <S.Card>
                  <strong>Potestade</strong>
                  <span>(Assembléia)</span>
                </S.Card>

                <Icons.FiChevronRight size={48} />

                <S.Card>
                  <strong>Cérbero</strong>
                  <span>(Alto escalão)</span>
                </S.Card>

                <Icons.FiChevronRight size={48} />

                <S.Card>
                  <strong>Demônio</strong>
                  <span>(Membro Oficial)</span>
                </S.Card>

                <Icons.FiChevronRight size={48} />

                <S.Card>
                  <strong>Pecador</strong>
                  <span>(Novato)</span>
                </S.Card>
              </div>
            </Slider>
          </main>
        </S.TopDoubleTextSection>

        <S.TopDoubleTextSection>
          <header>
            <Content>
              <h1>
                O que são os <span>setores</span> ?
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </Content>
          </header>

          <main>
            <Slider>
              <div>
                <S.SectorCard>
                  <h1>
                    Setor <span>Hacker</span>
                  </h1>
                  <span>Administrado por Ric</span>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                </S.SectorCard>

                <S.SectorCard>
                  <h1>
                    Setor <span>Conteúdo</span>
                  </h1>
                  <span>Administrado por Louis</span>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                </S.SectorCard>

                <S.SectorCard>
                  <h1>
                    Setor <span>Publicidade</span>
                  </h1>
                  <span>Administrado por Said</span>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                </S.SectorCard>
              </div>
            </Slider>
          </main>
        </S.TopDoubleTextSection>

        <S.DoubleTextColumnsSection>
          <Content>
            <div>
              <h1>
                E quais são <br /> as <span>regras</span>?
              </h1>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?
              </p>
            </div>
          </Content>
        </S.DoubleTextColumnsSection>

        <S.SingleTextColumnCardsRight>
          <Content>
            <div>
              <h1>
                Como posso <br />
                entrar na <span>Dark Hell</span> ?
              </h1>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>

            <div>
              <S.WayOfenteringCard>
                <h1>Indicação</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </S.WayOfenteringCard>

              <S.WayOfenteringCard>
                <h1>Candidatar-se</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </S.WayOfenteringCard>
            </div>
          </Content>
        </S.SingleTextColumnCardsRight>
      </S.WhoWeAre>

      <Footer />
    </S.Container>
  );
};

export default Home;
