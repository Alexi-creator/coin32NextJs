import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
/* eslint-disable import/no-unresolved */
import 'swiper/css';
import 'swiper/css/pagination';
import { format } from 'date-fns';
import Link from 'next/link';
import { H1, H2, Ptag, Linktag } from '../Typography/Typography';
import {
  AboutWrapper,
  Title,
  MoreInfo,
  MoreInfoBlock,
  Rate,
  Wrapper,
  WrapSlider,
} from './AboutGame.sytled';

export const AboutGame = ({ page }) => {
  const {
    website,
    name,
    description_raw: descr,
    stores,
    genres,
    metacritic,
    platforms,
    released,
  } = page;

  return (
    <AboutWrapper>
      <H1>{name}</H1>
      <Title>website:</Title>
      <Link href={website}>
        <Linktag href={website}>{website}</Linktag>
      </Link>
      <H2>AboutGame</H2>
      <Ptag>{descr}</Ptag>

      <Wrapper>
        <MoreInfo>
          <MoreInfoBlock>
            <Title>Ganre</Title>
            <div>
              {genres.map((elem, index, array) =>
                index === array.length - 1 ? elem.name : `${elem.name}, `
              )}
            </div>
          </MoreInfoBlock>
          <MoreInfoBlock>
            <Title>Metascore</Title>
            <Rate>{metacritic}</Rate>
          </MoreInfoBlock>
          <MoreInfoBlock>
            <Title>Platforms</Title>
            <div>
              {platforms.map((elem, index, array) =>
                index === array.length - 1
                  ? elem.platform.name
                  : `${elem.platform.name}, `
              )}
            </div>
          </MoreInfoBlock>
          <MoreInfoBlock>
            <Title>Release date</Title>
            <div>
              {format(new Date(released.split('-').join(',')), 'd MMM, yyyy')}
            </div>
          </MoreInfoBlock>
        </MoreInfo>

        <WrapSlider>
          <Swiper
            autoHeight
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {stores.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="slider">
                  <img src={item.store.image_background} alt="slide" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </WrapSlider>
      </Wrapper>
    </AboutWrapper>
  );
};
