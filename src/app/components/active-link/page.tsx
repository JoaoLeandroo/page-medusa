'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

interface linkActivo {
    href: string,
    name: string
}

export default function ActiveLink({ href, name }: linkActivo) {
    const pathnName = usePathname()
    const isActive = pathnName === href
    return(
            <Link href={href} className={`w-[120px] h-8 flex items-center justify-center text-white uppercase font-semibold p-3 ease-in-out duration-300  hover:bg-[#120A2A] hover:rounded-3xl
            ${isActive ? 'border-[2px] border-solid border-[#258A2F] rounded-3xl' : ''}
            `}>
                {name}
            </Link>
    )
}