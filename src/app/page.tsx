import Image from "next/image";
import CTAButton from "@/components/cta-button";
import AnimatedLogoCloud from "@/components/logo-cloud";
import Navbar from "@/components/navbar";

import ccWebsite from "@/../public/websites/cloudclient_ws.png";
import mmWebsite from "@/../public/websites/minemass_ws.png";

import ccBranding from "@/../public/logos/cc-branding.webp";
import sdBranding from "@/../public/logos/simplydue_logo.webp";

import ccProduct from "@/../public/applications/cloudclient_app.png";
import sdProduct from "@/../public/applications/simplydue_app.png";
import SmallCTAButton from "@/components/small-cta-button";
import SmallerCTAButton from "@/components/smaller-cta-button";

import macosHand from "@/../public/macos_hand.webp";

import discordCircle from "@/../public/app_icons/discord_circle.webp";
import telegramCircle from "@/../public/app_icons/telegram_circle.webp";
import whatsappCircle from "@/../public/app_icons/whatsapp_circle.webp";

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
        <div className="flex flex-row justify-center items-center -mt-12">
          <div className="w-[25%] flex flex-col justify-center items-center gap-4 scale-[0.8]">
            <div className="top-0 left-0 w-full min-h-54 relative">
              <Image src={ccWebsite} alt="CloudClient" className="absolute bottom-0 left-10 w-48 aspect-video object-cover z-10 rotate-[7deg] rounded-2xl border-4 border-white shadow-slight" />
              <Image src={mmWebsite} alt="MineMass" className="absolute bottom-0 right-10 w-48 aspect-video object-cover rotate-[-7deg] rounded-2xl border-4 border-white -translate-y-10 shadow-slight" />
            </div>
            <h3 className="text-5xl text-fancy font-bold tracking-subtitle pr-1 mt-4 pb-2">Weboldalak</h3>
          </div>
          <div className="w-[25%] flex flex-col justify-center items-center gap-4 scale-[0.8]">
            <div className="top-0 left-0 w-full min-h-54 relative">
              <Image src={ccProduct} alt="CloudClient" className="absolute bottom-0 left-10 w-48 aspect-video object-cover rotate-[-7deg] rounded-2xl border-4 border-white shadow-slight" />
              <Image src={sdProduct} alt="MineMass" className="absolute bottom-0 right-10 w-48 aspect-video object-cover z-10 rotate-[7deg] rounded-2xl border-4 border-white -translate-y-10 shadow-slight" />
            </div>
            <h3 className="text-5xl text-fancy font-bold tracking-subtitle pr-1 pb-2 mt-4">Alkalmazások</h3>
          </div>
          <div className="w-[25%] flex flex-col justify-center items-center gap-4 scale-[0.8]">
            <div className="top-0 left-0 w-full min-h-54 relative">
              <Image src={sdBranding} alt="CloudClient" className="absolute bottom-0 left-10 w-48 aspect-video object-cover z-10 rotate-[-17deg] rounded-2xl border-4 border-white -translate-y-10 shadow-slight" />
              <Image src={ccBranding} alt="MineMass" className="absolute bottom-0 right-10 w-48 aspect-video object-cover rotate-[-7deg] rounded-2xl border-4 border-white shadow-slight" />
            </div>
            <h3 className="text-5xl text-fancy font-bold tracking-subtitle pr-1 mt-4 pb-2">Branding</h3>
          </div>
        </div>
      </section>

      <section className="mt-20 flex flex-col justify-center items-center gap-10 font-bold text-[56px] tracking-subtitle max-w-2xl text-center [line-height:60px]">
        <h2 className="text-fancy mb-5">Amiért a Vállalkozások Minket Választanak</h2>
        <div className="flex flex-row justify-between items-center gap-10">
          <div className="relative group overflow-hidden w-96 h-96 p-8 bg-white rounded-[42px] shadow-slighter flex flex-col justify-end items-start">
            <div className="absolute -top-40 left-0 w-full h-full shadow-[0_0_3px_2px_#3730a366] rounded-full bg-white flex justify-center items-center p-12">
              <div className="group-hover:animate-spin rotate-[-70deg] absolute top-0 mx-auto h-[150%] w-36 bg-white shadow-[0_0_20px_5px_#fff]"></div>
              <div className="w-full z-10 h-full shadow-[inset_0_0_40px_0px_#3730a344] rounded-full flex justify-center items-center">
                <SmallerCTAButton />
              </div>
              <Image src={macosHand} alt="Macos Hand" className="z-20 absolute bottom-10 group-hover:bottom-24 right-10 group-hover:right-24 w-14 group-hover:w-16 group-hover:rotate-[-20deg] rotate-[-10deg] object-cover  transition-all duration-1000 ease-out" />
            </div>
            <h3 className="text-[32px] font-bold tracking-subtitle text-fancy text-left z-10">Forgalomnövelés</h3>
            <p className="font-semibold text-gray text-[16px] tracking-text [line-height:1.4em] text-left z-10">A design-jaink nem csak jól néznek ki, de 200%-al több látogatót konvertálnak.</p>
          </div>
          <div className="relative w-96 h-96 px-8 py-5 bg-white rounded-[42px] shadow-slighter flex flex-col justify-start items-start">
            <div className="absolute -bottom-40 left-0 w-full h-full">
              <div className="absolute top-0 w-full h-full flex flex-row justify-between items-center px-8">
                <Image src={discordCircle} alt="Discord" className="w-15" />
                <Image src={telegramCircle} alt="Telegram" className="w-15 -translate-y-10" />
                <Image src={whatsappCircle} alt="Whatsapp" className="w-15" />
              </div>
            </div>
            <h3 className="text-[32px] font-bold z-10 tracking-subtitle text-fancy text-left">Könnyű Kommunikáció</h3>
            <p className="font-semibold text-gray text-[16px] tracking-text [line-height:1.4em] text-left">Az általad választott kommunikációs platformon, napi szinten.</p>
          </div>
          <div className="w-96 h-96 px-8 py-5 bg-white rounded-[42px] shadow-slighter flex flex-col justify-start items-start">
            <h3 className="text-[32px] font-bold tracking-subtitle text-fancy text-left">Prémium Minőség</h3>
            <p className="font-semibold text-gray text-[16px] tracking-text [line-height:1.4em] text-left">Teljes fókusz az összes projektünkre a pixel-perfect eredményekért.</p>
          </div>
        </div>
      </section>
      <section className="mt-28 flex flex-col justify-center items-center gap-10 font-bold text-[56px] tracking-subtitle w-5xl text-center [line-height:60px]">
        <h2 className="text-fancy mb-5 pr-1 pb-2">Akiknek Már Segítettünk</h2>
        <div className="flex flex-col justify-between items-center gap-10 w-full">
          <div className="relative group overflow-hidden w-full gap-4 h-96 p-8 bg-white rounded-[42px] shadow-slighter flex flex-row justify-between items-start">
            <div className="h-full w-1/2 bg-red-500 rounded-[24px]"></div>
            <div>
              <h3 className="text-[32px] font-bold tracking-subtitle text-fancy text-left z-10">Anyádnak</h3>
              <p className="font-semibold text-gray text-[16px] tracking-text [line-height:1.4em] text-left z-10">A design-jaink nem csak jól néznek ki, de 200%-al több látogatót konvertálnak.</p>
            </div>
          </div>
          <div className="relative group overflow-hidden w-full gap-4 h-96 p-8 bg-white rounded-[42px] shadow-slighter flex flex-row justify-between items-start">
          <div>
              <h3 className="text-[32px] font-bold tracking-subtitle text-fancy text-right z-10 pr-1">Forgalomnövelés</h3>
              <p className="font-semibold text-gray text-[16px] tracking-text [line-height:1.4em] text-right z-10">A design-jaink nem csak jól néznek ki, de 200%-al több látogatót konvertálnak.</p>
            </div>
            <div className="h-full w-1/2 bg-red-500 rounded-[24px]"></div>
            
          </div>
          <div className="relative group overflow-hidden w-full gap-4 h-96 p-8 bg-white rounded-[42px] shadow-slighter flex flex-row justify-between items-start">
            <div className="h-full w-1/2 bg-red-500 rounded-[24px]"></div>
            <div>
              <h3 className="text-[32px] font-bold tracking-subtitle text-fancy text-left z-10">Anyádnak</h3>
              <p className="font-semibold text-gray text-[16px] tracking-text [line-height:1.4em] text-left z-10">A design-jaink nem csak jól néznek ki, de 200%-al több látogatót konvertálnak.</p>
            </div>
          </div>
        </div>
      </section>



    </main>
  );
}
