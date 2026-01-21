import Link from "next/link";

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

function SidebarLink({ href, toggleSidebar, text }: Omit<SidebarProps, 'isOpen'> & { href: string ; text: string ; }) {
    return (
        <li className="p-4 w-full border-b border-gray-700 cursor-pointer hover:bg-blue-500/20"><Link className="hover:underline hover:text-blue-500" href={href} onClick={toggleSidebar}>{text}</Link></li>
    )
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
    return (
            isOpen && (
            <div className={`fixed top-0 left-0 h-full w-64 bg-gray-950 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-50 md:hidden block transition-transform duration-300 ease-in-out border-r border-gray-700`}>
                <div className="p-4">
                    <h2 className="text-2xl font-bold mt-2 ml-4">BuysCode <span className="text-blue-500">{"</>"}</span></h2>
                    <ul className="mt-12">
                        <SidebarLink href="/#home" toggleSidebar={toggleSidebar} text="Início" />
                        <SidebarLink href="#about-me" toggleSidebar={toggleSidebar} text="Sobre Mim" />
                        <SidebarLink href="/projects" toggleSidebar={toggleSidebar} text="Projetos" />
                        <SidebarLink href="#contact" toggleSidebar={toggleSidebar} text="Contato" />
                    </ul>
                </div>
            </div>
        )
    )
}