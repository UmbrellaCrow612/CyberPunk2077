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
      <nav className="mx-auto max-w-screen-2xl h-[80px] flex items-center px-3 justify-between sticky top-0 z-10">
        {/** Cyber logo */}

        <Link href="/">
          <a className="hidden md:block">
            <img
              src="/images/logo.png"
              alt="cd project red"
              loading="lazy"
              className="w-[175px] h-[60px] hidden md:block"
            />
          </a>
        </Link>
        {/** Icon container */}
        <div className="hidden md:flex w-[350px] p-3 justify-between">
          {Icons.map((Icon) => (
            <>
              <Icon.icon className="text-3xl cursor-pointer" />
            </>
          ))}
        </div>
        {/** Mobile menu */}
        <MobileMenu />

        {/** red bird */}
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
