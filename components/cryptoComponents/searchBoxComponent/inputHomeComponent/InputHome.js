import React from 'react';
import Styles from "../../../../styles/Home.module.scss";


const InputHome = (props) => {
    return(
        <>
            <input className={Styles.search} type="search" value={props.query} placeholder="Enter Crypto" onChange={props.handleFilterSearch} onClick={props.visibilityHistory} />
        </>
    )
}

export default InputHome;