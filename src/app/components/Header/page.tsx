"use client"

import Image from "next/image";
import Link from "next/link";

export default function Header() {

  return (
    <header className="w-screen h-[80px] mt-[50px] relative z-50">
      <div className="max-w-[1920px] w-full h-full m-auto flex items-center">
        <div className="ml-14 h-[100px] max_1024:ml-5">
          <Image
            className="mt-[17px] max_1024:w-8"
            src={"/images/HAMBURGUER.svg"}
            width={42.2}
            height={38.2}
            alt="logo"
          />
        </div>
        <div className="ml-14 flex gap-5 max_1024:ml-3 max_1024:gap-1 max_1024:mt-10">
          <Link className="w-[120px] h-8 flex items-center justify-center text-white uppercase font-semibold p-3 ease-in-out duration-100 hover:bg-[#120A2A] hover:rounded-3xl hover:border-[3px] border-solid border-[#258A2F] rounded-3xl" href="/">Gallery</Link>
          <Link className="w-[120px] h-8 flex items-center justify-center text-white uppercase font-semibold p-3 ease-in-out duration-100 hover:bg-[#120A2A] hover:rounded-3xl hover:border-[3px] border-solid border-[#258A2F] rounded-3xl" href="/pages/about">About</Link>
          <Link className="w-[120px] h-8 flex items-center justify-center text-white uppercase font-semibold p-3 ease-in-out duration-100 hover:bg-[#120A2A] hover:rounded-3xl hover:border-[3px] border-solid border-[#258A2F] rounded-3xl" href="/pages/contacts">Contacts</Link>
        </div>
      </div>
    </header> 
  );
}
