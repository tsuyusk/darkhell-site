import React from 'react';

import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Content } from '@/components/Content';
import * as S from '@/styles/pages/loja';

const Shop: React.FC = () => {
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

      <S.TitleContainer>
        <Content>
          <h1>
            <span>Loja</span>
          </h1>
        </Content>
      </S.TitleContainer>

      <S.ShopList>
        <Content>
          <S.Sector>
            <h1>
              Setor <span>Hacker</span>
            </h1>

            <S.SellItems>
              <Item
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
                aliquam mollitia voluptates, harum ut ea obcaecati doloremque dolor
                perferendis modi adipisci nesciunt vitae cumque nulla necessitatibus
                tenetur magnam quos libero. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Libero vel neque ipsa reprehenderit reiciendis a
                dicta eum illo beatae dolor quibusdam eius delectus, suscipit, magni
                voluptas labore ab error consectetur! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Odio sed ab a laudantium modi eligendi
                ut minima itaque quidem tempore vel, harum esse, veritatis deserunt
                omnis. Vero adipisci quos nisi. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Voluptatibus, quisquam, facilis, natus
                in impedit nesciunt pariatur veritatis eum harum quibusdam molestias
                cumque quasi saepe distinctio cupiditate? Laboriosam optio quo ipsa.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
                molestiae hic aliquid quidem repudiandae vel fugiat odit, quibusdam
                voluptates temporibus quas numquam nulla? Accusantium, omnis soluta.
                Sed magni atque magnam."
                title="Venda de "
                titleBoldTextPart="sites"
                price={300}
              />
              <hr />

              <Item
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
                aliquam mollitia voluptates, harum ut ea obcaecati doloremque dolor
                perferendis modi adipisci nesciunt vitae cumque nulla necessitatibus
                tenetur magnam quos libero. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Libero vel neque ipsa reprehenderit reiciendis a
                dicta eum illo beatae dolor quibusdam eius delectus, suscipit, magni
                voluptas labore ab error consectetur! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Odio sed ab a laudantium modi eligendi
                ut minima itaque quidem tempore vel, harum esse, veritatis deserunt
                omnis. Vero adipisci quos nisi. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Voluptatibus, quisquam, facilis, natus
                in impedit nesciunt pariatur veritatis eum harum quibusdam molestias
                cumque quasi saepe distinctio cupiditate? Laboriosam optio quo ipsa.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
                molestiae hic aliquid quidem repudiandae vel fugiat odit, quibusdam
                voluptates temporibus quas numquam nulla? Accusantium, omnis soluta.
                Sed magni atque magnam."
                title="Serviços de "
                titleBoldTextPart="pentesting"
                price={250}
              />
              <hr />
            </S.SellItems>
          </S.Sector>

          <S.Sector>
            <h1>
              Setor de <span>conteúdo</span>
            </h1>

            <S.SellItems>
              <Item
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
                aliquam mollitia voluptates, harum ut ea obcaecati doloremque dolor
                perferendis modi adipisci nesciunt vitae cumque nulla necessitatibus
                tenetur magnam quos libero. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Libero vel neque ipsa reprehenderit reiciendis a
                dicta eum illo beatae dolor quibusdam eius delectus, suscipit, magni
                voluptas labore ab error consectetur! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Odio sed ab a laudantium modi eligendi
                ut minima itaque quidem tempore vel, harum esse, veritatis deserunt
                omnis. Vero adipisci quos nisi. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Voluptatibus, quisquam, facilis, natus
                in impedit nesciunt pariatur veritatis eum harum quibusdam molestias
                cumque quasi saepe distinctio cupiditate? Laboriosam optio quo ipsa.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
                molestiae hic aliquid quidem repudiandae vel fugiat odit, quibusdam
                voluptates temporibus quas numquam nulla? Accusantium, omnis soluta.
                Sed magni atque magnam."
                title="Divulgação de "
                titleBoldTextPart="produtos"
                price={285}
              />
              <hr />
            </S.SellItems>
          </S.Sector>
        </Content>
      </S.ShopList>

      <Footer />
    </S.Container>
  );
};

interface ItemProps {
  image?: string;
  title: string;
  titleBoldTextPart?: string;
  price?: number;
  text: string;
}

const Item: React.FC<ItemProps> = ({
  image,
  title,
  titleBoldTextPart,
  price,
  text,
}) => {
  return (
    <S.Item>
      <img
        src="https://www.macmillandictionary.com/us/external/slideshow/full/Grey_full.png"
        alt="Cinza"
      />

      <div>
        <header>
          <h1>
            {title} <span>{titleBoldTextPart}</span>
          </h1>

          <strong>R$ {price}</strong>
        </header>

        <main>
          <p>{text}</p>
        </main>

        <footer>
          <button>Ver mais</button>

          <button>Contato</button>
        </footer>
      </div>
    </S.Item>
  );
};

export default Shop;
