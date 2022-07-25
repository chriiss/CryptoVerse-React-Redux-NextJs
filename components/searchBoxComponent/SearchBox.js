import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { useSelector, useDispatch } from "react-redux";
import { addSearch, addSuggestion, addHistory, getSearch, getAllCryptos, getSuggestion, getHistory, getVisibleHistory, addVisibleHistory } from "../../store/Slice";
import More from "../cryptoComponents/moreComponents/More";
import CloseHistory from "./closeHistoryComponent/CloseHistory";
import dataJson from "../../data/Data.json";
import Styles from "../../styles/Home.module.scss";


const SearchBox = (props) => {
    const query = useSelector(getSearch);
    const cryptoApi = useSelector(getAllCryptos);
    const suggestions = useSelector(getSuggestion);
    const history = useSelector(getHistory);
    const dispatch = useDispatch();
    const visibleHistory = useSelector(getVisibleHistory)

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

    const visibilityHistory = () => {
        dispatch(addVisibleHistory(true));
    }

    const hideHistory = () => {
        dispatch(addVisibleHistory(false));
    }

    return (
        <div>
            <input className={Styles.search} type="search" value={query} placeholder="Enter Crypto" onChange={(e) => filterSearch(e.target.value)} onClick={visibilityHistory} />
            {suggestions?.map((suggestion, i) =>
                <div className={`${Styles.suggest}`} key={i} onClick={()=>filterSuggest(suggestion.name, suggestion.symbol, suggestion.market_cap_rank)}>
                    <span>
                        <Image src={suggestion.image} width={25} height={25} alt="crypto_icon"/>
                    </span>
                    <span>
                        {suggestion.name}
                    </span>
                    <span>
                        {suggestion.symbol}
                    </span>
                    <span>
                        {"#" + suggestion.market_cap_rank}
                    </span>
                </div>
            )}
            {visibleHistory &&
                <div className={Styles.history}>
                <hr/>
                    <button type="button" className={Styles.closeHistory} onClick={hideHistory}><CloseHistory /></button>
                    <h4>{dataJson.last}</h4>
                    {history.map((item, i) =>
                        <div key={i}>{item} <span onClick={() => props.handleIdClick(item)}><More /></span></div>
                    )}
                </div>
            }
        </div>
    )
}

export default SearchBox;