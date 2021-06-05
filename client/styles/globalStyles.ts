import { createGlobalStyle } from 'styled-components';

import { IDefaultTheme } from './defaultTheme';

const GlobalStyles = createGlobalStyle<{ theme: IDefaultTheme }>`
    html {
        --color-1--1: ${({ theme }) => theme.colors.color_1__1};
        --color-1--2: ${({ theme }) => theme.colors.color_1__2};
        --color-1--3: ${({ theme }) => theme.colors.color_1__3};
        --color-1--4: ${({ theme }) => theme.colors.color_1__4};
        --color-1--5: ${({ theme }) => theme.colors.color_1__5};
        --color-white: ${({ theme }) => theme.colors.color_white};
        --color-black: ${({ theme }) => theme.colors.color_black};
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        margin: 0;
        -moz-osx-font-smoothing: grayscale;
        min-height: 100vh;
        width: 100%;

        > div {
            height: 100%;
        }

        * {
            box-sizing: border-box;
        }
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    button {
        background: transparent;
        border: none;
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyles;
