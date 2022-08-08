import Link from 'next/link';
import { format } from 'date-fns';
import {
  WrapperGame,
  ImgBlock,
  ImgBlockWrapper,
  DescriptionBlock,
  Row,
  Rating,
} from './Game.styled';

export const Game = (props) => {
  const { slug, background_image: uriImg, name, released, rating } = props;
  return (
    <WrapperGame>
      <ImgBlockWrapper>
        <ImgBlock uriImg={uriImg} />
      </ImgBlockWrapper>
      <DescriptionBlock>
        <Link href={`/games/${slug}`}>
          <a>{name}</a>
        </Link>
        <Row>
          <div>Rating:</div>
          <Rating>{rating}</Rating>
        </Row>
        <Row>
          <div> Release date:</div>
          <div>
            {format(new Date(released.split('-').join(',')), 'd MMM, yyyy')}
          </div>
        </Row>
      </DescriptionBlock>
    </WrapperGame>
  );
};
