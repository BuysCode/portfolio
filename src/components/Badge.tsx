interface IBadgeProps {
    text: string;
    color: "red" | "gray" | "blue" | "yellow"
}

export default function Badge({color, text}: IBadgeProps) {
    return (
        <div
            className={`p-2
                ${color === 'red' && "bg-red-500/20" || color === "blue" && "bg-blue-500/20" || color === "yellow" && "bg-yellow-500/20" || color === "gray" && "bg-gray-400/20"}
                text-xs md:text-lg rounded-lg font-semibold
            `}>
            {text}
        </div>
    )
}