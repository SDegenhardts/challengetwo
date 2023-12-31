'use client'

import { styled } from "styled-components"
import { TextEffect } from "./texteffect"
import {GiAmericanFootballBall} from "react-icons/gi"
import {GiAmericanFootballHelmet} from "react-icons/gi"

export default function About() {


    return (
        <Wrapper>
            <main className="flex justify-center items-center text-yellow-300 p-16">
                <GiAmericanFootballHelmet className={"text-[18em] left-64 text-white z-10 opacity-25 absolute"}/>
                <GiAmericanFootballBall className={"text-[16em] right-64 text-white z-10 opacity-25 absolute"}/>
                <TextEffect text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} className={"z-30"} />
            </main>
        </Wrapper>
    )
}

const Wrapper = styled.image`

    display: flex;
    justify-content: center;
    width: 1000px;
    height: 300px;
    background-color: #000000a2;
    margin: 7%;

`