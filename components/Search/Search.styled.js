import styled from 'styled-components';

export const SearchBlock = styled.div`
  position: relative;
`;

export const WrapInput = styled.div`
  position: relative;
  overflow: hidden;

  & svg {
    position: absolute;
  }

  & .search {
    left: 10px;
    height: 100%;
    vertical-align: middle;
  }

  & .close {
    right: 20px;
    height: 100%;
    vertical-align: middle;
    fill: ${({ theme }) => theme.colors.gray};
    cursor: pointer;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 30px 10px 40px;
  outline-offset: 10px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  font-size: 18px;
  transition: ${({ theme }) => theme.transition.base};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.font};
  }
`;

export const Results = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  background-color: #000;
  border-radius: 20px;
  padding: 20px;
  top: calc(100% + 15px);
  z-index: 101;
`;

export const WrapGame = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  font-size: 18px;
  transition: ${({ theme }) => theme.transition.base};

  &:hover {
    color: ${({ theme }) => theme.colors.lightGray};
  }
`;

export const WrapPreloader = styled.div`
  justify-self: center;
  margin: 50px 0;
`;
