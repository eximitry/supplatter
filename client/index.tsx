import React from 'react';
import ReactDOM from 'react-dom';

import MainWrapper from './layouts/MainWrapper/MainWrapper';

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/defaultTheme';
import NormalizeStyles from './styles/normalizeStyles';
import GlobalStyles from './styles/globalStyles';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={defaultTheme}>
            <NormalizeStyles/>
            <GlobalStyles/>
            <MainWrapper/>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
