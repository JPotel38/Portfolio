import React from 'react'
import FilRouge from "./FilRouge";
import Pokedex from "./Pokedex";
import Masques from "./Masques";
import RPG from "./RPG";
import {Layout} from "antd";

export default function Portfolio() {

    return (
        <Layout>
            <Pokedex/>
            <RPG/>
            <Masques/>
            <FilRouge/>
        </Layout>
    )
}
