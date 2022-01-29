import React, { useCallback, useMemo, useRef, useState } from 'react';
import * as Icons from 'react-icons/fi';
import { nanoid } from 'nanoid';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Content } from '@/components/Content';
import { Slider } from '@/components/Slider';
import { SEO } from '@/components/SEO';
import * as S from '@/styles/pages/index';
import { ABOUT_US, RULES } from '@/consts/texts';
import { DEFAULT_HIERARCHY_TEXT, HIERARCHIES } from '@/consts/hierarchy';
import { DEFAULT_SECTORS_TEXT, SECTORS } from '@/consts/sectors';

const Home: React.FC = () => {
  const [selectedHierarchyIndex, setSelectedHierarchyIndex] = useState(-1);

  const bannerRef = useRef<HTMLElement>(null);
  const aboutUsRef = useRef<HTMLElement>(null);
  const vwUnityInPx = useMemo(() => {
    return window.innerWidth / 100;
  }, []);

  const handleSelectHierarchy = useCallback(
    (index: number) => {
      if (selectedHierarchyIndex === index) {
        setSelectedHierarchyIndex(-1);
        return;
      }

      setSelectedHierarchyIndex(index);
    },
    [selectedHierarchyIndex],
  );

  return (
    <S.Container>
      <SEO
        title="Dark Hell"
        description="Dark Hell é uma empresa corporativa criada em novembro de
        2020, com o objetivo de dominar as ramificações de
        entretenimento digital e conteúdos gerais da internet, sendo
        capaz de participar de diversos temas diferentes da internet, e
        reunir diferentes tipos de pessoas e qualificações em apenas um
        lugar."
        shouldExcludeTitleSuffix
      />
      <Header />

      <S.Banner ref={bannerRef}>
        <Content>
          <div>
            <h1>Dark Hell</h1>

            <p>
              O Diabo, que as enganava, foi lançado no lago de fogo que arde com
              enxofre, onde já haviam sido lançados a besta e o falso profeta.
              Eles serão atormentados dia e noite, para todo o sempre.
              <br />
              <br />
              Bem vindo ao <span>Inferno</span>
            </p>

            <nav>
              <a
                href="https://discord.gg/QSNheHwEhE"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/icons/discord.png" alt="Discord" />
              </a>

              <a
                href="https://instagram.com/dark.hell.ofc"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/icons/instagram.png" alt="Instagram" />
              </a>

              <a
                href="https://youtube.com/c/darkhell13"
                target="_blank"
                rel="noreferrer"
              >
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

        <S.VideoSectionFade />
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

              <p>{ABOUT_US}</p>
            </div>
          </Content>
        </S.ImageTextSection>

        <S.ColumnDoubleTextContentSide shouldAlignTitleCenter>
          <Content>
            <div>
              <main>
                <div>
                  <main>
                    <div>
                      <h1>
                        <span>Hierarquia</span>
                      </h1>
                      <br />

                      <p>
                        {selectedHierarchyIndex === -1
                          ? DEFAULT_HIERARCHY_TEXT
                          : HIERARCHIES[selectedHierarchyIndex].fullDesc}
                      </p>
                    </div>
                  </main>

                  <Slider
                    maxWidth={window.innerWidth <= 490 ? '80vw' : '42vw'}
                    slidedScrollLeftPerClick={195 + 21 + 21 + 48}
                    style={
                      window.innerWidth <= 923
                        ? { marginLeft: 0, marginTop: 32 }
                        : { marginLeft: 32 }
                    }
                  >
                    <div>
                      {HIERARCHIES.map((hierarchy, index) => (
                        <React.Fragment key={nanoid()}>
                          <S.Card
                            isSelected={selectedHierarchyIndex === index}
                            onClick={() => handleSelectHierarchy(index)}
                          >
                            <strong>{hierarchy.name}</strong>
                            <span>{hierarchy.label}</span>
                          </S.Card>

                          {index + 1 !== HIERARCHIES.length && (
                            <Icons.FiChevronRight size={48} />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </Slider>
                </div>
              </main>
            </div>
          </Content>
        </S.ColumnDoubleTextContentSide>

        <S.ColumnDoubleTextContentSide shouldAlignTitleCenter>
          <Content>
            <div>
              <main>
                <div>
                  <main>
                    <div>
                      <h1>
                        <span>Setores</span>
                      </h1>
                      <br />
                      <p>{DEFAULT_SECTORS_TEXT}</p>
                    </div>
                  </main>

                  <Slider
                    slidedScrollLeftPerClick={
                      window.innerWidth <= 490
                        ? vwUnityInPx * 80 + 72 + 42
                        : vwUnityInPx * 64 + 72 + 72
                    }
                    maxWidth={window.innerWidth <= 490 ? '80vw' : '42vw'}
                    style={
                      window.innerWidth <= 923
                        ? { marginLeft: 0, marginTop: 32 }
                        : { marginLeft: 32 }
                    }
                  >
                    {SECTORS.map(sector => (
                      <S.SectorCard>
                        <h1 aria-labelledby={sector.ariaLabel}>
                          {sector.name} <span>{sector.highlightedName}</span>
                        </h1>

                        <p>{sector.fullDesc}</p>
                      </S.SectorCard>
                    ))}
                  </Slider>
                </div>
              </main>
            </div>
          </Content>
        </S.ColumnDoubleTextContentSide>

        <S.TextLiListSection>
          <Content>
            <div>
              <h1>
                Constituição <span>Hell</span>
              </h1>

              <p>
                A Dark Hell segue um sistema de regras simples com intuito de
                manter a ordem e boa convivência entre os membros e setores.
              </p>

              <ul>
                {RULES.map(rule => (
                  <li key={nanoid()}>{rule}</li>
                ))}
              </ul>
            </div>
          </Content>
        </S.TextLiListSection>

        <S.SingleTextColumnCardsRight>
          <Content>
            <div>
              <h1>
                Como posso <br />
                entrar na <span>Dark Hell</span> ?
              </h1>

              <p>
                Parar entrar na Dark Hell como um membro participante você deve
                ser indicado por um membro de classe demônio para cima, e ser
                aprovado pelo Lord, ou leviatã. Mas alguns meios como o Discord
                são abertos ao público
              </p>
            </div>

            <div>
              <S.WayOfenteringCard>
                <h1>Indicação</h1>
                <p>
                  Um membro de classe igual ou superior a Demônio deve te
                  indicar para o Lord ou o Leviatã.
                </p>
              </S.WayOfenteringCard>

              <S.WayOfenteringCard
                onClick={() => window.open('https://discord.gg/QSNheHwEhE')}
              >
                <h1>Discord</h1>
                <p>
                  Você deve entrar no Discord da Dark Hell e se candidatar para
                  o Lord.
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
