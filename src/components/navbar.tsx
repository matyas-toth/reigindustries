import Link from "next/link";
import SmallCTAButton from "./small-cta-button";
import { Atom, Webhook } from "lucide-react";

export default function Navbar() {
    return (
        <div className="fixed top-0 left-0 w-full h-16 z-50 flex justify-center items-center pt-10">
            <div className="max-w-5xl w-full bg-white rounded-full shadow-slighter flex justify-between items-center py-3 px-3 pl-6">
                <div className="text-fancy font-bold text-[28px] tracking-tighter flex items-center gap-2"><div className="inline-block w-8 h-8 rounded-lg bg-gradient-to-b from-[#6366f1] to-[#3730a3] relative shadow-[inset_0_0_10px_0px_rgba(255,255,255,0.4)] items-center justify-center">
                    <div className="flex items-center justify-center w-full h-full text-white">
                <Atom size={20} />
                </div>
                    
                    </div><span>Reig Industries</span></div>
                <div className="flex gap-6 text-gray font-semibold tracking-text">
                    <Link href="/">Miért mi?</Link>
                    <Link href="/">Munkáink</Link>
                    <Link href="/">Árak</Link>
                    <Link href="/">Vélemények</Link>
                    <Link href="/">GYIK</Link>
                </div>
                <div>
                    <SmallCTAButton />
                </div>
            </div>
        </div>
    )
}
