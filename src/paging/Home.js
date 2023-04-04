import React from "react";
import Navbar1 from "../components/navbar/Navbar1";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card1 from "../components/card/Card1";

function Home(){

    return(
        <div className="Home-wrapper">
            <Navbar1/>
            <div>
                <Card1/>
            </div>
        </div>
    )

}

export default Home