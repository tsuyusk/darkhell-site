import React, { useState } from 'react';

import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Content } from '@/components/Content';
import * as S from '@/styles/pages/loja';
import { nanoid } from 'nanoid';

const Shop: React.FC = () => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);

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

          <S.ProductsViewSwitcher selectedOptionIndex={selectedOptionIndex}>
            <button onClick={() => setSelectedOptionIndex(0)}>Produtos</button>

            <button onClick={() => setSelectedOptionIndex(1)}>Cursos</button>
          </S.ProductsViewSwitcher>
        </Content>
      </S.TitleContainer>

      {selectedOptionIndex === 0 && (
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
      )}

      {selectedOptionIndex === 1 && (
        <S.CoursesList>
          <Content>
            <Course
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem magni beatae, perferendis harum ipsum eveniet laudantium error quisquam, deserunt et exercitationem nemo quaerat expedita, eum laborum praesentium natus ea sunt?"
              title="Gestão de Sistemas Web"
              price={168}
              tags={['Informática']}
            />
            <Course
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem magni beatae, perferendis harum ipsum eveniet laudantium error quisquam, deserunt et exercitationem nemo quaerat expedita, eum laborum praesentium natus ea sunt?"
              title="Gestão de Sistemas Web"
              price={168}
              tags={['Informática']}
            />
            <Course
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem magni beatae, perferendis harum ipsum eveniet laudantium error quisquam, deserunt et exercitationem nemo quaerat expedita, eum laborum praesentium natus ea sunt?"
              title="Gestão de Sistemas Web"
              price={168}
              tags={['Informática']}
            />

            <Course
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem magni beatae, perferendis harum ipsum eveniet laudantium error quisquam, deserunt et exercitationem nemo quaerat expedita, eum laborum praesentium natus ea sunt?"
              title="Gestão de Sistemas Web"
              price={168}
              tags={['Informática']}
            />
          </Content>
        </S.CoursesList>
      )}

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

interface CourseProps {
  title: string;
  tags: string[];
  price: number;
  text: string;
}

const Course: React.FC<CourseProps> = ({ title, tags, price, text }) => {
  return (
    <S.Card>
      <img src="/assets/dark_hell.jpg" alt="curso" />

      <header>
        <S.Data>
          {tags.map(tag => (
            <div key={nanoid()}>
              <span>{tag}</span>
            </div>
          ))}

          <span>R$ {price}</span>
        </S.Data>

        <h1>{title}</h1>
      </header>

      <main>
        <p>{text}</p>
      </main>
    </S.Card>
  );
};

export default Shop;
