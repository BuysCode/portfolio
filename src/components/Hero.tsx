import Badge from "./Badge";
import Link from "next/link"
import { Download } from 'lucide-react'

export default function Hero() {
    return (
        <div id="#inicio" className="w-full flex md:flex-row justify-around items-center mt-20 flex-col-reverse">
            <div className="flex flex-col space-y-4 text-center md:text-justify mt-8">
                <div className="flex flex-row space-x-4">
                    <Badge text="HTML" color="red"/>
                    <Badge text="CSS" color="blue" />
                    <Badge color="yellow" text="JS" />
                    <Badge text="TypeScript" color="blue" />
                    <Badge text="NextJS" color="gray" />
                    <Badge text="Fastify" color="red" />
                    <Badge text="Go" color="blue" />
                    <Badge text="PostgreSQL" color="gray" />
                </div>
                <h1 className="font-bold text-3xl">Olá, meu nome é <span className="text-blue-500">Guilherme Buys</span></h1>
                <p>Desenvolvedor FullStack em busca da primeira oportunidade profissional na área</p>
                <div className="flex flex-row space-x-4 justify-center md:justify-start">
                    <Link href="/docs/CV.pdf" className="bg-blue-600 hover:bg-blue-700 rounded-lg text-lg items-center flex flex-row gap-4 p-4" download={'/docs/CV.pdf'}><Download></Download> Meu Currículo</Link>
                </div>
            </div>
            <img className="rounded-full border-4 border-blue-500 h-80 w-80 md:w-100 md:h-100" src={"https://avatars.githubusercontent.com/u/131329633?v=4"} alt="Foto de perfil Buys Code"/>
        </div>
    )
}