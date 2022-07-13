import { Provider } from 'react-redux';
import { store } from "../store/Store";
import Head from 'next/head';
import HomePage from './homePage';


const Home = () => {
  return (
    <div>
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
