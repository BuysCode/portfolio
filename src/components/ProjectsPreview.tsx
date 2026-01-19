import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";

export default function ProjectsPreview() {
    return (
        <div className="mt-20 px-8 w-full">
            <h2 className="text-2xl font-bold text-center">Projetos</h2>
            <div className="flex flex-col mt-10">
                <Link href={'/projects'} className="flex flex-row space-x-4 hover:underline hover:text-blue-600">Ver todos meus projetos <BiRightArrowAlt size={24} /></Link>
                <div className="grid grid-cols-1 md:grid-cols-3">
                </div>
            </div>
        </div>
    )
}