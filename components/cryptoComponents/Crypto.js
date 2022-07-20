import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import axios from 'axios';
import { addFav, addDetail, getFav } from "../../store/Slice";
import SearchBox from '../searchBoxComponent/SearchBox';
import FilterList from '../filterComponent/FilterList';
import CryptoList from '../cryptoComponents/CryptoList';
import AddFavorite from '../favoritesComponents/AddFavorite';
import More from './moreComponents/More';



const Crypto = () => {
    const dispatch = useDispatch();
    const favorite = useSelector(getFav);
    const router = useRouter();

    const getCryptoDetails = async (id) => {
        await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`).then(result => dispatch(addDetail((result.data))));
        router.push('/detailsPage?name=' + id);
    }

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
        router.push('/favoritePage');
    }

    return (
        <div>
            <SearchBox handleIdClick={(id)=> getCryptoDetails(id.toLowerCase().replaceAll(' ', '-'))} />
            <FilterList />
            <CryptoList favoritesComponent={AddFavorite} moreComponent={More} handleFavoritesClick={addFavoriteCoin} handleIdClick={(id)=> getCryptoDetails(id.id)} />
        </div>
    )

}

export default Crypto;