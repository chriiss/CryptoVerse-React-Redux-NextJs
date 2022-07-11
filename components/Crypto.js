import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cryptoData from "../pages/api/CryptoApi";
import { addCryptos, addFav } from "../store/Slice";
import { getFav } from '../store/Slice';
import SearchBox from './SearchBox';
import FilterList from './FilterList';
import CryptoList from './CryptoList';
import AddFavorite from './favoritesComponents/AddFavorite';
import RemoveFavorite from './favoritesComponents/RemoveFavorite';
import CryptoFavorite from './favoritesComponents/CryptoFavorite';



const Crypto = () => {
    const dispatch = useDispatch();
    const favorite = useSelector(getFav);

    const getCryptoData = async () => {
        await cryptoData
        .then(result => {
            dispatch(addCryptos(result.data))
        })
    }

    useEffect(() => {
        getCryptoData();
    })

    useEffect(() => {
		try {
            const coinFavorites = JSON.parse(localStorage.getItem('coin-favorites') || []);
		    dispatch(addFav((coinFavorites)));
        }catch(e){}
	},[]);

    const saveToCoinFav = (items) => {
		localStorage.setItem('coin-favorites', JSON.stringify(items));
	};

    const addFavoriteCoin = (coin) => {
        const newFavoriteList = [...favorite, coin];
        dispatch(addFav(newFavoriteList));
        saveToCoinFav(newFavoriteList);
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
            <SearchBox />
            <FilterList />
            <CryptoFavorite favoritesComponent={RemoveFavorite} handleFavoritesClick={removeFavoriteCoin} />
            <CryptoList favoritesComponent={AddFavorite} handleFavoritesClick={addFavoriteCoin} />
        </div>
    )

}

export default Crypto;