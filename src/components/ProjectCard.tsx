"use client"

import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import TagBadge from "./Badge";
import type { Project } from "../../types/projects";

export default function ProjectCard({ description, name, tags, link, github }: Project) {
    return (
        <Card className="py-4 px-2 border-gray-400 bg-gray-900 h-full flex flex-col">
            <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold line-clamp-2">{name}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2 justify-between grow">
                <div className="flex flex-col space-y-2 min-w-0">
                    <div className="flex flex-wrap gap-2">
                        {tags.map((e) => (
                            <TagBadge key={e.key} color={e.color} text={e.text} />
                        ))}
                    </div>
                    <p className="text-sm line-clamp-3 wrap-break-words">{description}</p>
                </div>
                <div className="w-full relative aspect-video overflow-hidden rounded-md mt-2">
                    <Image 
                        fill
                        alt={`Imagem de apresentação: ${name}`} 
                        src={`/projects/images/${name}.png`}
                        className="object-cover"
                    />
                </div>
            </CardContent>
            <CardFooter className="pt-2">
                <Link className="bg-blue-600 hover:bg-blue-700 cursor-pointer p-4 rounded-lg flex flex-row gap-4 font-bold w-full justify-center truncate" target={"_blank"} href={link}>Visitar <ArrowRightIcon size={20} /></Link>

                <Link className="bg-gray-600 hover:bg-gray-700 cursor-pointer p-4 rounded-lg flex flex-row gap-4 font-bold w-full justify-center truncate" target={"_blank"} href={github}>Código Fonte <ArrowRightIcon size={20} /></Link>
            </CardFooter>
        </Card>
    )
}