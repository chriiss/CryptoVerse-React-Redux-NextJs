import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSearch, addSuggestion, addHistory, getSearch, getAllCryptos, getSuggestion, getHistory, getVisibleHistory, addVisibleHistory, getSticky } from "../../../store/Slice";
import HandleScroll from "../../handleScrollComponent/HandleScroll";
import InputHome from "./inputHomeComponent/InputHome";
import Suggestions from "./suggestionsComponent/Suggestions";
import More from "../../moreComponents/More";
import CloseHistory from "./closeHistoryComponent/CloseHistory";
import dataJson from "../../../data/Data.json";
import Styles from "../../../styles/Home.module.scss";


const SearchBox = (props) => {
    const query = useSelector(getSearch);
    const cryptoApi = useSelector(getAllCryptos);
    const suggestions = useSelector(getSuggestion);
    const history = useSelector(getHistory);
    const dispatch = useDispatch();
    const visibleHistory = useSelector(getVisibleHistory)
    const sticky = useSelector(getSticky);

    useEffect(() => {
		try {
            const coinHistory = JSON.parse(localStorage.getItem('search-history'));
            dispatch(addHistory((coinHistory.slice(-5))));
        }catch(e){}
	}, [dispatch]);

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
            <HandleScroll />
            <div className={`${sticky ? `${Styles.onScroll}` : ''}`}>
                <InputHome query={query} handleFilterSearch={(e) => filterSearch(e.target.value)} visibilityHistory={visibilityHistory} />
                <Suggestions suggestions={suggestions} handleFilterSuggest={filterSuggest}/>
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
        </div>
    )
}

export default SearchBox;