import React, { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, addDetail, getFav } from "../../store/Slice";
import FavoriteList from './favoriteList/FavoriteList';
import RemoveFavorite from "./removeFavorite/RemoveFavorite";



const CryptoFavorite = () => {
    const dispatch = useDispatch();
    const favorite = useSelector(getFav);
    const router = useRouter();

    useEffect(() => {
		try {
            const coinFavorites = JSON.parse(localStorage.getItem('coin-favorites') || []);
		    dispatch(addFav((coinFavorites)));
        }catch(e){}
	}, [dispatch]);

    const saveToCoinFav = (items) => {
        localStorage.setItem('coin-favorites', JSON.stringify(items));
    }

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
        <section>
            <FavoriteList favoritesComponent={RemoveFavorite} handleFavoritesClick={removeFavoriteCoin} handleIdClick={(id)=> getCryptoDetails(id.id)} />
        </section>
    )
}

export default CryptoFavorite;