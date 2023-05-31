import '@/styles/globals.css'
import '@/styles/app.css'
//aqui pode fazer o import dos outros arquivos de css caso queira

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
