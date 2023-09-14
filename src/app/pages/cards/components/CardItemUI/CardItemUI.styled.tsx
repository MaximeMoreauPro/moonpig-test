import styled from 'styled-components';

export const CardImage = styled.img`
  height: 100%;
  width: 100%;

  box-shadow: rgba(0, 3, 77, 0.15) 0px 3px 8px 0px;
`;

export const CardItemContainer = styled.article`
  cursor: pointer;

  ${CardImage} {
    transition: all 200ms ease-in-out 0s;

    &:hover {
      box-shadow: rgba(0, 32, 77, 0.15) 0px 8px 18px 0px;
      transform: translateY(-4px);
    }
  }
`;
