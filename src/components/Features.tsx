
import React from 'react'
import { Barlow_Condensed, Montserrat } from 'next/font/google'
const barlowCondensed = Barlow_Condensed({ weight: "600", subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });
import features from '../data/features'
import { tree } from 'next/dist/build/templates/app-page';
import { BackgroundGradient } from './ui/background-gradient';
import FeatureCard from './FeatureCard';
interface Feature {
    name: string,
    slug: string,
    image: string,
    description: string,

}
function Features() {

    return (
        <div className='p-12 bg-gray-100'>
            <div className='container mx-auto'>
                <div className='text-center'>
                    <h1 className={"mt-20 text-4xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-black " + barlowCondensed.className}
                    >We Works On</h1>

                </div>
                <div className='mt-10'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 md:gap-20 gap-10 justify-center text-black'>
                        {features.map((feature: Feature) => (
                            <div key={feature.slug} className='flex justify-center'>
                                <FeatureCard feature={feature} />
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features