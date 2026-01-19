import { Card, CardContent } from "./ui/card"

export default function AboutMe() {
    return (
        <div className="mt-20 p-4 space-y-12 items-center flex justify-center flex-col">
            <h2 className="text-center font-bold text-2xl">Sobre Mim</h2>
            <Card className="bg-gray-900 border-gray-500 w-100 md:w-300">
                <CardContent className="text-xl"><span className="text-3xl text-blue-500 font-bold">"</span>Comecei no mundo da programação no ano de 2021, quando me interessei pela criação de bots de interação para o Discord. Após 2 anos, ao perceber que não ganharia dinheiro com meu hobby na época, procurei por outra área que eu gostasse, foi, então que descobri o desenvolvimento web. No Ensino Médio entrei para uma escola com técnico em desenvolvimento web fullstack e mobile, sendo um dos destaque no começo por ter experiência prévia. Ao chegar no final do segundo ano e perceber que estava mais avançado que o nível de ensino do colégio, optei por sair da instituição. Atualmente, estou cursando Engenharia de Software pela UniRitter.<span className="text-3xl text-blue-500 font-bold">"</span></CardContent>
            </Card>
        </div>
    )
}