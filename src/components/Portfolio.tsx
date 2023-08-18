import React from 'react'
import FilRouge from "./FilRouge";
import Pokedex from "./Pokedex";
import Masques from "./Masques";
import RPG from "./RPG";
import {Container} from "react-bootstrap";

export default function Portfolio() {

    return (
        <Container>
            <Pokedex/>
            <RPG/>
            <Masques/>
            <FilRouge/>
        </Container>
    )
}
