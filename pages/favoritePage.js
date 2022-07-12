import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CryptoFavorite from "../components/favoritesComponents/CryptoFavorite";
import RemoveFavorite from "../components/favoritesComponents/RemoveFavorite";
import { addFav, getFav } from "../store/Slice";



const FavoritePage = () => {
    const dispatch = useDispatch();
    const favorite = useSelector(getFav);

    useEffect(() => {
		try {
            const coinFavorites = JSON.parse(localStorage.getItem('coin-favorites') || []);
		    dispatch(addFav((coinFavorites)));
        }catch(e){}
	},[]);

    const saveToCoinFav = (items) => {
		localStorage.setItem('coin-favorites', JSON.stringify(items));
	};

    const removeFavoriteCoin = (coin) => {
        const newFavoriteList = favorite.filter(
			(favorite) => favorite.id !== coin.id
		);
        dispatch(addFav(newFavoriteList));
        saveToCoinFav(newFavoriteList);
    }
    return (
        <div>
            <CryptoFavorite favoritesComponent={RemoveFavorite} handleFavoritesClick={removeFavoriteCoin} />
        </div>
    )
}

export default FavoritePage;