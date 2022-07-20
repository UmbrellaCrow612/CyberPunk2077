/* eslint-disable @next/next/no-img-element */
import { Typography } from '@material-tailwind/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { WireTabs } from '../components'
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
      <section className="grid max-w-screen-2xl mx-auto grid-cols-1 grid-rows-2 h-[600px] md:grid-cols-2 md:grid-rows-none">
        <div
          className="h-full bg-center bg-no-repeat bg-contain"
          style={{ backgroundImage: 'url(/images/bg-person.png)' }}
        >
          <div className="bg-[#06EFFF] w-[150px] h-[120px] p-2 py-3 rounded-r-3xl rounded-br-3xl hidden md:flex flex-col justify-between font-medium cursor-pointer shadow-md">
            <div>
              <span className="">Our commitment To quality</span>
              <br />
              <div className="h-[2px] border-[0.5px] bg-black rounded-full" />
            </div>
            <span className="flex items-center w-full mt-4 font-semibold tracking-wider">
              Learn more <AiOutlineArrowRight className="ml-3" />
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
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
            className="relative px-8 py-4 mt-2 font-medium text-white group"
          >
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-[#FF113C] group-hover:bg-[#FF113C] group-hover:skew-x-12"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-[#FF113C]  group-hover:bg-[#FF114c] group-hover:-skew-x-12"></span>
            <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-[#FF113C]  -rotate-12"></span>
            <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-[#FF113C]  -rotate-12"></span>
            <span className="relative">AVAILABLE NOW</span>
          </a>
          {/** Consoles */}
          <img
            src="/images/consoles.jpeg"
            alt="Switch Playstation xbox"
            loading="lazy"
            className="h-[100px] mt-4 rounded-xl md:h-[140px]"
          />
        </div>
      </section>

      {/** banner section */}
      <section
        className="max-w-none text-[#0BEEFF] w-full shadow-md flex items-center justify-center text-center flex-col  bg-center bg-no-repeat bg-fixed h-[600px]"
        style={{ backgroundImage: 'url(/images/banner.jpeg' }}
      />
      {/** second hero*/}
      <section className="h-[1200px] md:h-[900px] max-w-screen-2xl mx-auto text-center p-3">
        <Typography variant="h4" className="mt-6 md:hidden">
          NEXT-GENERATION UPDATE
        </Typography>
        <Typography variant="lead" className="mt-6 md:hidden">
          Experience Night City on the latest generation of consoles, featuring
          enhanced performance, graphics, and features designed with the power
          of the PlayStation 5 and Xbox Series X|S in mind.
        </Typography>
        <Typography variant="h2" className="hidden mt-9 md:block">
          NEXT-GENERATION UPDATE
        </Typography>
        <Typography variant="h4" className="hidden mb-3 mt-9 md:block">
          Experience Night City on the latest generation of consoles, featuring
          enhanced performance, graphics, and features designed with the power
          of the PlayStation 5 and Xbox Series X|S in mind.
        </Typography>

        <div className="grid h-[80%] md:h-[70%] gap-8 grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-none">
          <div className="border-[5px] relative flex flex-col items-center cursor-pointer bg-[#06EFFF] hover:bg-white duration-300 transition ease-in-out delay-150 p-4">
            <img
              src="/images/grid-1.jpeg"
              alt="City"
              className="w-[85%] md:w-full"
            />
            <Typography variant="h4" className="mt-2">
              ENHANCED FOR NEXT-GEN CONSOLES
            </Typography>
            <Typography variant="lead" className="mt-2">
              PATCH 1.5 AVAILABLE ON NEXT-GEN CONSOLES BRINGS NEW FEATURES AND
              ADVENTURES
            </Typography>

            <div className="absolute bottom-3 right-3">
              <AiOutlineArrowRight className="text-3xl" />
            </div>
          </div>
          <div className="border-[5px] relative flex flex-col items-center cursor-pointer bg-[#06EFFF] hover:bg-white duration-300 transition ease-in-out delay-150 p-4">
            <img
              src="/images/grid-2.jpeg"
              alt="City"
              className="w-[85%] md:w-full"
            />
            <Typography variant="h4" className="mt-2">
              FREE ADDITIONAL CONTENT
            </Typography>
            <Typography variant="lead" className="mt-2">
              FROM NEW EQUIPMENT AND WEAPONS TO APARTMENTS AND GADGETS
            </Typography>

            <div className="absolute bottom-3 right-3">
              <AiOutlineArrowRight className="text-3xl" />
            </div>
          </div>
        </div>
      </section>
      {/** Banner 2 */}
      <section
        className="max-w-none text-black w-full shadow-md text-center flex-col bg-top  bg-no-repeat bg-fixed h-[750px]"
        style={{ backgroundImage: 'url(/images/banner-2.jpg' }}
      />

      {/** Playlist 2 */}

      <section className="mx-auto max-w-screen-2xl h-[800px] bg-[#FEED07] flex flex-col items-center py-3">
        <img
          src="/images/wire.png"
          alt="Wire yellow logo"
          loading="lazy"
          className="w-[250px] mb-5"
        />
        <WireTabs />
        <div className="mt-4 border-[4px] rounded-r-lg text-center h-[130px] w-[200px] flex flex-col items-center justify-between cursor-pointer">
          <Typography variant="lead" className="mb-6">
            FREE GOODIES
          </Typography>
          <div className="flex items-center justify-between w-full h-full bg-black">
            <AiOutlineArrowRight className="text-[#00D8F3]" />
            <Typography variant="h6" className="text-[#00D8F3]">
              DOWNLOAD NOW
            </Typography>
            <AiOutlineArrowLeft className="text-[#00D8F3]" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
