'use client'

import { styled } from "styled-components"
import Image from "next/image"
import { TextEffect } from "./texteffect"
import Link from "next/link"
import {BsWhatsapp} from "react-icons/bs"

export default function Contact() {
    return (
        <Wrapper>
            <main className="flex-col text-center gap-10 flex justify-center items-center text-yellow-300 p-16 text-4xl">
                <TextEffect text={"KONTAKTIEREN SIE UNS JEDERZEIT ÜBER UNSER WHATSAPP"} />
                <Link className="w-[120px] items-center flex justify-center text-black text-3xl border border-solid border-yellow-300 rounded-2xl p-3 bg-yellow-300 hover:scale-125 transition" href={"/"}><BsWhatsapp/></Link>
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
