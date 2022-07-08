import { Provider } from 'react-redux';
import { store } from "../store/Store";
import Head from 'next/head'
import Styles from '../styles/Home.module.scss'
import Crypto from "../components/Crypto";


const Home = () => {
  return (
    <div className={Styles.container}>
      <Head>
      </Head>
      <main>
      <Provider store={store}>
        <Crypto />
      </Provider>
      </main>
    </div>
  )
}

export default Home;
