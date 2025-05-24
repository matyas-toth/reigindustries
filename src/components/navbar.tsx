import Link from "next/link";
import SmallCTAButton from "./small-cta-button";
import { Atom, Webhook } from "lucide-react";

import reigLogoDark from "@/../public/reig_logo_dark.png";
import reigLogoLight from "@/../public/reig_logo_light.png";

import Image from "next/image";

export default function Navbar() {
    return (
        <div className="fixed top-0 left-0 w-full h-16 z-50 hidden lg:flex justify-center items-center pt-10">
            <div className="max-w-5xl w-full bg-white rounded-full shadow-slighter flex justify-between items-center py-3 px-3 pl-6">
                <Image onClick={() => {
                    event?.preventDefault();
                    const body = document.body;
                    if (body) {
                        body.scrollIntoView({ behavior: 'smooth', block: "start" });
                    }
                }} src={reigLogoDark} width={1000} height={1000} alt="Reig Industries" className="cursor-pointer w-60 -translate-y-[1.5px]" />
                <div className="flex gap-6 text-gray font-semibold tracking-text select-none">
                    <span className="cursor-pointer" onClick={() => {
                        event?.preventDefault();
                        const benefitsSection = document.getElementById('benefits');
                        if (benefitsSection) {
                            benefitsSection.scrollIntoView({ behavior: 'smooth', block: "center" });
                        }
                    }}>Miért mi?</span>
                    <span className="cursor-pointer" onClick={() => {
                        event?.preventDefault();
                        const benefitsSection = document.getElementById('projects');
                        if (benefitsSection) {
                            benefitsSection.scrollIntoView({ behavior: 'smooth', block: "center" });
                        }
                    }}>Munkáink</span>
                    <span className="cursor-pointer" onClick={() => {
                        event?.preventDefault();
                        const benefitsSection = document.getElementById('pricing');
                        if (benefitsSection) {
                            benefitsSection.scrollIntoView({ behavior: 'smooth', block: "center" });
                        }
                    }}>Árak</span>
                    <span className="cursor-pointer" onClick={() => {
                        event?.preventDefault();
                        const benefitsSection = document.getElementById('faq');
                        if (benefitsSection) {
                            benefitsSection.scrollIntoView({ behavior: 'smooth', block: "center" });
                        }
                    }}>Kérdések</span>
                </div>
                <div>
                    <SmallCTAButton />
                </div>
            </div>
        </div>
    )
}
