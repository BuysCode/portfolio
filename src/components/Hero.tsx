import Badge from "./Badge";
import Link from "next/link"
import { Download } from 'lucide-react'

export default function Hero() {
    return (
        <div className="w-full mt-20 px-8 flex flex-col-reverse justify-around items-center md:flex-row">
            <div className="text-center md:text-justify space-y-2 mt-8 md:mt-0">
                <div className="grid grid-cols-3 space-y-4 md:flex md:flex-row space-x-2">
                    <Badge text="HTML" color="red"/>
                    <Badge text="CSS" color="blue"/>
                    <Badge text="JS" color="yellow"/>
                    <Badge text="TypeScript" color="blue"/>
                    <Badge text="NextJS" color="gray"/>
                    <Badge text="Fastify" color="red"/>
                    <Badge text="Go" color="blue" />
                    <Badge text="PostgreSQL" color="gray"/>
                </div>
                <h1 className="text-3xl font-bold">Olá, meu nome é <span className="text-blue-600">Guilherme Buys</span></h1>
                <p>Desenvolvedor FullStack em busca da primeira experiência profissional</p>
                <Link className="bg-blue-600 p-4 md:w-60 rounded-lg hover:bg-blue-700 cursor-pointer flex flex-row gap-4 justify-center md:justify-around w-full" href={'/docs/CV.pdf'} download={'/docs/CV.pdf'}><Download />Meu Currículo</Link>
            </div>
            <img className="rounded-full border-4 border-blue-500 h-80 w-80 md:w-100 md:h-100" src={"https://avatars.githubusercontent.com/u/131329633?v=4"} alt="Foto de perfil Buys Code" />
        </div>
    )
}