"use client"

import Image from "next/image";
import CTAButton from "@/components/cta-button";
import AnimatedLogoCloud from "@/components/logo-cloud";
import Navbar from "@/components/navbar";

import ccWebsite from "@/../public/websites/cloudclient_new_ws.png";
import mmWebsite from "@/../public/websites/minemass_ws.png";
import mvWebsite from "@/../public/websites/minevote_ws.png";
import deWebsite from "@/../public/websites/dialog_ws.png";

import ccBranding from "@/../public/logos/cc-branding.webp";
import sdBranding from "@/../public/logos/simplydue_logo.webp";

import ccProduct from "@/../public/applications/cloudclient_app.png";
import sdProduct from "@/../public/applications/simplydue_app.png";
import SmallCTAButton from "@/components/small-cta-button";
import SmallerCTAButton from "@/components/smaller-cta-button";

import macosHand from "@/../public/macos_hand.webp";

import phoneMockup from "@/../public/phone_mockup.png";

import reigLogoDark from "@/../public/reig_logo_dark.png";
import reigLogoLight from "@/../public/reig_logo_light.png";

import discordCircle from "@/../public/app_icons/discord_circle.webp";
import telegramCircle from "@/../public/app_icons/telegram_circle.webp";
import whatsappCircle from "@/../public/app_icons/whatsapp_circle.webp";
import { Check, ChevronDown } from "lucide-react";
import FullWidthCTAButton from "@/components/full-width-cta-button";
import WhiteCTAButton from "@/components/white-cta-button";
import FullWidthBuyButton from "@/components/full-width-buy-button";
import { useEffect, useState } from "react";
import Lenis from "lenis";




