import Crypto from "../components/cryptoComponents/Crypto";
import Navbar from '../components/navbarComponents/Navbar';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Crypto />
        </div>
    )
}

export default HomePage;