import React from "react";
import Image from 'next/image';
import { useSelector, useDispatch } from "react-redux";
import { addSearch, addSuggestion, getSearch, getAllCryptos, getSuggestion } from "../store/slice";


const SearchBox = () => {
    const query = useSelector(getSearch);
    const cryptoApi = useSelector(getAllCryptos);
    const suggestions = useSelector(getSuggestion);
    const dispatch = useDispatch();


    const filterSuggest = (text) => {
        dispatch(addSuggestion([]));
        dispatch(addSearch(text));
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
            {suggestions && suggestions.map((suggestion, i) =>
                <div key={i} onClick={()=>filterSuggest(suggestion.name, suggestion.symbol)}>
                    <Image src={suggestion.image} width={25} height={25} alt="crypto_icon"/>
                    {suggestion.name}
                    {suggestion.symbol}
                </div>
            )}
        </div>
    )
}

export default SearchBox;