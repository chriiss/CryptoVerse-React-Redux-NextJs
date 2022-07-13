import React, { useEffect } from "react";
import Image from 'next/image';
import { useSelector, useDispatch } from "react-redux";
import { addSearch, addSuggestion, addHistory, getSearch, getAllCryptos, getSuggestion, getHistory } from "../../store/Slice";
import dataJson from "../../data/Data.json";


const SearchBox = (props) => {
    const query = useSelector(getSearch);
    const cryptoApi = useSelector(getAllCryptos);
    const suggestions = useSelector(getSuggestion);
    const history = useSelector(getHistory);
    const dispatch = useDispatch();

    useEffect(() => {
		try {
            const coinHistory = JSON.parse(localStorage.getItem('search-history'));
            dispatch(addHistory((coinHistory.slice(-5))));
        }catch(e){}
	}, []);

	const saveToSearch = (items) => {
		localStorage.setItem('search-history', JSON.stringify(items));
	};


    const filterSuggest = (text) => {
        dispatch(addSuggestion([]));
        dispatch(addSearch(text));
        const newSearchHistory = [...history, text];
        dispatch(addHistory(newSearchHistory.slice(-5)));
        saveToSearch(newSearchHistory);
    }
    const filterSearch = (text) => {
        let matches = [];
        if(text.length > 0) {
            matches = cryptoApi.filter((data) => {
               const regex = new RegExp(`${text}`, "gi");
               return data.name.match(regex) || data.symbol.match(regex);
            })
        }
        dispatch(addSuggestion(matches));
        dispatch(addSearch(text));
    }

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
                {dataJson.last}
                {history.map((item, i) =>
                    <div key={i}>{item} <span onClick={() => props.handleIdClick(item)}>More</span></div>
                )}
            </div>
        </div>
    )
}

export default SearchBox;