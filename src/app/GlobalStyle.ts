import { createGlobalStyle } from 'styled-components';

// @ts-ignore
import BikoRegularOtf from '@/app/fonts/biko/Biko_Regular.otf';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Biko';
        src: url(${BikoRegularOtf}) format('opentype');
        font-weight: 300;
        font-style: normal;
    }

    body {
        font-family: 'Biko', sans-serif;

        color: rgb(0, 32, 77);

        h1 {
         color: rgb(255, 166, 182);
        }
    }
`;
