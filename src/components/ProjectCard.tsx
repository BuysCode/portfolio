"use client"

import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import TagBadge from "./Badge";
import type { Project } from "../../types/projects";

export default function ProjectCard({ description, name, tags, link }: Project) {
    return (
        <Card className="py-4 px-2 border-gray-400 bg-gray-900">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">{name}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2 justify-between">
                <div className="flex flex-col space-y-2">
                    <div className="grid grid-cols-3 md:flex md:flex-row gap-4">
                        {tags.map((e) => (
                            <TagBadge key={e.key} color={e.color} text={e.text} />
                        ))}
                    </div>
                    <p>{description}</p>
                </div>
                <Image height={300} width={300} alt={`Imagem de apresentação: ${name}`} src={`/projects/images/${name}.png`} />
            </CardContent>
            <CardFooter>
                <Link className="bg-blue-600 hover:bg-blue-700 cursor-pointer p-4 rounded-lg flex flex-row gap-4 font-bold" target={"_blank"} href={link}>Visitar <ArrowRightIcon /></Link>
            </CardFooter>
        </Card>
    )
}