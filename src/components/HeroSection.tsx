import React from 'react'
import Link from 'next/link'
import { Spotlight } from './ui/Spotlight'
import { Button } from "./ui/moving-border";
import { Barlow_Condensed, Montserrat } from 'next/font/google'
const barlowCondensed = Barlow_Condensed({ weight: "600", subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });
function HeroSection() {
    return (
        <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">

            <div className={"p-4 relative z-10 w-full text-center "}>
                <Spotlight
                    className="-top-40 left-60 md:left-60 md:-top-20"
                    fill="red"
                />
                <h1 className={"mt-20 text-4xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-black " + barlowCondensed.className}
                >Mystic Minds</h1>
                <p
                    className={"mt-4 font-normal text-base md:text-xl text-gray-600 max-w-lg mx-auto " + montserrat.className}
                >
                    Mystic Minds is a dedicated spiritual and volunteer service organization committed to facilitating personal transformation through the practice of Sadhana.
                    Our mission revolves around fostering inner growth and enlightenment through various spiritual practices, aiming to uplift individuals and communities alike.
                    Join us on this journey of self-discovery and transformation.
                </p>
                <div className='mt-4'>
                    <Link href="/explore-mystic-minds">
                        <Button borderRadius='1rem' duration={8000}
                            className='bd-white dark:bg-black  text-black dark:text-white border-neutral-200 dark:border-slate-800'
                        >
                            Explore Mystic Minds
                        </Button>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default HeroSection