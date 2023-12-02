import Image from "next/image";
import ActiveLink from "../activeLink/page";

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
          <ActiveLink name="Gallery" href={"/"} />
          <ActiveLink name="About" href={"/pages/about"} />
          <ActiveLink name="Contacts" href={"/pages/contacts"} />
        </div>
      </div>
    </header>
  );
}
