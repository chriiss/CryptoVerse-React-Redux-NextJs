import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSearch, addSuggestion, getSearch, getFav, getSuggestion, getSticky } from "../../../store/Slice";
import HandleScroll from "../../handleScrollComponent/HandleScroll";
import InputFav from "./inputFavComponent/InputFav";
import SuggestionsFav from "./suggestionsFavComponent/SuggestionsFav";
import Styles from "../../../styles/Home.module.scss";


const SearchBoxFav = () => {
    const query = useSelector(getSearch);
    const favorite = useSelector(getFav);
    const suggestions = useSelector(getSuggestion);
    const dispatch = useDispatch();
    const sticky = useSelector(getSticky);


    const filterSuggest = (text) => {
        dispatch(addSuggestion([]));
        dispatch(addSearch(text));
    }
    const filterSearch = (text) => {
        let matches = [];
        if(text.length > 0) {
            matches = favorite.filter((data) => {
               const regex = new RegExp(`${text}`, "gi");
               return data.name.match(regex) || data.symbol.match(regex);
            })
        }
        dispatch(addSuggestion(matches));
        dispatch(addSearch(text));
    }

    return (
        <div>
            <HandleScroll />
            <div className={`${sticky ? `${Styles.onScroll}` : ''}`}>
                <InputFav query={query} handleFilterSearch={(e) => filterSearch(e.target.value)} />
                <SuggestionsFav suggestions={suggestions} handleFilterSuggest={filterSuggest}/>
            </div>
        </div>
    )
}

export default SearchBoxFav;