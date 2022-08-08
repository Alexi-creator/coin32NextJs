import styled from 'styled-components';

export const WrapperMain = styled.main`
  max-width: ${({ theme }) => theme.sizes.lg}px;
  margin: 0 auto;
  padding: 15px;

  @media ${({ theme }) => theme.media.large} {
    padding: 39px;
  }
`;
