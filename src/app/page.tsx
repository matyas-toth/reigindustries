import Image from "next/image";
import CTAButton from "@/components/cta-button";
import AnimatedLogoCloud from "@/components/logo-cloud";
import Navbar from "@/components/navbar";

import ccWebsite from "@/../public/websites/cloudclient_ws.png";
import mmWebsite from "@/../public/websites/minemass_ws.png";

export default function Home() {
  return (
    <main className="container min-h-screen mx-auto flex flex-col justify-start items-center">
      <Navbar />
      <section className="flex flex-col  gap-10 mt-40">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="bg-white w-fit tracking-pill font-bold flex justify-center items-center px-4 py-1 rounded-full shadow-slighter"><div className="w-4 h-4 rounded-full [background:radial-gradient(35%_63%_at_50%_50%,rgb(99,102,241)_0%,rgb(67,56,202)_100%)] inline-block mr-2 animate-pulse duration-1000"></div><span className="text-[18px] text-fancy">Projekteket Várunk Májusra</span></div>
          <h1 className="text-7xl font-bold tracking-[-0.04em] text-fancy max-w-2xl text-center [line-height:1.1em]">
            Design, Ami Sikerre Viszi az Ötleteidet
          </h1>
          <h2 className="mt-4 mb-6 text-[18px] [line-height:27px] font-semibold tracking-text text-gray max-w-xs text-center">
            Világszintű design, ami meggyőz és forgalmat növel, amikor számít.
          </h2>
          <CTAButton />
        </div>
        <AnimatedLogoCloud />
        <div className="flex flex-row justify-center items-center -mt-10">
          <div className="w-[25%] flex flex-col justify-center items-center gap-4">
            <div className="top-0 left-0 w-full min-h-54 relative">
              <Image src={ccWebsite} alt="CloudClient" className="absolute bottom-0 left-10 w-48 aspect-video object-cover z-10 rotate-[7deg] rounded-2xl border-4 border-white shadow-slight" />
              <Image src={mmWebsite} alt="MineMass" className="absolute bottom-0 right-10 w-48 aspect-video object-cover rotate-[-7deg] rounded-2xl border-4 border-white -translate-y-10 shadow-slight" />
            </div>
            <h3 className="text-5xl text-fancy font-bold tracking-subtitle pr-1 mt-4">Weboldalak</h3>
          </div>
          <div className="w-[25%] flex flex-col justify-center items-center gap-4">
            <div className="top-0 left-0 w-full min-h-54 relative">
              <Image src={ccWebsite} alt="CloudClient" className="absolute bottom-0 left-10 w-48 aspect-video object-cover z-10 rotate-[7deg] rounded-2xl border-4 border-white shadow-slight" />
              <Image src={mmWebsite} alt="MineMass" className="absolute bottom-0 right-10 w-48 aspect-video object-cover rotate-[-7deg] rounded-2xl border-4 border-white -translate-y-10 shadow-slight" />
            </div>
            <h3 className="text-5xl text-fancy font-bold tracking-subtitle pr-1 mt-4">Digitális Termékek</h3>
          </div>
          <div className="w-[25%] flex flex-col justify-center items-center gap-4">
            <div className="top-0 left-0 w-full min-h-54 relative">
              <Image src={ccWebsite} alt="CloudClient" className="absolute bottom-0 left-10 w-48 aspect-video object-cover z-10 rotate-[7deg] rounded-2xl border-4 border-white shadow-slight" />
              <Image src={mmWebsite} alt="MineMass" className="absolute bottom-0 right-10 w-48 aspect-video object-cover rotate-[-7deg] rounded-2xl border-4 border-white -translate-y-10 shadow-slight" />
            </div>
            <h3 className="text-5xl text-fancy font-bold tracking-subtitle pr-1 mt-4">Branding</h3>
          </div>
        </div>
      </section>

      

    </main>
  );
}
