import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(<div> <Component {...pageProps} />
  <footer className={global.footer}>
    <p>2022 Ivan Pelivan</p>
  </footer></div>);
}

export default MyApp
