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

import discordCircle from "@/../public/app_icons/discord_circle.webp";
import telegramCircle from "@/../public/app_icons/telegram_circle.webp";
import whatsappCircle from "@/../public/app_icons/whatsapp_circle.webp";
import { Check, ChevronDown } from "lucide-react";
import FullWidthCTAButton from "@/components/full-width-cta-button";

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
          <div className="relative group overflow-hidden w-full gap-8 h-96 p-8 bg-white rounded-[42px] shadow-slighter flex flex-row justify-between items-start">
            <Image src={ccWebsite} alt="CloudClient" className="h-full w-1/2 bg-white rounded-[24px] object-cover" />
            <div className="w-[50%]">
              <h3 className="text-[32px] font-bold tracking-subtitle text-fancy text-left z-10">CloudClient</h3>
              <div className="flex flex-row justify-start gap-2 items-center text-base tracking-tight text-gray">
                <div className="rounded-full bg-white shadow-[inset_0_0_10px_0px_#00000044] px-3 py-1">Design</div>
                <div className="rounded-full bg-white shadow-[inset_0_0_10px_0px_#00000044] px-3 py-1">Weboldal</div>
                <div className="rounded-full bg-white shadow-[inset_0_0_10px_0px_#00000044] px-3 py-1">Branding</div>
              </div>
              <p className="font-semibold text-gray text-[16px] tracking-text [line-height:1.4em] text-left z-10 mt-8">Megalkottuk a CloudClient teljes arculatát, designját és végül lefejlesztettük a weboldalát, ami jelenleg is elérhető a cloudclient.hu oldalon. Az új weboldaluk nem csak szemetgyönyörködtető, hanem 200%-al több látogatót konvertál és növeli a szolgáltatást igénybevevők számát is.</p>
            </div>
          </div>
          <div className="relative group overflow-hidden w-full gap-8 h-96 p-8 bg-white rounded-[42px] shadow-slighter flex flex-row justify-between items-start">
            <div className="w-[50%]">
              <h3 className="text-[32px] font-bold tracking-subtitle text-fancy text-right z-10 pr-1">Dialóg Egyesület</h3>
              <div className="flex flex-row justify-end gap-2 items-center text-base tracking-tight text-gray">
                <div className="rounded-full bg-white shadow-[inset_0_0_10px_0px_#00000044] px-3 py-1">Design</div>
                <div className="rounded-full bg-white shadow-[inset_0_0_10px_0px_#00000044] px-3 py-1">Weboldal</div>
                <div className="rounded-full bg-white shadow-[inset_0_0_10px_0px_#00000044] px-3 py-1">Backend</div>
                <div className="rounded-full bg-white shadow-[inset_0_0_10px_0px_#00000044] px-3 py-1">Üzemeltetés</div>
              </div>
              <p className="font-semibold text-gray text-[16px] tracking-text [line-height:1.4em] text-right z-10 mt-8">A Magyarország egyik legfontosabb civil szervezete keresett fel minket azzal az igénnyel, hogy modernizáljuk a weboldalukat, ezáltal növelve a támogatók számát és több emberhez eljuttatva az egyesület tevékenységeit. Az EvoCampus csapatával kollaborációban egy modern frontendet és egy részletes backend rendszert (Content Management System) tudtunk átadni 2025 tavaszán a Dialóg Egyesület számára.</p>
            </div>
            <Image src={deWebsite} alt="Dialóg Egyesület" className="h-full w-1/2 bg-white rounded-[24px] object-cover"></Image>

          </div>
          <div className="relative group overflow-hidden w-full gap-8 h-96 p-8 bg-white rounded-[42px] shadow-slighter flex flex-row justify-between items-start">
            <Image src={mvWebsite} alt="MineVote" className="h-full w-1/2 bg-white rounded-[24px] object-cover"></Image>
            <div className="w-[50%]">
              <h3 className="text-[32px] font-bold tracking-subtitle text-fancy text-left z-10">MineVote</h3>
              <div className="flex flex-row justify-start gap-2 items-center text-base tracking-tight text-gray">
                <div className="rounded-full bg-white shadow-[inset_0_0_10px_0px_#00000044] px-3 py-1">Design</div>
                <div className="rounded-full bg-white shadow-[inset_0_0_10px_0px_#00000044] px-3 py-1">Weboldal</div>
                <div className="rounded-full bg-white shadow-[inset_0_0_10px_0px_#00000044] px-3 py-1">Branding</div>
              </div>
              <p className="font-semibold text-gray text-[16px] tracking-text [line-height:1.4em] text-left z-10 mt-8">A MineVote, mint Magyarország jövendőbeli feltörekvő játékszerver-kereső és hirdető oldala egy pontos, modern és nagy konvertálási rátával rendelkező webdesign-t igényelt, amit csapatunk 1 hét alatt elkészített és üzembe is helyezett.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-28 flex flex-col justify-center items-center gap-10 font-bold text-[56px] tracking-subtitle w-5xl text-center [line-height:60px]">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-7xl font-semibold tracking-[-0.06em] text-fancy-2 max-w-3xl text-center [line-height:1.1em] pb-2">
            Átlátható Árazás Meglepetések Nélkül
          </h1>
          <h2 className="mt-4 mb-6 text-[18px] [line-height:27px] font-semibold tracking-text text-gray max-w-xl text-center">
            Átlátható árképzés, rejtett költségek nélkül. Professzionális weboldal, logó vagy vizuális arculat – a költségvetésedhez igazítva.
          </h2>
          <div></div>

        </div>
        <div className="flex flex-row justify-between items-start gap-10">
          <div className="relative overflow-hidden w-96 h-auto px-8 py-5 bg-white rounded-[42px] shadow-slighter flex flex-col justify-start items-start">
            <div className="absolute top-7 -right-23">

              <div className="select-none rotate-[35deg] cursor-pointer w-80 relative bg-gradient-to-b from-[#6366f1] to-[#3730a3] rounded-[47.86px] px-[6.5px] pt-[5px] pb-[6.5px] shadow-slight group transition-all duration-300">
                <div className="[background:radial-gradient(35%_63%_at_50%_50%,rgb(99,102,241)_0%,rgb(67,56,202)_100%)] rounded-[54.69px] tracking-text text-[18px] [line-height:2.3em] font-semibold text-white px-[20px] py-[0px]  transition-all duration-300">
                  Legnépszerűbb
                </div>
              </div>

            </div>
            <h3 className="text-[32px] font-semibold z-10 tracking-subtitle text-fancy-2 text-left">Landing</h3>
            <h2 className="text-[70px] font-bold tracking-subtitle text-fancy-2 text-left">45.000 HUF</h2>
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
                <p className="text-gray font-semibold text-lg -tracking-[0.04em] -translate-y-[1px]">Copywriting</p>
              </div>
              <div className="flex flex-row justify-start items-center gap-2">
                <div className="select-none w-fit relative bg-gradient-to-b from-[#6366f1] to-[#3730a3] rounded-[47.86px] px-[3px] pt-[3px] pb-[3px]  shadow-slight group transition-all duration-300">
                  <div className="[background:radial-gradient(35%_63%_at_50%_50%,rgb(99,102,241)_0%,rgb(67,56,202)_100%)] rounded-[54.69px] tracking-text text-[18px] font-semibold text-white px-[4px] py-[4px] transition-all duration-300">
                    <Check strokeWidth={3} size={12}></Check>
                  </div>
                </div>
                <p className="text-gray font-semibold text-lg -tracking-[0.04em] -translate-y-[1px]">1 Főoldal</p>
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
                <p className="text-gray font-semibold text-lg -tracking-[0.04em] -translate-y-[1px]">Egyszerű Animációk</p>
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
          <div className="relative w-96 h-auto px-8 py-5 bg-white rounded-[42px] shadow-slighter flex flex-col justify-start items-start">
            <div className="absolute -bottom-40 left-0 w-full h-full">

            </div>
            <h3 className="text-[32px] font-semibold z-10 tracking-subtitle text-fancy-2 text-left">Multipage</h3>
            <h2 className="text-[70px] font-bold tracking-subtitle text-fancy-2 text-left">78.000+ HUF</h2>
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
                <p className="text-gray font-semibold text-lg -tracking-[0.04em] -translate-y-[1px]">Copywriting</p>
              </div>
              <div className="flex flex-row justify-start items-center gap-2">
                <div className="select-none w-fit relative bg-gradient-to-b from-[#6366f1] to-[#3730a3] rounded-[47.86px] px-[3px] pt-[3px] pb-[3px]  shadow-slight group transition-all duration-300">
                  <div className="[background:radial-gradient(35%_63%_at_50%_50%,rgb(99,102,241)_0%,rgb(67,56,202)_100%)] rounded-[54.69px] tracking-text text-[18px] font-semibold text-white px-[4px] py-[4px] transition-all duration-300">
                    <Check strokeWidth={3} size={12}></Check>
                  </div>
                </div>
                <p className="text-gray font-semibold text-lg -tracking-[0.04em] -translate-y-[1px]">1 Főoldal</p>
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
                <p className="text-gray font-semibold text-lg -tracking-[0.04em] -translate-y-[1px]">Egyszerű Animációk</p>
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
          <div className="relative w-96 h-auto px-8 py-5 bg-white rounded-[42px] shadow-slighter flex flex-col justify-start items-start">
            <div className="absolute -bottom-40 left-0 w-full h-full">

            </div>
            <h3 className="text-[32px] font-semibold z-10 tracking-subtitle text-fancy-2 text-left">Logo Design</h3>
            <h2 className="text-[70px] font-bold tracking-subtitle text-fancy-2 text-left">33.000 HUF</h2>
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
                <p className="text-gray font-semibold text-lg -tracking-[0.04em] -translate-y-[1px]">Copywriting</p>
              </div>
              <div className="flex flex-row justify-start items-center gap-2">
                <div className="select-none w-fit relative bg-gradient-to-b from-[#6366f1] to-[#3730a3] rounded-[47.86px] px-[3px] pt-[3px] pb-[3px]  shadow-slight group transition-all duration-300">
                  <div className="[background:radial-gradient(35%_63%_at_50%_50%,rgb(99,102,241)_0%,rgb(67,56,202)_100%)] rounded-[54.69px] tracking-text text-[18px] font-semibold text-white px-[4px] py-[4px] transition-all duration-300">
                    <Check strokeWidth={3} size={12}></Check>
                  </div>
                </div>
                <p className="text-gray font-semibold text-lg -tracking-[0.04em] -translate-y-[1px]">1 Főoldal</p>
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
                <p className="text-gray font-semibold text-lg -tracking-[0.04em] -translate-y-[1px]">Egyszerű Animációk</p>
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
        </div>
      </section>
      <section className="mt-28 flex flex-row justify-between items-start gap-10 font-bold text-[56px] tracking-subtitle w-6xl text-center [line-height:60px]">
        <div className="flex flex-col justify-start items-start">
          <h2 className="font-semibold text-[85px] text-fancy-3 [line-height:85px]">Kérdések?</h2>
          <h2 className="font-semibold text-[85px] text-fancy-3 [line-height:85px]">Válaszolunk.</h2>
        </div>
        <div className="flex flex-col justify-start items-center text-2xl font-medium  tracking-pill w-[50%] text-left">
          <div className="bg-white shadow-slighter rounded-full px-8 py-6 w-full flex flex-row justify-between items-center">
            <span>Kikkel dolgoztok együtt?</span>
            <ChevronDown size={30} />
          </div>
        </div>
      </section>


    </main>
  );
}
