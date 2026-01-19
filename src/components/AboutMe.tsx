import { Card, CardContent } from "./ui/card"

export default function AboutMe() {
    return (
        <div className="bg-gray-800 mt-20 p-4 space-y-4 items-center flex justify-center flex-col">
            <h2 className="text-center font-bold text-2xl">Sobre Mim</h2>
            <Card className="bg-gray-900 border-gray-500 w-300">
                <CardContent>Olá, Mundo!</CardContent>
            </Card>
        </div>
    )
}