import React from "react";
import Image from 'next/image';
import Styles from "../../../../styles/Home.module.scss";

const Suggestions = (props) => {
    return(
        <>
            {props.suggestions?.map((suggestion, i) =>
                <div className={`${Styles.suggest}`} key={i} onClick={()=>props.handleFilterSuggest(suggestion.name, suggestion.symbol, suggestion.market_cap_rank)}>
                    <span>
                        <Image src={suggestion.image} width={25} height={25} alt="crypto_icon"/>
                    </span>
                    <span>
                        {suggestion.name}
                    </span>
                    <span className={Styles.upperCase}>
                        {suggestion.symbol}
                    </span>
                    <span>
                        {"#" + suggestion.market_cap_rank}
                    </span>
                </div>
            )}
        </>
    )
}

export default Suggestions;