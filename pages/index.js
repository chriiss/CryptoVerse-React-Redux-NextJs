import { Provider } from 'react-redux';
import { store } from "../store/Store";
import Head from 'next/head'
import Styles from '../styles/Home.module.scss'
import HomePage from './homePage';
import FavoritePage from './favoritePage';


const Home = () => {
  return (
    <div className={Styles.container}>
      <Head>
        <title>CryptoVerse</title>
      </Head>
      <main>
      <Provider store={store}>
        <HomePage/>
      </Provider>
      </main>
    </div>
  )
}

export default Home;
