import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCryptos, getAllCryptos } from "../store/slice";
import dataJson from "../data/data.json";


const FilterList = () => {
    const cryptoApi = useSelector(getAllCryptos);
    const selectCrypto= dataJson.filterCryptos;
    const dispatch = useDispatch();

    const getSort = (sortBy) => {
        const sortTypes = {
            1: (a,b) => a.current_price - b.current_price,
            2: (a,b) => b.current_price - a.current_price,
            3: (a,b) => a.market_cap - b.market_cap,
            4: (a,b) => b.market_cap - a.market_cap,
            5: (a,b) => a.total_volume - b.total_volume,
            6: (a,b) => b.total_volume - a.total_volume,
            7: (a,b) => a.price_change_percentage_24h - b.price_change_percentage_24h,
            8: (a,b) => b.price_change_percentage_24h - a.price_change_percentage_24h,
        }


        const sortCryptoApi = [...cryptoApi].sort(sortTypes[sortBy]);
        dispatch(addCryptos(sortCryptoApi));
        console.log(sortCryptoApi);
    }

    return (
        <div>
            {selectCrypto.map((data, index) => {
                return(
                    <select key={index} onChange={(e) => getSort(e.target.value)}>
                        <option value="">{data.label}</option>
                        <option value={data.value}>{data.name}</option>
                        <option value={data.value_bis}>{data.name_bis}</option>
                    </select>
                )
            })}
        </div>
    )
}

export default FilterList;