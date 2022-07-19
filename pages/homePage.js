import Header from "../components/headerComponents/Header";
import Navbar from '../components/navbarComponents/Navbar';
import Crypto from "../components/cryptoComponents/Crypto";

const HomePage = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <Crypto />
        </div>
    )
}

export default HomePage;