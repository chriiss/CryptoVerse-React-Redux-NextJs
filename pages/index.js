import { Provider } from 'react-redux';
import { store } from "../store/store";
import Head from 'next/head'
import Styles from '../styles/Home.module.scss'
import Crypto from "../components/crypto.js";


const Home = () => {
  return (
    <div className={Styles.container}>
      <Head>
      </Head>
      <main>
      <Provider store={store}>
        <Crypto/>
      </Provider>
      </main>
    </div>
  )
}

export default Home;
