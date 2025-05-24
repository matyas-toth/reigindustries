"use client"

export default function SmallCTAButton() {
    return (
          <div onClick={() => window.open("https://cal.com/reigdesigns/30min", "_blank")} className="select-none cursor-pointer w-fit relative bg-gradient-to-b from-[#6366f1] to-[#3730a3] rounded-[47.86px] px-[6.5px] pt-[5px] pb-[6.5px] hover:p-0 shadow-slight hover:opacity-80 active:scale-[0.975] group transition-all duration-300">
              <div className="[background:radial-gradient(35%_63%_at_50%_50%,rgb(99,102,241)_0%,rgb(67,56,202)_100%)] rounded-[54.69px] tracking-text text-[18px] font-semibold text-white px-[20px] py-[6px] group-hover:px-[26.5px] group-hover:pt-[11.5px] group-hover:pb-[12.5px] transition-all duration-300">
                  Ingyenes Bevezető Hívás
              </div>
          </div>
    );
  }