export default function Home() {
  const [openFAQs, setOpenFAQs] = useState<Set<number>>(new Set());

  const faqData = [
    {
      question: "Kikkel dolgoztok együtt?",
      answer: "Specialitásunk a SaaS-cégek, startupok, B2B, AI és marketing - de nyitottak vagyunk mindenki felé."
    },
    {
      question: "Mikor tudjátok elkezdeni a projektemet?",
      answer: "A projektedet akár még ma el tudjuk kezdeni - semmi csúszás, semmi szerződés."
    },
    {
      question: "Hogyan kommunikálunk?",
      answer: "Az általad választott kommunikációs platformon: Discord, Telegram, WhatsApp, Slack vagy email - bármi, ami neked kényelmes. Napi szintű kapcsolattartással biztosítjuk a projekt sikeres kivitelezését."
    },
    {
      question: "Milyen fajta design-okat készítetek?",
      answer: "Weboldalak, alkalmazások, logo design és teljes branding csomagok. Minden projektünk konvertálásra optimalizált és modern design elvek szerint készül."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQs(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      smoothWheel: true,
      orientation: 'vertical',
      touchMultiplier: 2,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])


  return (

    
    <main className="container min-h-screen mx-auto flex flex-col justify-start items-center">
      <Navbar />
      <section className="flex flex-col gap-10 mt-40 px-4 md:px-0">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="bg-white w-fit tracking-pill font-bold flex justify-center items-center px-4 py-1 rounded-full shadow-slighter"><div className="w-4 h-4 rounded-full [background:radial-gradient(35%_63%_at_50%_50%,rgb(99,102,241)_0%,rgb(67,56,202)_100%)] inline-block mr-2 animate-pulse duration-1000"></div><span className="text-sm md:text-[18px] text-fancy">Projekteket Várunk Májusra</span></div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-[-0.04em] text-fancy max-w-2xl text-center [line-height:1.1em]">
            Design, Ami Sikerre Viszi az Ötleteidet
          </h1>
          <h2 className="mt-4 mb-6 text-base md:text-[18px] [line-height:27px] font-semibold tracking-text text-gray max-w-xs text-center">
            Világszintű design, ami meggyőz és forgalmat növel, amikor számít.
          </h2>
          <CTAButton />
        </div>
        <AnimatedLogoCloud />
        <div className="flex flex-col md:flex-row justify-center items-center -mt-12">
          <div className="w-full md:w-[25%] flex flex-col justify-center items-center gap-4 scale-[0.8]">
            <div className="top-0 left-0 w-[50%] md:w-full min-h-54 relative">
              <Image src={ccWebsite} alt="CloudClient" className="absolute bottom-0 left-10 w-48 aspect-video object-cover z-10 rotate-[7deg] rounded-2xl border-4 border-white shadow-slight" />
              <Image src={mmWebsite} alt="MineMass" className="absolute bottom-0 right-10 w-48 aspect-video object-cover rotate-[-7deg] rounded-2xl border-4 border-white -translate-y-10 shadow-slight" />
            </div>
            <h3 className="text-3xl md:text-5xl text-fancy font-bold tracking-subtitle pr-1 mt-4 pb-2">Weboldalak</h3>
          </div>
          <div className="w-full md:w-[25%] flex flex-col justify-center items-center gap-4 scale-[0.8]">
            <div className="top-0 left-0 w-[50%] md:w-full min-h-54 relative">
              <Image src={ccProduct} alt="CloudClient" className="absolute bottom-0 left-10 w-48 aspect-video object-cover rotate-[-7deg] rounded-2xl border-4 border-white shadow-slight" />
              <Image src={sdProduct} alt="MineMass" className="absolute bottom-0 right-10 w-48 aspect-video object-cover z-10 rotate-[7deg] rounded-2xl border-4 border-white -translate-y-10 shadow-slight" />
            </div>
            <h3 className="text-3xl md:text-5xl text-fancy font-bold tracking-subtitle pr-1 pb-2 mt-4">Alkalmazások</h3>
          </div>
          <div className="w-full md:w-[25%] flex flex-col justify-center items-center gap-4 scale-[0.8]">
            <div className="top-0 left-0 w-[50%] md:w-full min-h-54 relative">
              <Image src={sdBranding} alt="CloudClient" className="absolute bottom-0 left-10 w-48 aspect-video object-cover z-10 md:rotate-[-17deg] rotate-[27deg] rounded-2xl border-4 border-white -translate-y-10 shadow-slight" />
              <Image src={ccBranding} alt="MineMass" className="absolute bottom-0 right-10 w-48 aspect-video object-cover rotate-[-7deg] rounded-2xl border-4 border-white shadow-slight" />
            </div>
            <h3 className="text-3xl md:text-5xl text-fancy font-bold tracking-subtitle pr-1 mt-4 pb-2">Branding</h3>
          </div>
        </div>
      </section>

      <section className="mt-20 flex flex-col justify-center items-center gap-10 font-bold text-4xl md:text-[56px] tracking-subtitle max-w-2xl text-center [line-height:1.1em] md:[line-height:60px] px-4 md:px-0">
        <h2 className="text-fancy mb-5">Amiért a Vállalkozások Minket Választanak</h2>
        <div id="benefits" className="flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="relative group overflow-hidden w-full md:w-96 h-96 p-8 bg-white rounded-[42px] shadow-slighter flex flex-col justify-end items-start">
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
          <div className="relative group w-full md:w-96 h-96 px-8 py-5 overflow-hidden bg-white rounded-[42px] shadow-slighter flex flex-col justify-start items-start">

            <div className="absolute -bottom-40 left-0 w-full h-full">

              <div className="absolute -bottom-28 left-0 w-full h-full flex justify-center items-end">
                <div className="absolute -left-20 bottom-0 bg-white w-36 h-36 z-20 -translate-y-56 blur-lg"></div>
                <div className="absolute -right-20 bottom-0 bg-white w-36 h-36 z-20 -translate-y-56 blur-lg"></div>
                <div className="w-[120%] h-[120%] border-2 border-dashed border-indigo-500 rounded-full"></div>
              </div>
              <div className="absolute -top-[6.5rem] w-full h-full flex flex-row justify-between items-center px-8 z-10">
                <Image src={discordCircle} alt="Discord" className="w-15 " />
                <Image src={telegramCircle} alt="Telegram" className="w-15 -translate-y-12 " />
                <Image src={whatsappCircle} alt="Whatsapp" className="w-15 " />
              </div>
              <div className="absolute -top-[6.5rem] w-full h-full flex flex-row justify-between items-center px-8 opacity-50">
                <Image src={discordCircle} alt="Discord" className="w-15 group-hover:animate-ping" />
                <Image src={telegramCircle} alt="Telegram" className="w-15 -translate-y-12 group-hover:animate-ping" />
                <Image src={whatsappCircle} alt="Whatsapp" className="w-15 group-hover:animate-ping" />
              </div>
            </div>
            <div className="absolute -bottom-22 left-0 w-full h-full flex justify-center items-end">
              <div className="absolute w-48 h-48 bg-fancy rounded-full translate-y-5 z-10 p-8 bg-fancy">
                <div className="w-full h-full bg-white rounded-full bg-fancy-4 shadow-[inset_0_0_30px_0px_#00000044]"></div>
              </div>
              <div className="w-40 h-40 bg-[#5355ed] rounded-full blur-sm hidden group-hover:block group-hover:animate-ping -translate-y-5 opacity-60"></div>


            </div>
            <h3 className="text-[32px] font-bold z-10 tracking-subtitle text-fancy text-left">Könnyű Kommunikáció</h3>
            <p className="font-semibold text-gray text-[16px] tracking-text [line-height:1.4em] text-left">Az általad választott kommunikációs platformon, napi szinten.</p>
          </div>
          <div className="w-full md:w-96 group overflow-hidden relative h-96 px-8 py-5 bg-white rounded-[42px] shadow-slighter flex flex-col justify-start items-start">
            <h3 className="text-[32px] font-bold tracking-subtitle text-fancy text-left">Prémium Minőség</h3>
            <p className="font-semibold text-gray text-[16px] tracking-text [line-height:1.4em] text-left">Teljes fókusz az összes projektünkre a pixel-perfect eredményekért.</p>
            <div className="absolute bottom-0 left-0 w-full h-full">
              <Image src={ccWebsite} alt="CloudClient" className="group-hover:rotate-[5deg] absolute bottom-0 left-0 aspect-video object-cove rounded-3xl -translate-x-[20%] translate-y-[0.5rem] transition-all duration-300 ease-in-out" />
              <Image src={mvWebsite} alt="MineVote" className="group-hover:rotate-[-5deg] absolute bottom-0 right-0 w-[85%] aspect-video object-cove rounded-3xl translate-x-[20%] translate-y-[2rem] border-8 border-white transition-all duration-300 ease-in-out" />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-28 flex flex-col justify-center items-center gap-10 font-bold text-4xl md:text-[56px] tracking-subtitle w-full lg:w-5xl text-center [line-height:1.1em] md:[line-height:60px] px-4 md:px-0">
        <h2 className="text-fancy mb-5 pr-1 pb-2">Akiknek Már Segítettünk</h2>
        <div className="flex flex-col justify-between items-center gap-10 w-full">
          <div id="projects" className="relative group overflow-hidden w-full gap-8 h-auto lg:h-96 p-8 bg-white rounded-[42px] shadow-slighter flex flex-col lg:flex-row justify-between items-start">
            <Image src={ccWebsite} alt="CloudClient" className="h-auto lg:h-full w-full lg:w-1/2 bg-white rounded-[24px] object-cover mb-4 lg:mb-0" />
            <div className="w-full lg:w-[50%]">
              <h3 className="text-[32px] font-bold tracking-subtitle text-fancy text-left z-10">CloudClient</h3>
              <div className="flex flex-row flex-wrap justify-start gap-2 items-center text-base tracking-tight text-gray">
                <div className="rounded-full bg-white shadow-[inset_0_0_10px_0px_#00000044] px-3 py-1">Design</div>
                <div className="rounded-full bg-white shadow-[inset_0_0_10px_0px_#00000044] px-3 py-1">Weboldal</div>
                <div className="rounded-full bg-white shadow-[inset_0_0_10px_0px_#00000044] px-3 py-1">Branding</div>
              </div>
              <p className="font-semibold text-gray text-[16px] tracking-text [line-height:1.4em] text-left z-10 mt-8">Megalkottuk a CloudClient teljes arculatát, designját és végül lefejlesztettük a weboldalát, ami jelenleg is elérhető a cloudclient.hu oldalon. Az új weboldaluk nem csak szemetgyönyörködtető, hanem 200%-al több látogatót konvertál és növeli a szolgáltatást igénybevevők számát is.</p>
            </div>
          </div>
          <div className="relative group overflow-hidden w-full gap-8 h-auto lg:h-96 p-8 bg-white rounded-[42px] shadow-slighter flex flex-col lg:flex-row justify-between items-start">
            <div className="w-full lg:w-[50%] order-2 lg:order-1">
              <h3 className="text-[32px] font-bold tracking-subtitle text-fancy text-left lg:text-right z-10 pr-1">Dialóg Egyesület</h3>
              <div className="flex flex-row flex-wrap justify-start lg:justify-end gap-2 items-center text-base tracking-tight text-gray">
                <div className="rounded-full bg-white shadow-[inset_0_0_10px_0px_#00000044] px-3 py-1">Design</div>
                <div className="rounded-full bg-white shadow-[inset_0_0_10px_0px_#00000044] px-3 py-1">Weboldal</div>
                <div className="rounded-full bg-white shadow-[inset_0_0_10px_0px_#00000044] px-3 py-1">Backend</div>
                <div className="rounded-full bg-white shadow-[inset_0_0_10px_0px_#00000044] px-3 py-1">Üzemeltetés</div>
              </div>
              <p className="font-semibold text-gray text-[16px] tracking-text [line-height:1.4em] text-left lg:text-right z-10 mt-8">A Magyarország egyik legfontosabb civil szervezete keresett fel minket azzal az igénnyel, hogy modernizáljuk a weboldalukat, ezáltal növelve a támogatók számát és több emberhez eljuttatva az egyesület tevékenységeit. Az EvoCampus csapatával kollaborációban egy modern frontendet és egy részletes backend rendszert (Content Management System) tudtunk átadni 2025 tavaszán a Dialóg Egyesület számára.</p>
            </div>
            <Image src={deWebsite} alt="Dialóg Egyesület" className="h-auto lg:h-full w-full lg:w-1/2 bg-white rounded-[24px] object-cover order-1 lg:order-2 mb-4 lg:mb-0"></Image>

          </div>
          <div className="relative group overflow-hidden w-full gap-8 h-auto lg:h-96 p-8 bg-white rounded-[42px] shadow-slighter flex flex-col lg:flex-row justify-between items-start">
            <Image src={mvWebsite} alt="MineVote" className="h-auto lg:h-full w-full lg:w-1/2 bg-white rounded-[24px] object-cover mb-4 lg:mb-0"></Image>
            <div className="w-full lg:w-[50%]">
              <h3 className="text-[32px] font-bold tracking-subtitle text-fancy text-left z-10">MineVote</h3>
              <div className="flex flex-row flex-wrap justify-start gap-2 items-center text-base tracking-tight text-gray">
                <div className="rounded-full bg-white shadow-[inset_0_0_10px_0px_#00000044] px-3 py-1">Design</div>
                <div className="rounded-full bg-white shadow-[inset_0_0_10px_0px_#00000044] px-3 py-1">Weboldal</div>
                <div className="rounded-full bg-white shadow-[inset_0_0_10px_0px_#00000044] px-3 py-1">Branding</div>
              </div>
              <p className="font-semibold text-gray text-[16px] tracking-text [line-height:1.4em] text-left z-10 mt-8">A MineVote, mint Magyarország jövendőbeli feltörekvő játékszerver-kereső és hirdető oldala egy pontos, modern és nagy konvertálási rátával rendelkező webdesign-t igényelt, amit csapatunk 1 hét alatt elkészített és üzembe is helyezett.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-28 flex flex-col justify-center items-center gap-10 font-bold text-4xl md:text-[56px] tracking-subtitle w-full md:w-5xl text-center [line-height:1.1em] md:[line-height:60px] px-4 md:px-0">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.06em] text-fancy-2 max-w-3xl text-center [line-height:1.1em] pb-3 pt-2">
            Átlátható Árazás Meglepetések Nélkül
          </h1>
          <h2 id="pricing" className="mt-4 mb-6 text-base md:text-[18px] [line-height:27px] font-semibold tracking-text text-gray max-w-xl text-center">
            Átlátható árképzés, rejtett költségek nélkül. Professzionális weboldal, logó vagy vizuális arculat – a költségvetésedhez igazítva.
          </h2>
          <div></div>

        </div>
  
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10">
          <div className="relative overflow-hidden w-full md:w-96 h-auto px-8 py-5 bg-white rounded-[42px] shadow-slighter flex flex-col justify-start items-start">
            <div className="absolute top-7 -right-23">

              <div className="select-none rotate-[35deg] cursor-pointer w-80 relative bg-gradient-to-b from-[#6366f1] to-[#3730a3] rounded-[47.86px] px-[6.5px] pt-[5px] pb-[6.5px] shadow-slight group transition-all duration-300">
                <div className="[background:radial-gradient(35%_63%_at_50%_50%,rgb(99,102,241)_0%,rgb(67,56,202)_100%)] rounded-[54.69px] tracking-text text-[18px] [line-height:2.3em] font-semibold text-white px-[20px] py-[0px]  transition-all duration-300">
                  Legnépszerűbb
                </div>
              </div>

            </div>
            <h3 className="text-[32px] font-semibold z-10 tracking-subtitle text-fancy-2 text-left">Landing</h3>
            <h2 className="text-5xl md:text-[70px] font-bold tracking-subtitle text-fancy-2 text-left">45.000 HUF</h2>
            <div className="flex flex-col justify-start items-start text-gray text-sm mt-8 gap-2 w-full">
              <div className="flex flex-row justify-start items-center gap-2">
                <div className="select-none w-fit relative bg-gradient-to-b from-[#6366f1] to-[#3730a3] rounded-[47.86px] px-[3px] pt-[3px] pb-[3px]  shadow-slight group transition-all duration-300">
                  <div className="[background:radial-gradient(35%_63%_at_50%_50%,rgb(99,102,241)_0%,rgb(67,56,202)_100%)] rounded-[54.69px] tracking-text text-[18px] font-semibold text-white px-[4px] py-[4px] transition-all duration-300">
                    <Check strokeWidth={3} size={12}></Check>
                  </div>
                </div>
                <p className="text-gray font-semibold text-lg -tracking-[0.04em] -translate-y-[1px]">3 Design Koncepció</p>
              </div>
              <div className="flex flex-row justify-start items-center gap-2">
                <div className="select-none w-fit relative bg-gradient-to-b from-[#6366f1] to-[#3730a3] rounded-[47.86px] px-[3px] pt-[3px] pb-[3px]  shadow-slight group transition-all duration-300">
                  <div className="[background:radial-gradient(35%_63%_at_50%_50%,rgb(99,102,241)_0%,rgb(67,56,202)_100%)] rounded-[54.69px] tracking-text text-[18px] font-semibold text-white px-[4px] py-[4px] transition-all duration-300">
                    <Check strokeWidth={3} size={12}></Check>
                  </div>
                </div>
                <p className="text-gray font-semibold text-lg -tracking-[0.04em] -translate-y-[1px]">Végtelen Módosítás</p>
              </div>
              <div className="flex flex-row justify-start items-center gap-2">
                <div className="select-none w-fit relative bg-gradient-to-b from-[#6366f1] to-[#3730a3] rounded-[47.86px] px-[3px] pt-[3px] pb-[3px]  shadow-slight group transition-all duration-300">
                  <div className="[background:radial-gradient(35%_63%_at_50%_50%,rgb(99,102,241)_0%,rgb(67,56,202)_100%)] rounded-[54.69px] tracking-text text-[18px] font-semibold text-white px-[4px] py-[4px] transition-all duration-300">
                    <Check strokeWidth={3} size={12}></Check>
                  </div>
                </div>
                <p className="text-gray font-semibold text-lg -tracking-[0.04em] -translate-y-[1px]">1 Főoldal (Max. 12 szekció)</p>
              </div>
              <div className="flex flex-row justify-start items-center gap-2">
                <div className="select-none w-fit relative bg-gradient-to-b from-[#6366f1] to-[#3730a3] rounded-[47.86px] px-[3px] pt-[3px] pb-[3px]  shadow-slight group transition-all duration-300">
                  <div className="[background:radial-gradient(35%_63%_at_50%_50%,rgb(99,102,241)_0%,rgb(67,56,202)_100%)] rounded-[54.69px] tracking-text text-[18px] font-semibold text-white px-[4px] py-[4px] transition-all duration-300">
                    <Check strokeWidth={3} size={12}></Check>
                  </div>
                </div>
                <p className="text-gray font-semibold text-lg -tracking-[0.04em] -translate-y-[1px]">Konvertálásra Optimalizált</p>
              </div>
              <div className="flex flex-row justify-start items-center gap-2">
                <div className="select-none w-fit relative bg-gradient-to-b from-[#6366f1] to-[#3730a3] rounded-[47.86px] px-[3px] pt-[3px] pb-[3px]  shadow-slight group transition-all duration-300">
                  <div className="[background:radial-gradient(35%_63%_at_50%_50%,rgb(99,102,241)_0%,rgb(67,56,202)_100%)] rounded-[54.69px] tracking-text text-[18px] font-semibold text-white px-[4px] py-[4px] transition-all duration-300">
                    <Check strokeWidth={3} size={12}></Check>
                  </div>
                </div>
                <p className="text-gray font-semibold text-lg -tracking-[0.04em] -translate-y-[1px]">15 Napos Határidő</p>
              </div>
              <div className="flex flex-row justify-start items-center gap-2">
                <div className="select-none w-fit relative bg-gradient-to-b from-[#6366f1] to-[#3730a3] rounded-[47.86px] px-[3px] pt-[3px] pb-[3px]  shadow-slight group transition-all duration-300">
                  <div className="[background:radial-gradient(35%_63%_at_50%_50%,rgb(99,102,241)_0%,rgb(67,56,202)_100%)] rounded-[54.69px] tracking-text text-[18px] font-semibold text-white px-[4px] py-[4px] transition-all duration-300">
                    <Check strokeWidth={3} size={12}></Check>
                  </div>
                </div>
                <p className="text-gray font-semibold text-lg -tracking-[0.04em] -translate-y-[1px]">Animációk és Motion Design</p>
              </div>
              <div className="flex flex-row justify-start items-center gap-2 mb-4">
                <div className="select-none w-fit relative bg-gradient-to-b from-[#6366f1] to-[#3730a3] rounded-[47.86px] px-[3px] pt-[3px] pb-[3px]  shadow-slight group transition-all duration-300">
                  <div className="[background:radial-gradient(35%_63%_at_50%_50%,rgb(99,102,241)_0%,rgb(67,56,202)_100%)] rounded-[54.69px] tracking-text text-[18px] font-semibold text-white px-[4px] py-[4px] transition-all duration-300">
                    <Check strokeWidth={3} size={12}></Check>
                  </div>
                </div>
                <p className="text-gray font-semibold text-lg -tracking-[0.04em] -translate-y-[1px]">NextJS Forráskód</p>
              </div>
              <FullWidthCTAButton />
            </div>
          </div>
          <div className="relative w-full md:w-96 h-auto px-8 py-5 bg-white rounded-[42px] shadow-slighter flex flex-col justify-start items-start">
            <div className="absolute -bottom-40 left-0 w-full h-full">

            </div>
            <h3 className="text-[32px] font-semibold z-10 tracking-subtitle text-fancy-2 text-left">Multipage</h3>
            <h2 className="text-5xl md:text-[70px] font-bold tracking-subtitle text-fancy-2 text-left">91.300+ HUF</h2>
            <div className="flex flex-col justify-start items-start text-gray text-sm mt-8 gap-2 w-full">
              <div className="flex flex-row justify-start items-center gap-2">
                <div className="select-none w-fit relative bg-gradient-to-b from-[#6366f1] to-[#3730a3] rounded-[47.86px] px-[3px] pt-[3px] pb-[3px]  shadow-slight group transition-all duration-300">
                  <div className="[background:radial-gradient(35%_63%_at_50%_50%,rgb(99,102,241)_0%,rgb(67,56,202)_100%)] rounded-[54.69px] tracking-text text-[18px] font-semibold text-white px-[4px] py-[4px] transition-all duration-300">
                    <Check strokeWidth={3} size={12}></Check>
                  </div>
                </div>
                <p className="text-gray font-semibold text-lg -tracking-[0.04em] -translate-y-[1px]">Világszintű Design</p>
              </div>
              <div className="flex flex-row justify-start items-center gap-2">
                <div className="select-none w-fit relative bg-gradient-to-b from-[#6366f1] to-[#3730a3] rounded-[47.86px] px-[3px] pt-[3px] pb-[3px]  shadow-slight group transition-all duration-300">
                  <div className="[background:radial-gradient(35%_63%_at_50%_50%,rgb(99,102,241)_0%,rgb(67,56,202)_100%)] rounded-[54.69px] tracking-text text-[18px] font-semibold text-white px-[4px] py-[4px] transition-all duration-300">
                    <Check strokeWidth={3} size={12}></Check>
                  </div>
                </div>
                <p className="text-gray font-semibold text-lg -tracking-[0.04em] -translate-y-[1px]">3 Design Koncepció</p>
              </div>
              <div className="flex flex-row justify-start items-center gap-2">
                <div className="select-none w-fit relative bg-gradient-to-b from-[#6366f1] to-[#3730a3] rounded-[47.86px] px-[3px] pt-[3px] pb-[3px]  shadow-slight group transition-all duration-300">
                  <div className="[background:radial-gradient(35%_63%_at_50%_50%,rgb(99,102,241)_0%,rgb(67,56,202)_100%)] rounded-[54.69px] tracking-text text-[18px] font-semibold text-white px-[4px] py-[4px] transition-all duration-300">
                    <Check strokeWidth={3} size={12}></Check>
                  </div>
                </div>
                <p className="text-gray font-semibold text-lg -tracking-[0.04em] -translate-y-[1px]">Végtelen Kérés és Módosítás</p>
              </div>
              <div className="flex flex-row justify-start items-center gap-2">
                <div className="select-none w-fit relative bg-gradient-to-b from-[#6366f1] to-[#3730a3] rounded-[47.86px] px-[3px] pt-[3px] pb-[3px]  shadow-slight group transition-all duration-300">
                  <div className="[background:radial-gradient(35%_63%_at_50%_50%,rgb(99,102,241)_0%,rgb(67,56,202)_100%)] rounded-[54.69px] tracking-text text-[18px] font-semibold text-white px-[4px] py-[4px] transition-all duration-300">
                    <Check strokeWidth={3} size={12}></Check>
                  </div>
                </div>
                <p className="text-gray font-semibold text-lg -tracking-[0.04em] -translate-y-[1px]">Dedikált Senior Designer</p>
              </div>
              <div className="flex flex-row justify-start items-center gap-2">
                <div className="select-none w-fit relative bg-gradient-to-b from-[#6366f1] to-[#3730a3] rounded-[47.86px] px-[3px] pt-[3px] pb-[3px]  shadow-slight group transition-all duration-300">
                  <div className="[background:radial-gradient(35%_63%_at_50%_50%,rgb(99,102,241)_0%,rgb(67,56,202)_100%)] rounded-[54.69px] tracking-text text-[18px] font-semibold text-white px-[4px] py-[4px] transition-all duration-300">
                    <Check strokeWidth={3} size={12}></Check>
                  </div>
                </div>
                <p className="text-gray font-semibold text-lg -tracking-[0.04em] -translate-y-[1px]">Maximális Konverzió</p>
              </div>
              <div className="flex flex-row justify-start items-center gap-2">
                <div className="select-none w-fit relative bg-gradient-to-b from-[#6366f1] to-[#3730a3] rounded-[47.86px] px-[3px] pt-[3px] pb-[3px]  shadow-slight group transition-all duration-300">
                  <div className="[background:radial-gradient(35%_63%_at_50%_50%,rgb(99,102,241)_0%,rgb(67,56,202)_100%)] rounded-[54.69px] tracking-text text-[18px] font-semibold text-white px-[4px] py-[4px] transition-all duration-300">
                    <Check strokeWidth={3} size={12}></Check>
                  </div>
                </div>
                <p className="text-gray font-semibold text-lg -tracking-[0.04em] -translate-y-[1px]">3 Oldal az Árban</p>
              </div>
              <div className="flex flex-row justify-start items-center gap-2 mb-4">
                <div className="select-none w-fit relative bg-gradient-to-b from-[#6366f1] to-[#3730a3] rounded-[47.86px] px-[3px] pt-[3px] pb-[3px]  shadow-slight group transition-all duration-300">
                  <div className="[background:radial-gradient(35%_63%_at_50%_50%,rgb(99,102,241)_0%,rgb(67,56,202)_100%)] rounded-[54.69px] tracking-text text-[18px] font-semibold text-white px-[4px] py-[4px] transition-all duration-300">
                    <Check strokeWidth={3} size={12}></Check>
                  </div>
                </div>
                <p className="text-gray font-semibold text-lg -tracking-[0.04em] -translate-y-[1px]">Kiváló Animációk</p>
              </div>
              <FullWidthCTAButton />
            </div>
          </div>
          <div className="relative w-full md:w-96 h-auto px-8 py-5 bg-white rounded-[42px] shadow-slighter flex flex-col justify-start items-start">
            <div className="absolute -bottom-40 left-0 w-full h-full">

            </div>
            <h3 className="text-[32px] font-semibold z-10 tracking-subtitle text-fancy-2 text-left">Logo Design</h3>
            <h2 className="text-5xl md:text-[70px] font-bold tracking-subtitle text-fancy-2 text-left">33.000 HUF</h2>
            <div className="flex flex-col justify-start items-start text-gray text-sm mt-8 gap-2 w-full">
              <div className="flex flex-row justify-start items-center gap-2">
                <div className="select-none w-fit relative bg-gradient-to-b from-[#6366f1] to-[#3730a3] rounded-[47.86px] px-[3px] pt-[3px] pb-[3px]  shadow-slight group transition-all duration-300">
                  <div className="[background:radial-gradient(35%_63%_at_50%_50%,rgb(99,102,241)_0%,rgb(67,56,202)_100%)] rounded-[54.69px] tracking-text text-[18px] font-semibold text-white px-[4px] py-[4px] transition-all duration-300">
                    <Check strokeWidth={3} size={12}></Check>
                  </div>
                </div>
                <p className="text-gray font-semibold text-lg -tracking-[0.04em] -translate-y-[1px]">Egyedi, Emlékezetes Logo</p>
              </div>
              <div className="flex flex-row justify-start items-center gap-2">
                <div className="select-none w-fit relative bg-gradient-to-b from-[#6366f1] to-[#3730a3] rounded-[47.86px] px-[3px] pt-[3px] pb-[3px]  shadow-slight group transition-all duration-300">
                  <div className="[background:radial-gradient(35%_63%_at_50%_50%,rgb(99,102,241)_0%,rgb(67,56,202)_100%)] rounded-[54.69px] tracking-text text-[18px] font-semibold text-white px-[4px] py-[4px] transition-all duration-300">
                    <Check strokeWidth={3} size={12}></Check>
                  </div>
                </div>
                <p className="text-gray font-semibold text-lg -tracking-[0.04em] -translate-y-[1px]">3 Módosítás</p>
              </div>
              <div className="flex flex-row justify-start items-center gap-2">
                <div className="select-none w-fit relative bg-gradient-to-b from-[#6366f1] to-[#3730a3] rounded-[47.86px] px-[3px] pt-[3px] pb-[3px]  shadow-slight group transition-all duration-300">
                  <div className="[background:radial-gradient(35%_63%_at_50%_50%,rgb(99,102,241)_0%,rgb(67,56,202)_100%)] rounded-[54.69px] tracking-text text-[18px] font-semibold text-white px-[4px] py-[4px] transition-all duration-300">
                    <Check strokeWidth={3} size={12}></Check>
                  </div>
                </div>
                <p className="text-gray font-semibold text-lg -tracking-[0.04em] -translate-y-[1px]">Forrásfileok</p>
              </div>
              <div className="flex flex-row justify-start items-center gap-2">
                <div className="select-none w-fit relative bg-gradient-to-b from-[#6366f1] to-[#3730a3] rounded-[47.86px] px-[3px] pt-[3px] pb-[3px]  shadow-slight group transition-all duration-300">
                  <div className="[background:radial-gradient(35%_63%_at_50%_50%,rgb(99,102,241)_0%,rgb(67,56,202)_100%)] rounded-[54.69px] tracking-text text-[18px] font-semibold text-white px-[4px] py-[4px] transition-all duration-300">
                    <Check strokeWidth={3} size={12}></Check>
                  </div>
                </div>
                <p className="text-gray font-semibold text-lg -tracking-[0.04em] -translate-y-[1px]">10 Napos Határidő</p>
              </div>
              <div className="flex flex-row justify-start items-center gap-2 mb-4">
                <div className="select-none w-fit relative bg-gradient-to-b from-[#6366f1] to-[#3730a3] rounded-[47.86px] px-[3px] pt-[3px] pb-[3px]  shadow-slight group transition-all duration-300">
                  <div className="[background:radial-gradient(35%_63%_at_50%_50%,rgb(99,102,241)_0%,rgb(67,56,202)_100%)] rounded-[54.69px] tracking-text text-[18px] font-semibold text-white px-[4px] py-[4px] transition-all duration-300">
                    <Check strokeWidth={3} size={12}></Check>
                  </div>
                </div>
                <p className="text-gray font-semibold text-lg -tracking-[0.04em] -translate-y-[1px]">Gyakori Egyeztetés</p>
              </div>
              
              <FullWidthBuyButton />
            </div>
          </div>
        </div>
      </section>
      <section id="faq" className="mt-28 flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start gap-10 font-bold text-4xl md:text-[56px] tracking-subtitle w-full lg:w-6xl text-center md:text-left [line-height:1.1em] md:[line-height:60px] px-4 md:px-0">
        <div className="flex flex-col justify-center items-center lg:items-start lg:justify-start">
          <h2 className="font-semibold text-6xl md:text-[85px] text-fancy-3 [line-height:1.1em] md:[line-height:85px]">Kérdések?</h2>
          <h2 className="font-semibold text-6xl md:text-[85px] text-fancy-3 [line-height:1.1em] md:[line-height:85px]">Válaszolunk.</h2>
          <p className="text-gray text-lg md:text-xl text-center lg:text-left tracking-pill [line-height:25px] font-medium mt-5 max-w-md">Valami más érdekel? Küldj nekünk egyszerűen egy emailt a <a href="mailto:hello@reigindustries.com" className="text-[#312e81] font-semibold">hello@reigindustries.com</a> címre</p>
        </div>
        <div className="flex flex-col gap-4 justify-start items-center text-2xl font-medium tracking-pill w-full md:w-[50%] text-left">
          {faqData.map((faq, index) => {
            const isOpen = openFAQs.has(index);
            return (
              <div 
                key={index} 
                className="bg-white shadow-slighter rounded-3xl px-8 py-6 w-full cursor-pointer transition-all duration-500 ease-in-out hover:shadow-slight"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex flex-row justify-between items-center">
                  <span className="text-fancy-3">{faq.question}</span>
                  <ChevronDown 
                    size={30} 
                    className={`transform transition-transform duration-500 ease-in-out ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`} 
                  />
                </div>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
                  }`}
                >
                  <p className="text-gray text-lg text-left tracking-pill [line-height:24px] font-semibold max-w-md">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="mt-28 flex flex-row justify-between items-start gap-10 font-bold text-4xl lg:text-[56px] tracking-subtitle w-full lg:w-5xl text-center [line-height:1.1em] lg:[line-height:60px] px-4 lg:px-0">
        <div className="bg-fancy w-full h-full rounded-t-4xl px-0 lg:px-8 pt-0 lg:pt-8">
          <div className="relative h-auto md:h-[40rem] overflow-hidden w-full bg-fancy-2 rounded-t-2xl pb-[9rem] pt-[2.25rem] px-4 md:px-[2.25rem] flex flex-col justify-start items-start">

            <Image src={phoneMockup} alt="Phone Mockup" height={1000} width={1000} className="hidden lg:block absolute -bottom-[18rem] right-10 aspect-auto w-96" />
            <h1 className="text-left w-full lg:w-3xl text-4xl md:text-6xl font-semibold text-fancy-4 [line-height:1.1em] md:[line-height:60px] pb-2">Alkossunk Valami Nagyszerűt Együtt Még Ma!</h1>
            <p className="text-fancy-4 opacity-70 text-left text-lg md:text-xl mt-8 tracking-pill w-full md:w-xl font-semibold">Foglald le az ingyenes bevezető hívásodat, hogy elkezdhessük designolni, fejleszteni és optimalizálni a weboldaladat.</p>
            <div className="mt-8 flex flex-col md:flex-row justify-start items-start md:items-center gap-6 w-full">
              <WhiteCTAButton />
              <a href="mailto:hello@reigindustries.com" className="hidden md:block text-fancy-4 text-lg md:text-xl font-bold tracking-pill hover:opacity-80 transition-all duration-300">Üzenj Nekünk</a>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-12 md:mt-24">
            <Image src={reigLogoLight} width={1000} height={1000} alt="Reig Industries" className="w-60 md:w-[20rem] mb-4 md:mb-0" />
            </div>
            <div className="flex flex-row justify-between items-center w-full mt-2">
              <p className="text-fancy-4 opacity-70 text-base md:text-lg font-semibold tracking-pill">© 2025 Reig Industries. All rights reserved.</p>
            </div>
            
          </div>
        </div>
      </section>


    </main>
  );
}
