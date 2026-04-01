"use client"

import { Badge } from "./ui/badge";

interface IBadgeProps {
    text: string;
    color: "red" | "gray" | "blue" | "yellow" | "green";
}

export default function TagBadge({color, text}: IBadgeProps) {
    return (
        <Badge
            className={`h-12
                ${color === 'red' && "bg-red-500/20" || color === "blue" && "bg-blue-500/20" || color === "yellow" && "bg-yellow-500/20" || color === "gray" && "bg-gray-400/20" || color === "green" && "bg-green-500/20"}
                text-xs md:text-lg rounded-lg font-semibold text-center
            `}>
            {text}
        </Badge>
    )
}