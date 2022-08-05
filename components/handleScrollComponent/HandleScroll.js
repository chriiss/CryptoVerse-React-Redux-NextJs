import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { addSticky } from '../../store/Slice';


const HandleScroll = (props) => {
    const dispatch = useDispatch();
    const handleScrollAction = () => {
        const scrollTop = window.scrollY;
        scrollTop >= 50 ? dispatch(addSticky(true)) : dispatch(addSticky(false));
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScrollAction);
        return () => window.removeEventListener('scroll', handleScrollAction);
    });
}

export default HandleScroll;