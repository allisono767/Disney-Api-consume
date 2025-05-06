import { Metadata } from "next"
import Image from "next/image"

type IData = {
    results: {
        name:string;
        films: string;
        _id: string;
    }[];
}

export const metadata: Metadata = {
    title: "Lista de Personagens RM",
    description: "Aplicação teste com consumo de api"
}

const ServerSide = async () => {

    const res = await fetch("https://api.disneyapi.dev/character");
    const data: IData = await res.json()

  return (
    <>
    <div>Server Side Page try</div>
    {data?.data.map((data, index) => {
        return(
            <div className="mb-20" key={index}>
                <Image src={data.imageUrl} alt={data.name} width={200} height={200}/>
                <h1>{data.name}</h1>
                <h2>{data._id}</h2>
                <p>{data.films}</p>
            </div>
        )
    })}
    </>
  )
}

export default ServerSide