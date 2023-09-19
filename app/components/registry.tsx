'use client'

import { styled } from "styled-components"
import Image from "next/image"
import { TextEffect } from "./texteffect"
import Link from "next/link"

export default function Registry() {
    return (
        <Wrapper>
            <main className="flex justify-center  text-yellow-300 p-16 text-6xl">
                <div className="flex gap-8 justify-center items-center flex-col w-[500px] h-[300]">
                    <TextEffect text={"REGISTRIEREN"} />
                    <input placeholder="Email" className="flex w-[400px] h-[50px] text-base bg-black border-none rounded-lg p-3"></input>
                    <input placeholder="Senha"className="flex w-[400px] h-[50px] text-base bg-black border-none rounded-lg p-3"></input>
                    <Link className=" text-black text-xl border border-solid border-yellow-300 rounded-2xl p-3 bg-yellow-300 hover:scale-110 transition" href={"/"}>REGISTRIEREN</Link>
                </div>
                <div className="flex gap-8 justify-center items-center flex-col w-[500px] h-[300]">
                    <TextEffect text={"ANMELDUNG"}/>
                    <input placeholder="Email" className="flex w-[400px] h-[50px] text-base bg-black border-none rounded-lg p-3"></input>
                    <input placeholder="Senha"className="flex w-[400px] h-[50px] text-base bg-black border-none rounded-lg p-3"></input>
                    <Link className=" text-black text-xl border border-solid border-yellow-300 rounded-2xl p-3 bg-yellow-300 hover:scale-110 transition" href={"/"}>ANMELDUNG</Link>
                </div>
            </main>
        </Wrapper>
    )
}

const Wrapper = styled.text`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1000px;
    height: 400px;
    background-color: #000000a2;
    margin: 7%;

`