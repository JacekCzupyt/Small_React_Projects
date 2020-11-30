import React from 'react'
import {Link} from "react-router-dom"


const StartPage = (props) => {
    return(
        <div>
            StartPage
            <br/>
            <Link to="/cars">Cars</Link>
            <br/>
            <Link to="/about">About</Link>
        </div>
    )
}

export default StartPage;