import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import CryptoFavorite from "../components/favoritesComponents/CryptoFavorite";
import RemoveFavorite from "../components/favoritesComponents/RemoveFavorite";
import { addFav, addDetail, getFav } from "../store/Slice";
import axios from 'axios';
import Header from '../components/headerComponents/Header';
import Navbar from '../components/navbarComponents/Navbar';
import SearchBox from '../components/searchBoxComponent/SearchBox';


const FavoritePage = () => {
    const dispatch = useDispatch();
    const favorite = useSelector(getFav);
    const router = useRouter();

    useEffect(() => {
		try {
            const coinFavorites = JSON.parse(localStorage.getItem('coin-favorites') || []);
		    dispatch(addFav((coinFavorites)));
        }catch(e){}
	},[]);

    const saveToCoinFav = (items) => {
		localStorage.setItem('coin-favorites', JSON.stringify(items));
	};

    const getCryptoDetails = async (id) => {
        await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`).then(result => dispatch(addDetail((result.data))));
        router.push('/detailsPage?name=' + id);
    }

    const removeFavoriteCoin = (coin) => {
        const newFavoriteList = favorite.filter(
			(favorite) => favorite.id !== coin.id
		);
        dispatch(addFav(newFavoriteList));
        saveToCoinFav(newFavoriteList);
    }
    return (
        <div>
            <Header />
            <Navbar />
            <CryptoFavorite favoritesComponent={RemoveFavorite} handleFavoritesClick={removeFavoriteCoin} handleIdClick={(id)=> getCryptoDetails(id.id)} />
        </div>
    )
}

export default FavoritePage;