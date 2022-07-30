import React from 'react';
import dataJson from '../../../../data/Data.json';
import Styles from '../../../../styles/Home.module.scss';

const Loading = () => {
    return(
        <div className={Styles.loading}>
            <p className={Styles.spinnerText}>
                {dataJson.loading}...
            </p>
            <div className={Styles.spinner}></div>
        </div>
    )
}

export default Loading;