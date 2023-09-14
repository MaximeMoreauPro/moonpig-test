import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
`;

type NavButtonProps = {
  enabled: boolean;
};

export const NavButton = styled.button.attrs<NavButtonProps>(({ enabled }) => ({
  disabled: !enabled,
  'aria-disabled': !enabled,
}))`
  border: none;
  background-color: transparent;
  font-size: 30px;

  &:enabled {
    cursor: pointer;
  }

  color: rgb(0, 32, 77);
  &:hover {
    color: rgb(206, 51, 86);
  }
  &:disabled {
    color: rgba(16, 16, 16, 0.3);
  }
`;
