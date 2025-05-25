import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const buttonContentVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function CTAButton() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
        <Link ref={ref} href="https://cal.com/reigdesigns/30min" target="_blank" className="select-none cursor-pointer w-fit relative bg-gradient-to-b from-[#6366f1] to-[#3730a3] rounded-[47.86px] px-[6.5px] pt-[5px] pb-[6.5px] hover:p-0 shadow-slight hover:opacity-80 active:scale-[0.975] group transition-all duration-300 overflow-hidden will-change-transform">
            <motion.div 
              variants={buttonContentVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="[background:radial-gradient(35%_63%_at_50%_50%,rgb(99,102,241)_0%,rgb(67,56,202)_100%)] rounded-[41px] tracking-text text-[18px] font-semibold text-white px-[20px] py-[6px] group-hover:px-[26.5px] group-hover:pt-[11.5px] group-hover:pb-[12.5px] transition-all duration-300"
            >
                Foglalj Ingyenes Bevezető Hívást
            </motion.div>
        </Link>
  );
}