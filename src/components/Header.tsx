/* eslint-disable @next/next/no-img-element */
import {
  AiFillYoutube,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiOutlineInstagram,
} from 'react-icons/ai'

import { GiStapler } from 'react-icons/gi'
import { BsDiscord, BsTwitch } from 'react-icons/bs'
import { FaTumblr } from 'react-icons/fa'
import { MobileMenu } from './MobileMenu'
import Link from 'next/link'

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <nav className="mx-auto max-w-screen-2xl h-[80px] border flex items-center px-3 justify-between">
        {/** Icon container */}
        <div className="hidden md:flex">
          {Icons.map((Icon) => (
            <>
              <Icon.icon />
            </>
          ))}
        </div>
        {/** Mobile menu */}
        <MobileMenu />

        {/** Logo */}
        <Link href="/">
          <a>
            <img
              src="/images/CD_LOGO/Online_RGB/CDPR_Logo-Vertical-Black_RGB.png"
              alt="cd project red"
              loading="lazy"
              className="w-[80px] h-[60px]"
            />
          </a>
        </Link>
      </nav>
    </>
  )
}

export const Icons = [
  {
    icon: AiFillYoutube,
  },
  {
    icon: AiFillFacebook,
  },
  {
    icon: AiFillTwitterCircle,
  },
  {
    icon: AiOutlineInstagram,
  },
  {
    icon: GiStapler,
  },
  {
    icon: BsDiscord,
  },
  {
    icon: BsTwitch,
  },
  {
    icon: FaTumblr,
  },
]
