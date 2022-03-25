import React from "react";
import Header from "../header";
import Footer from "../footer";
import { Scrollbars } from 'react-custom-scrollbars';

const Layout=(props)=>{
    return(
        <React.Fragment>
            <Header/>
            <div>
            {props.children}
            </div>
        </React.Fragment>
    )
}

export default Layout