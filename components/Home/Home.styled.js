import styled from 'styled-components';

export const WrapperHome = styled.div`
  color: ${({ theme }) => theme.colors.font};
`;

export const WrapperGame = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  /* border: 1px solid blue; */
  margin-top: 20px;

  @media ${({ theme }) => theme.media.small} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({ theme }) => theme.media.medium} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${({ theme }) => theme.media.extraLarge} {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
`;
