import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});

const App = ({ Component, pageProps }) => (
  <ChakraProvider resetCSS theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default App;
