'use client'

import { styled } from "styled-components"
import Image from "next/image"

export default function About() {
    return (
        <Wrapper>
           <main className="flex justify-center items-center text-yellow-300 p-16">
            <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h1>
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
    margin: 5%;

`