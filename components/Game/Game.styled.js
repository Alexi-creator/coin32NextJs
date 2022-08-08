import styled from 'styled-components';

export const WrapperGame = styled.div`
  border: 2px solid cadetblue;
  border-radius: 20px;
  overflow: hidden;
  transition: ${({ theme }) => theme.transition.base};
  background-color: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.lightGray};

  &:hover {
    transform: scale(1.02);
  }
`;

export const ImgBlockWrapper = styled.div`
  padding-bottom: 56.25%;
  position: relative;
`;

export const ImgBlock = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.uriImg});
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const DescriptionBlock = styled.div`
  padding: 15px;

  & > a {
    font-size: 18px;

    @media ${({ theme }) => theme.media.extraLarge} {
      font-size: 24px;
    }
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  font-size: 15px;

  /* & > span {
    font-weight: 600;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    padding: 5px 7px;
    border-radius: 5px;
    transition: ${({ theme }) => theme.transition.base};
    cursor: default;
    color: ${({ theme }) => theme.colors.green};
    box-shadow: 0px 0px 8px ${({ theme }) => theme.colors.green};

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.gray};
      box-shadow: 0px 0px 8px ${({ theme }) => theme.colors.primary};
    }
  } */
`;

export const Rating = styled.span`
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 5px 7px;
  border-radius: 5px;
  transition: ${({ theme }) => theme.transition.base};
  cursor: default;
  color: ${({ theme }) => theme.colors.green};
  box-shadow: 0px 0px 8px ${({ theme }) => theme.colors.green};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.gray};
    box-shadow: 0px 0px 8px ${({ theme }) => theme.colors.primary};
  }
`;
