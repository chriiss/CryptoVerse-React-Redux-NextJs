import React from 'react';
import Styles from "../../../../styles/Home.module.scss";


const InputFav = (props) => {
    return(
        <>
            <input className={Styles.search} type="search" value={props.query} placeholder="Enter Crypto" onChange={props.handleFilterSearch} />
        </>
    )
}

export default InputFav;