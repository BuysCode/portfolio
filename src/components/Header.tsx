import Link from "next/link";

export default function Header() {
    return (
        <header className="top-0 sticky z-10 bg-gray-950 text-white h-20 p-4 flex items-center justify-around border-b border-b-gray-600">
            <Link href={"/"}>
                <h1 className="font-bold text-2xl">Buys Code <span className="text-blue-500">{"</>"}</span></h1>
            </Link>

            <ul className="flex flex-row space-x-4">
                <li className="hover:bg-blue-500/10 p-2 rounded-lg hover:text-blue-500">
                    <Link href={"#inicio"}>Início</Link>
                </li>
                <li className="hover:bg-blue-500/10 p-2 rounded-lg hover:text-blue-500">
                    <Link href={"#about"}>Sobre</Link>
                </li>
                <li className="hover:bg-blue-500/10 p-2 rounded-lg hover:text-blue-500">
                    <Link href={'/projects'}>Projetos</Link>
                </li>
                <li className="hover:bg-blue-500/10 p-2 rounded-lg hover:text-blue-500">
                    <Link href={"#contact"}>Contato</Link>
                </li>
            </ul>
        </header>
    )
}