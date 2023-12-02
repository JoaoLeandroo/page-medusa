import Header from "./components/Header/page"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Header/>
      <main className="max-w-[1920px] w-full min-h-screen m-auto flex relative">
        <section className="mt-[100px] ml-28 max-w-[700px] w-1/2 relative z-20 max_1024:w-[90%] max_1024:ml-6">
          <div className="text-white font-bold max_1024:text-center">
            <p className="text-3xl max_1024:text-xl">OUR VERSION</p>
            <h1 className="mt-5 text-9xl max_1024:text-7xl">DESIGN</h1>
            <p className="text-3xl font-medium max_1024:text-lg">
              Our hobby is a modern and convenient defign, the
              key to sucessful communication with the client.
            </p>
          </div>

          <div className="flex items-center gap-4 max_1024:justify-center">
            <div className="w-[100px] h-[100px] mt-7 rounded-full flex items-center justify-center border-[3px] border-solid border-[#C4C4C4] ease-in-out duration-100 hover:border-[4px]">
              <button className="w-[60px] h-[60px] border-[3px] border-solid border-[#424242] rounded-full flex items-center justify-center">
                <Image
                  src={'images/Arrow 1.svg'}
                  width={30}
                  height={30}
                  alt="Arrow icon"
                />
              </button>
            </div>
            <p className="text-white mt-5 text-xl font-bold cursor-pointer">See More</p>
          </div>

          <div className="flex items-center text-white mt-10 gap-3 max_1024:justify-center">
            <span>01</span>
            <div className="bg-[#A4A4A4] w-56 h-1 rounded-sm">
              <div className="bg-white w-24 h-1 rounded-sm"></div>
            </div>
            <span>03</span>
          </div>
        </section>

        <section className="medusa-background h-full absolute top-[-135px] right-0 bg-green-400">
          <div className="w-[550px] h-[550px] rounded-full border-[2px] border-solid border-green-400 absolute top-[90px] left-[70px] max_1280:hidden">

          </div>
          <div>
            <Image
              className="relative max_1024:opacity-25 max_1024:mt-10 max_1280:opacity-25"
              src={'images/IMGmedusa.svg'}
              width={690}
              height={690}
              alt="Medusa"
            />
          </div>
        </section>

      </main>
    
    </>
  )
}
