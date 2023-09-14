import React, { ReactNode } from 'react';
import { RenderOptions, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

type AllTheProvidersProps = {
  children?: ReactNode;
};

const AllTheProviders = ({ children }: AllTheProvidersProps) => (
  <MemoryRouter>{children}</MemoryRouter>
);

type Options = RenderOptions<
  typeof import('@testing-library/dom/types/queries'),
  HTMLElement,
  HTMLElement
>;
type Wrapper = React.JSXElementConstructor<{
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}>;
export const setupWrapper =
  (wrapper: Wrapper) => (ui: JSX.Element, options?: Options) =>
    render(ui, { wrapper, ...options });

type WrapperProp = {
  children?: ReactNode;
};
const wrapper = ({ children }: WrapperProp) => (
  <AllTheProviders>{children}</AllTheProviders>
);
const customRender = setupWrapper(wrapper);

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
