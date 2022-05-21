import type { AppProps } from 'next/app'
import { ThemeProvider} from 'styled-components'
import Layout from '../components/Layout'
import GlobalStyle from '../styles/global'

const theme = {
  colors: {
    primary: "#0070f3"
  },
}

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
