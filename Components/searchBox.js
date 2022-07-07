import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { useSelector, useDispatch } from "react-redux";
import { addSearch, addSuggestion, getSearch, getAllCryptos, getSuggestion } from "../store/slice";


const SearchBox = () => {
    const query = useSelector(getSearch);
    const cryptoApi = useSelector(getAllCryptos);
    const suggestions = useSelector(getSuggestion);
    const dispatch = useDispatch();
    const [history, setHistory] = useState();


    const filterSuggest = (text) => {
        saveToLocalStorage(dispatch(addSuggestion([])));
        saveToLocalStorage(dispatch(addSearch(text)));
    }
    const filterSearch = (text) => {
        let matches = [];
        if(text.length > 0) {
            matches = cryptoApi.filter((data) => {
               const regex = new RegExp(`${text}`, "gi");
               return data.name.match(regex) || data.symbol.match(regex);
            })
        }
        saveToLocalStorage(dispatch(addSuggestion(matches)));
        saveToLocalStorage(dispatch(addSearch(text)));
    }

    useEffect(() => {
		const history = window.localStorage.getItem('search-history');
        if (history) {
            setHistory(JSON.parse(history));
        }
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('search-history', JSON.stringify(items));
	};

    return (
        <div>
            <input type="search" value={query} placeholder="Enter Crypto" onChange={(e) => filterSearch(e.target.value)}/>
            {suggestions?.map((suggestion, i) =>
                <div key={i} onClick={()=>filterSuggest(suggestion.name, suggestion.symbol, suggestion.market_cap_rank)}>
                    <Image src={suggestion.image} width={25} height={25} alt="crypto_icon"/>
                    {suggestion.name}
                    {suggestion.symbol}
                    {"#" + suggestion.market_cap_rank}
                </div>
            )}
            <div>
                Last Search :
                {history?.payload}
            </div>
        </div>
    )
}

export default SearchBox;