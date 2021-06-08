import { FC } from 'react';
import { AppProps } from 'next/app';

import { wrapper } from '../store';

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../styles/defaultTheme';
import NormalizeStyles from '../styles/normalizeStyles';
import GlobalStyles from '../styles/globalStyles';


const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <NormalizeStyles/>
            <GlobalStyles/>
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default wrapper.withRedux(WrappedApp);
