"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu } from "../components/menu";
import logoLp from "./assets/images/logoLP.png";

export default function Home() {
  const [aparecerVideo, setAparecerVideo] = useState(false);
  const [aparecerBotao, setAparecerBotao] = useState(false);

  return (
    <>
      <div className="bg-[black] h-[100vh] flex items-center justify-center gap-[0vh]">
        <h1 className="text-[white] text-7xl font-bold">Disney API</h1>
      </div>
    </>
  );
}
