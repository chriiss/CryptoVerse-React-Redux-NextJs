import React from "react";
import Link from "next/link";
import jsonData from "../../data/Data.json";

const Navbar = () => {
    const nav  =  jsonData.navbarComponent;


    return(
        <nav>
            <ul>
                {nav.map((data, i) => {
                    return(
                        <li key={i}><Link href={data.link}>{data.name}</Link></li>
                    )
                })

                }
            </ul>
        </nav>
    )
}
export default Navbar;