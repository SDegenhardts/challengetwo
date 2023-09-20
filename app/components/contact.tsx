'use client'

import { styled } from "styled-components"
import { TextEffect } from "./texteffect"
import Link from "next/link"
import { BsWhatsapp } from "react-icons/bs"
import { GiAmericanFootballBall } from "react-icons/gi"
import { GiAmericanFootballHelmet } from "react-icons/gi"

export default function Contact() {
    return (
        <Wrapper>
            <main className="flex-col text-center gap-10 flex justify-center items-center text-yellow-300 p-16 text-4xl">
                <GiAmericanFootballHelmet className={"text-[8em] left-64 text-white z-10 opacity-25 absolute"} />
                <GiAmericanFootballBall className={"text-[7.11em] right-64 text-white z-10 opacity-25 absolute"} />
                <TextEffect text={"KONTAKTIEREN SIE UNS JEDERZEIT ÜBER UNSER WHATSAPP"} className={"z-30"} />
                <Link className="w-[120px] items-center flex justify-center text-black text-3xl border border-solid border-yellow-300 rounded-2xl p-3 bg-yellow-300 hover:scale-125 transition z-30" href={"https://chat.whatsapp.com/LEcsbaegRLjFMpAYfOYnH8"}><BsWhatsapp /></Link>
            </main>
        </Wrapper>
    )
}

const Wrapper = styled.text`

    display: flex;
    justify-content: center;
    width: 1000px;
    height: 300px;
    background-color: #000000a2;
    margin: 7%;

`
