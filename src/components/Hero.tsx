import Link from "next/link"
import { Download } from 'lucide-react'
import TagBadge from "./Badge";

export default function Hero() {
    return (
        <div id="home" className="w-full mt-20 px-8 flex flex-col-reverse justify-around items-center md:flex-row">
            <div className="text-center md:text-justify space-y-2 mt-8 md:mt-0">
                <div className="grid grid-cols-3 space-y-4 md:flex md:flex-row space-x-2">
                    <TagBadge text="HTML" color="red"/>
                    <TagBadge text="CSS" color="blue"/>
                    <TagBadge text="JS" color="yellow"/>
                    <TagBadge text="TypeScript" color="blue"/>
                    <TagBadge text="NextJS" color="gray"/>
                    <TagBadge text="Fastify" color="red"/>
                    <TagBadge text="Go" color="blue" />
                    <TagBadge text="PostgreSQL" color="gray"/>
                </div>
                <h1 className="text-3xl font-bold">Olá, meu nome é <span className="text-blue-600">Guilherme Buys</span></h1>
                <p>Desenvolvedor FullStack em busca da primeira experiência profissional</p>
                <Link className="bg-blue-600 p-4 md:w-60 rounded-lg hover:bg-blue-700 cursor-pointer flex flex-row gap-4 justify-center md:justify-around w-full" href={'/docs/Resume.pdf'} download={'/docs/Resume.pdf'}><Download />Meu Currículo</Link>
            </div>
            <img className="rounded-full border-4 border-blue-500 h-80 w-80 md:w-100 md:h-100" src={"https://avatars.githubusercontent.com/u/131329633?v=4"} alt="Foto de perfil Buys Code" />
        </div>
    )
}