import ccLogo from "@/../public/marquee/cardcrafters_mq.webp"
import cgLogo from "@/../public/marquee/chillguy_mq.webp"
import cc2Logo from "@/../public/marquee/cloudclient_mq.webp"
import dctLogo from "@/../public/marquee/devcaveteam_mq.webp"
import fmcLogo from "@/../public/marquee/fyremc_mq.webp"
import mvLogo from "@/../public/marquee/minevote_mq.webp"
import sdLogo from "@/../public/marquee/simplydue_mq.webp"

const logos = [
    {
      name: 'CardCrafters',
      url: ccLogo.src,
    },
    {
      name: 'ChillGuy',
      url: cgLogo.src,
    },
    {
      name: 'CloudClient',
      url: cc2Logo.src,
    },
    {
      name: 'DevCaveTeam',
      url: dctLogo.src,
    },
    {
      name: 'FyreMC',
      url: fmcLogo.src,
    },

    {
      name: 'MineVote',
      url: mvLogo.src,
    },
    {
      name: 'SimplyDue',
      url: sdLogo.src,
    },

  ]

export default function AnimatedLogoCloud() {
    return (
      <div className="w-sm md:w-full py-4 overflow-hidden">
        <div className="mx-auto w-full px-4 md:px-8 overflow-hidden">
          <div
            className="group relative mt-6 flex gap-6 overflow-hidden p-2"
            style={{
              maskImage:
                'linear-gradient(to left, transparent 15%, black 45%, black 55%, transparent 85%)',
            }}
          >
            {Array(5)
              .fill(null)
              .map((index) => (
                <div
                  key={index}
                  className="flex shrink-0 animate-x-slider flex-row justify-around gap-6"
                >
                  {logos.map((logo, key) => (
                    <img

                      key={key}
                      src={`${logo.url}`}
                      className="h-7 px-2 flex-none opacity-30"
                      alt={logo.name}

                    />
                  ))}
                  
                </div>
              ))}
          </div>
        </div>
      </div>
    )
  }
