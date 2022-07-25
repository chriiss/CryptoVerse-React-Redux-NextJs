import React from "react";
import Link from "next/link";
import jsonData from "../../data/Data.json";
import Styles from "../../styles/Home.module.scss";
import HomeIcon from "./navIcon/HomeIcon";
import FavoriteIcon from "./navIcon/FavoriteIcon";
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();
    const navHome  =  jsonData.navbarHome;
    const navFavorite  =  jsonData.navbarFavorite;


    return(
        <nav className={`${Styles.navbar} ${Styles.dFlex}`}>
            <ul className={`${Styles.navbar} ${Styles.dFlex}`}>
                <li className={router.asPath == "/" ? Styles.active : ""}><HomeIcon /><Link href={navHome.link}>{navHome.name}</Link></li>
                <li className={router.asPath == "/favoritePage" ? Styles.active : ""}><FavoriteIcon /><Link href={navFavorite.link}>{navFavorite.name}</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar;