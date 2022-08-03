import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import axios from 'axios';
import { addFav, addDetail, getFav } from "../../store/Slice";
import SearchBox from './searchBoxComponent/SearchBox';
import FilterList from './filterComponent/FilterList';
import CryptoList from './cryptoList/CryptoList';
import AddFavorite from './addFavorite/AddFavorite';
import More from '../moreComponents/More';
import TopButton from '../topButtonComponent/TopButton';



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
	}, [dispatch]);

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
        <section>
            <SearchBox handleIdClick={(id)=> getCryptoDetails(id.toLowerCase().replaceAll(' ', '-'))} />
            <FilterList />
            <TopButton />
            <CryptoList favoritesComponent={AddFavorite} moreComponent={More} handleFavoritesClick={addFavoriteCoin} handleIdClick={(id)=> getCryptoDetails(id.id)} />
        </section>
    )

}

export default Crypto;