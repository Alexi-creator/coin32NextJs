import styled from 'styled-components';

export const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 280px;
  background-color: #fff;
  color: #000;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
`;

export const Selected = styled.div`
  width: 100%;
`;

export const SelectList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 5px;
  position: absolute;
  left: 0;
  right: 0;
  top: calc(100% + 5px);
  z-index: 100;
  background-color: #fff;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.base};

  & > div {
    padding: 5px;
    border-radius: 5px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`;
