import Image from "next/image"
import ActiveLink from "../active-link/page"

export  default function Header() {
    return(
        <header className="w-screen h-[80px] mt-[50px]">
            <div className="max-w-[1920px] w-full h-full m-auto flex items-center">
                <div className="ml-14 h-[100px]">
                    <Image
                        className="mt-[17px]"
                        src={'/images/HAMBURGUER.svg'}
                        width={42.2}
                        height={38.2}
                        alt="logo"
                    />
                </div>
                <div className="ml-14 flex gap-5">
                    <ActiveLink name="Gallery" href={"/"}/>
                    <ActiveLink name="About" href={"/pages/about"}/>
                    <ActiveLink name="Contacts" href={"/pages/contacts"}/>
                    {/* <button className="hover:border-[2px] border-solid border-[#258A2F] p-3 rounded-3xl">
                        <Link href={'/'} className="text-white uppercase font-semibold">About</Link>
                    </button>
                    <button className="hover:border-[2px] border-solid border-[#258A2F] p-3 rounded-3xl">
                        <Link href={'/'} className="text-white uppercase font-semibold">Contacts</Link>
                    </button> */}
                </div>
            </div>
        </header>
    )
}