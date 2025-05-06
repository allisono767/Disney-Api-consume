"use client"

import { useEffect, useState, Suspense } from "react";
import Image from "next/image"
import { api } from "@/constants/api";


interface IData {
    name: string;
    allies: string;
    enemies: string;
    videoGames: string;
    films: string;
    imageUrl: string;
}

const AxiosPage = () => {
const [data, setData] = useState<IData[]>([])

useEffect(() => {
    api.get(`/character`).then((res) => {
        console.log(res.data.data)
        setData(res.data.data)
    }).catch((error) => {
        console.log("deu ruim tua requisicao", error)
    })
}, [])


    return(
        <>
            <h1>Axios page client side</h1>
            <Suspense fallback={<div>Loading...</div>}>
             {data.map((item, index) => (
                <div key={index}>
                    <h2>{item.name}</h2>
                    <Image src={item.imageUrl} alt={item.name} width={200} height={200}/>
                    <p>{item.allies}</p>
                    <p>{item.enemies}</p>
                    <p>{item.films}</p>
                    <p>{item.videoGames}</p>

                </div>
             ))}
            </Suspense>
        </>
    )
}

export default AxiosPage