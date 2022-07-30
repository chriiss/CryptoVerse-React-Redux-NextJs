import React from 'react';
import Header from "../components/headerComponents/Header";
import Navbar from "../components/navbarComponents/Navbar";
import CryptoFavorite from '../components/favoritesComponents/CryptoFavorite';


const FavoritePage = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <CryptoFavorite />
        </div>
    )
}

export default FavoritePage;