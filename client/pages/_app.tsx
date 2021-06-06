import { FC } from 'react';
import { AppProps } from 'next/app';

import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apollo';

import { wrapper } from "../store";

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../styles/defaultTheme';
import NormalizeStyles from '../styles/normalizeStyles';
import GlobalStyles from '../styles/globalStyles';


const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
    const apolloClient = useApollo(pageProps.initialApolloState)

    return (
        <ThemeProvider theme={defaultTheme}>
            <NormalizeStyles/>
            <GlobalStyles/>
            <ApolloProvider client={apolloClient}>
                <Component {...pageProps} />
            </ApolloProvider>
        </ThemeProvider>
    );
};

export default wrapper.withRedux(WrappedApp);
