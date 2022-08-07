import Link from 'next/link';
import {
  WrapperGame,
  ImgBlock,
  ImgBlockWrapper,
  DescriptionBlock,
  Row,
} from './Game.styled';

export const Game = (props) => {
  const { id, background_image: uriImg, name, released, rating } = props;
  return (
    <WrapperGame>
      <ImgBlockWrapper>
        <ImgBlock uriImg={uriImg} />
      </ImgBlockWrapper>
      <DescriptionBlock>
        <Link href={`/${id}`}>
          <a>{name}</a>
        </Link>
        <Row>
          <div>Rating:</div>
          <span>{rating}</span>
        </Row>
        <Row>
          <div> Release date:</div>
          <div>{released}</div>
        </Row>
      </DescriptionBlock>
    </WrapperGame>
  );
};
