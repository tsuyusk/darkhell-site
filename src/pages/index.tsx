import React, { useCallback, useMemo, useRef } from 'react';
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
  const vwUnityInPx = useMemo(() => {
    return window.innerWidth / 100;
  }, []);

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
      <SEO title="Dark Hell" shouldExcludeTitleSuffix />
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
                <Icons.FiSun size={24} color={white_text} />
              ) : (
                <Icons.FiMoon size={24} color={white_text} />
              )}
            </button>
          </>
        }
      />

      <S.Banner ref={bannerRef}>
        <Content>
          <div>
            <h1>Dark Hell</h1>
            {/* <strong>
              O inferno está vazio, <br /> os demônios já estão fora.
            </strong> */}
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
                <br />
                • Ela esta começando a se estabelecer no mundo digital há cerca
                um ano, e tem demonstrado um crescimento muito bom em seus
                vários projetos, e isso é demonstrado fortemente através da
                criação rápida e de qualidade de seu site, ou através da
                explosão de visualizações no canal do Youtube, batendo 50 mil de
                visualizações no canal em menos de um mês.
                <br />
                <br />
                • Os meios de comunicação da Dark Hell são devidamente
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

        {/* <S.ImageTextSection reverseRow>
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
        </S.ImageTextSection> */}

        <S.ColumnDoubleTextContentSide shouldAlignTitleCenter>
          <Content>
            <div>
              <header>
                <h1>
                  <span>Hierarquia</span>
                </h1>
              </header>

              <main>
                <div>
                  <Slider
                    maxWidth={'90vw'}
                    slidedScrollLeftPerClick={195 + 21 + 21 + 48}
                  >
                    <div>
                      <S.Card>
                        <strong>Lord 𖤍</strong>
                        <span>(Lider)</span>
                      </S.Card>

                      <Icons.FiChevronRight size={48} />

                      <S.Card>
                        <strong>Leviatã 〆</strong>
                        <span>(Co-lider)</span>
                      </S.Card>

                      <Icons.FiChevronRight size={48} />

                      <S.Card>
                        <strong>Potestade ⸸</strong>
                        <span>(Assembléia)</span>
                      </S.Card>

                      <Icons.FiChevronRight size={48} />

                      <S.Card>
                        <strong>Cérbero ૪</strong>
                        <span>(Alto escalão)</span>
                      </S.Card>

                      <Icons.FiChevronRight size={48} />

                      <S.Card>
                        <strong>Demônio ᛘ</strong>
                        <span>(Membro Oficial)</span>
                      </S.Card>

                      <Icons.FiChevronRight size={48} />

                      <S.Card>
                        <strong>Pecador ⌤</strong>
                        <span>(Novato)</span>
                      </S.Card>
                    </div>
                  </Slider>
                </div>
              </main>
            </div>
          </Content>
        </S.ColumnDoubleTextContentSide>

        <S.ColumnDoubleTextContentSide>
          <Content>
            <div>
              <header>
                <h1>
                  <span>Setores</span>
                </h1>
              </header>

              <main>
                <div>
                  <p>
                    A Dark Hell organiza suas operações em departamentos
                    chamados setor. Cada setor se dedica à gestão e organização
                    de temas específicos e tem divisões de equipes
                    especializadas em diferentes areas. Os setores são
                    administrados por um líder e co-lider eleito pelo Lord em
                    conjunto com a Potestade. A Dark Hell está operando com os
                    seguintes departamentos.
                  </p>

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
                <li>
                  1b2 - A hierarquia deve ser devidamente respeitada e cada
                  membro deve reconhecer a sua posição e se tiver qualquer
                  descontentamento deve se retratar com a potestade
                </li>
                <li>
                  1b3 - Comportamento indesejado não será tolerado, conduta é o
                  básico a ser exigido de todos os membros. A ordem dentro dos
                  meios de comunicação é uma necessidade prioritária.
                  <br />
                  <br />
                  Proibições: <br /> Conteúdo sensível ou nocivo, divulgação sem
                  autorização, superior, inatividade por mais que duas ,
                  semanas, áudios com intensão de, perturbar , Mensagens em
                  excesso (spam), Desrespeito no geral, Conteúdo vulgar
                </li>
                <li>
                  1b4 - Todas as informações faladas dentro da corporação devem
                  ser mantidas em sigilo se necessário. Vazamento de informações
                  serão penalizados severamente,
                </li>
                <li>
                  1b5 - Os direitos de imagem não devem ser violados, não é
                  permitido utilização sem permissão superior qualquer conteúdo,
                  imagem, nome, vídeo, música, nome de membros ou qualquer que
                  sejao material de pose interna
                </li>
                <li>
                  1b6 - Na ausência do Lord, quem toma as decisões e tem total
                  responsabilidade por tudo que acontecer é o leviatã, ele está
                  liberado a fazer o que for preciso.
                </li>
                <li>
                  Na ausência do Lord e leviatã a assembleia da potestade estará
                  no comando e está responsável por tudo que ocorrer, para que
                  uma decisão seja tomada oficialmente pela potestade, a maioria
                  da potestade deve concorda com tal ação, as ações só são
                  oficiais se a maioria concorda com o ato, se somente a minoria
                  concorda com alguma determinada ação, ela será desconsidera.
                </li>
                <li>
                  1b8 - Advertências vão de uma três e dependendo da gravidade
                  das ações o membro receberá uma advertência, ao internar três
                  ele será permanentemente banido. Cada advertência é perdoada
                  após aquela própria advertência completar 30 dias de idade.
                  Dependendo da gravidade da ação o membro pode ser desligado
                  imediatamente.
                </li>
                <li>
                  1b9 - Uso de imagem pessoale dados pessoais dentro dos nossos
                  meios de comunicação estão permanentemente proibidas e serão
                  severamente penalizados os membros que desobedecerem tal
                  regra.
                </li>
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
