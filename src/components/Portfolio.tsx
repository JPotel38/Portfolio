import React from 'react'
import FilRouge from "./FilRouge";
import Pokedex from "./Pokedex";
import Masques from "./Masques";
import RPG from "./RPG";

export default function Portfolio() {

    return (
        <div id="projets">
            <Pokedex/>
            <RPG/>
            <Masques/>
            <FilRouge/>
        </div>
    )
}
