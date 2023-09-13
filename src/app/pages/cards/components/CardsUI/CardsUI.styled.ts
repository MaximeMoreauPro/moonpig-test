import styled from 'styled-components';

import { CardItemContainer } from '../CardItemUI/CardItemUI.styled';

export const CardsContainer = styled.div`
  padding: 40px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 40px;

  ${CardItemContainer} {
    max-width: 60px;

    @media (min-width: 420px) {
      max-width: 230px;
    }
  }
`;
