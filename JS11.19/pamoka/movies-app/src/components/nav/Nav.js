import React from "react";
import Container from "react-bootstrap/Container";
import {NavLink} from "react-router-dom";


function Nav(){
    return(
        <Container>
            <nav>
                <ul>
                    <li><NavLink exact to="/">Pradinis</NavLink></li>
                    <li><NavLink to="/form/">Forma</NavLink></li>
                </ul>
            </nav>
        </Container>

    )
}

export default Nav;