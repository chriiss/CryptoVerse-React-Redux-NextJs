import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addButtonTop, getButtonTop } from "../../store/Slice";
import Styles from "../../styles/Home.module.scss";


const TopButton = () => {
    const isVisible = useSelector(getButtonTop);
    const dispatch = useDispatch();

    const topScroll = () => {
        window.scrollTo({top: 0,behavior: "smooth"});
    }

    const toggleVisibility = () => {
        window.pageYOffset > 500 ? dispatch(addButtonTop(true)) : dispatch(addButtonTop(false));
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    });

    return(
        <div>
            {isVisible && (
                <button onClick={topScroll} type="button" className={Styles.topButton}>
                    <svg fill="#ffffff" viewBox="0 0 320 512" width="30" title="angle-double-up">
                        <path d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z" />
                    </svg>
                </button>
            )}
        </div>
    )
}

export default TopButton;