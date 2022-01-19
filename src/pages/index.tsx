import React, { useMemo, useRef, useState } from 'react';
import * as Icons from 'react-icons/fi';
import { nanoid } from 'nanoid';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Content } from '@/components/Content';
import { Slider } from '@/components/Slider';
import { SEO } from '@/components/SEO';
import * as S from '@/styles/pages/index';
import { RULES } from '@/consts/texts';
import { HIERARCHIES } from '@/consts/hierarchy';

const Home: React.FC = () => {
  const [selectedHierarchyIndex, setSelectedHierarchyIndex] = useState(-1);
  // const [selectedSectorIndex, setSelectedSectorIndex] = useState(-1);

  const bannerRef = useRef<HTMLElement>(null);
  const aboutUsRef = useRef<HTMLElement>(null);
  const vwUnityInPx = useMemo(() => {
    return window.innerWidth / 100;
  }, []);

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

              <p>
                • Dark Hell é uma empresa corporativa criada em novembro de
                2020, com o objetivo de dominar as ramificações de
                entretenimento digital e conteúdos gerais da internet, sendo
                capaz de participar de diversos temas diferentes da internet, e
                reunir diferentes tipos de pessoas e qualificações em apenas um
                lugar.
                <br />
                <br />• Ela esta começando a se estabelecer no mundo digital há
                cerca um ano, e tem demonstrado um crescimento muito bom em seus
                vários projetos, e isso é demonstrado fortemente através da
                criação rápida e de qualidade de seu site, ou através da
                explosão de visualizações no canal do Youtube, batendo 50 mil de
                visualizações no canal em menos de um mês.
                <br />
                <br />• Os meios de comunicação da Dark Hell são devidamente
                tematizados com base no inferno da mitologia judaica, e temos
                cores roxas e pretas como cores base, além do seu próprio
                símbolo, que representa as asas angelicais que caem
                <br />
                <br />• Os membros desta corporação seguem um sistema de
                hierarquia muito rigoroso e com seus participantes devidamente
                selecionados de acordo com seus feitos e atividades dentro da
                corporação.
              </p>
            </div>
          </Content>
        </S.ImageTextSection>

        <S.ColumnDoubleTextContentSide shouldAlignTitleCenter>
          <Content>
            <div>
              <main>
                <div>
                  <main>
                    <h1>
                      <span>Hierarquia</span>
                    </h1>
                    <br />

                    <p>
                      {selectedHierarchyIndex === -1 &&
                        `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Facere nulla, a provident sed aspernatur fuga vero totam
                        optio dignissimos quos! Corrupti debitis libero delectus
                        modi voluptates unde, aperiam quae architecto! Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Eveniet,
                        voluptas. Laborum nostrum qui molestias sint. Doloribus
                        quo fugit deserunt. Optio eligendi quasi maxime voluptatum
                        quod inventore laborum repellendus autem culpa!`}

                      {selectedHierarchyIndex !== -1 &&
                        HIERARCHIES[selectedHierarchyIndex].fullDesc}
                    </p>
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
                            onClick={() => setSelectedHierarchyIndex(index)}
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
                    <h1>
                      <span>Setores</span>
                    </h1>
                    <br />
                    <p>
                      A Dark Hell organiza suas operações em departamentos
                      chamados setor. Cada setor se dedica à gestão e
                      organização de temas específicos e tem divisões de equipes
                      especializadas em diferentes areas. Os setores são
                      administrados por um líder e co-lider eleito pelo Lord em
                      conjunto com a Potestade. A Dark Hell está operando com os
                      seguintes departamentos.
                    </p>
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
                    <S.SectorCard>
                      <h1 aria-labelledby="Setor Hacker">
                        sєтσя <span>нคcкεг</span>
                      </h1>

                      <p>
                        O setor hacker é o setor responsável por todas tarefas e
                        atividades relacionadas a tecnologia, desde programação
                        e desenvolvimento, até hacking e pentest, qualquer coisa
                        relacionada a tecnologia fica encaminhado a esse setor.
                        <br />
                        <br />
                        O setor hacker tem 2 subdivisões, sendo elas:
                        <br />
                        <br />
                        - Dev
                        <br />
                        - Invasão
                        <br />
                        <br /> ♛ Líder: Imperador RIC
                        <br /> ♚ Sub-Líder: CCA-469
                      </p>
                    </S.SectorCard>

                    <S.SectorCard>
                      <h1 aria-labelledby="Setor de Conteudo">
                        Sєтσя ∂є <span>Cσηтєυ∂σ</span>
                      </h1>

                      <p>
                        Setor de Conteúdo é o setor da Dark Hell responsável
                        pelo visual, aparência, marketing e como o nome bem diz,
                        o conteúdo dos seus meios de comunicação.
                        <br />
                        <br />
                        Esse setor é palco de planejamento e produção de vídeos
                        e imagens usados em todos os meios da Dark Hell e tem
                        como subdivisões as seguintes categorias:
                        <br />
                        <br />
                        - Edição
                        <br />
                        - Música
                        <br />
                        - Roteiro
                        <br />
                        - Publicidade
                        <br />
                        - Apresentação
                        <br />
                        <br />
                        ♛ Líder: Louis
                        <br />♚ Sub-Líder: Viic
                      </p>
                    </S.SectorCard>
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

              <S.WayOfenteringCard>
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
