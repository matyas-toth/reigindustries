import Link from "next/link";

export default function WhiteCTAButton() {
    return (
          <Link href="https://cal.com/reigdesigns/30min" target="_blank" className=" select-none cursor-pointer w-fit relative bg-fancy-3 rounded-[47.86px] px-[6.5px] pt-[5px] pb-[6.5px] hover:p-0 shadow-slight hover:opacity-80 active:scale-[0.975] group transition-all duration-300">
              <div className="text-dark bg-fancy-4 rounded-[54.69px] tracking-text text-[18px] font-semibold text-white px-[20px] py-[6px] group-hover:px-[26.5px] group-hover:pt-[11.5px] group-hover:pb-[12.5px] transition-all duration-300 [line-height:30px]">
                  Foglalj Ingyenes Bevezető Hívást
              </div>
          </Link>
    );
  }