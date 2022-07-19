/* eslint-disable @next/next/no-img-element */
import { Button, Typography } from '@material-tailwind/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Section } from '../components'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cyberpunk 2077 — from the creators of The Witcher 3</title>
        <meta
          name="description"
          content="megalopolis obsessed with power, glamour and body modification. You play as V, ..."
        />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <Section tailwindClasses="grid grid-cols-1 grid-rows-2 h-[600px] md:grid-cols-2 md:grid-rows-none">
        <div
          className="bg-contain bg-center bg-no-repeat h-full"
          style={{ backgroundImage: 'url(/images/bg-person.png)' }}
        />
        <div className="flex items-center justify-center flex-col">
          <iframe
            className="w-full h-[50%] rounded-3xl hidden md:block  mb-3"
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/LembwKDo1Dk"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
          <Typography variant="h4">
            EXPERIENCE NIGHT CITY ON NEXT-GEN
          </Typography>

          {/** Button */}
          <a
            href="#_"
            className="relative px-8 py-4 font-medium text-white group mt-2"
          >
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-[#FF113C] group-hover:bg-[#FF113C] group-hover:skew-x-12"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-[#FF113C]  group-hover:bg-[#FF114c] group-hover:-skew-x-12"></span>
            <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-[#FF113C]  -rotate-12"></span>
            <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-[#FF113C]  -rotate-12"></span>
            <span className="relative">AVAILABLE NOW</span>
          </a>
          {/** Consoles */}
          <img src="/images/consoles.jpeg" alt="Switch Playstation xbox" loading="lazy" className="h-[100px] mt-4 rounded-xl md:h-[140px]"/>
        </div>
      </Section>
    </>
  )
}

export default Home
