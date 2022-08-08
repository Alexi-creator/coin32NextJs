import styled from 'styled-components';
import { Rating } from '../Game/Game.styled';

export const AboutWrapper = styled.div`
  color: ${({ theme }) => theme.colors.lightGray};
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
`;

export const MoreInfo = styled.div`
  max-width: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: baseline;
  gap: 30px;
`;

export const MoreInfoBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
`;

export const Rate = styled(Rating)`
  justify-self: left;
  align-self: center;
  padding: 2px 3px;
  font-size: 14px;
  font-weight: 400;
`;

export const Wrapper = styled.div`
  margin-top: 40px;

  @media ${({ theme }) => theme.media.medium} {
    display: grid;
    grid-template-columns: auto minmax(auto, 500px);
    align-items: flex-start;
    gap: 20px;
  }
`;

export const WrapSlider = styled.div`
  margin-top: 20px;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & .slider {
    height: 300px;
  }

  & .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.colors.primary};
  }

  @media ${({ theme }) => theme.media.medium} {
    margin-top: 0;
  }
`;
