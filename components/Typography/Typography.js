import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: 24px;
  margin: 16px 0;

  @media ${({ theme }) => theme.media.large} {
    font-size: 36px;
    margin: 19px 0;
  }
`;

export const H2 = styled.h2`
  font-size: 22px;
  margin: 11px 0;

  @media ${({ theme }) => theme.media.large} {
    font-size: 28px;
    margin: 16px 0;
  }
`;

export const Ptag = styled.p`
  font-size: 14px;
  margin: 8px 0;

  @media ${({ theme }) => theme.media.large} {
    font-size: 17px;
    margin: 16px 0;
  }
`;

export const Linktag = styled.a`
  transition: ${({ theme }) => theme.transition.base};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
  }
`;
