import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cryptoData } from "../../pages/api/CryptoApi";
import { addCryptos, addFav, addDetail, getFav  } from "../../store/Slice";
import SearchBox from '../searchBoxComponent/SearchBox';
import FilterList from '../filterComponent/FilterList';
import CryptoList from '../cryptoComponents/CryptoList';
import AddFavorite from '../favoritesComponents/AddFavorite';
import { useRouter } from 'next/router';
import axios from 'axios';

const Crypto = () => {
    const dispatch = useDispatch();
    const favorite = useSelector(getFav);
    const router = useRouter();

    const getCryptoData = async () => {
        await cryptoData.then(result => dispatch(addCryptos(result.data)));
    }

    const getCryptoDetails = async (id) => {
        await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`).then(result => dispatch(addDetail((result.data))));
        router.push('/detailsPage?name=' + id);
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
        router.push('/favoritePage')
    }

    return (
        <div>
            <SearchBox handleIdClick={(id)=> getCryptoDetails(id.toLowerCase().replaceAll(' ', '-'))} />
            <FilterList />
            <CryptoList favoritesComponent={AddFavorite} handleFavoritesClick={addFavoriteCoin} handleIdClick={(id)=> getCryptoDetails(id.id)} />
        </div>
    )

}

export default Crypto;