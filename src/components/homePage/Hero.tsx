import { Montserrat, Roboto } from 'next/font/google'
import React from 'react'
import RoundedButton from '../reusables/RoundedButton'
import Image from 'next/image'
import PlayIcon from '../common/icons/PlayIcon'
import { Button } from '../ui/button'

type Props = {}

const robo = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500'] })
const monts = Montserrat({ subsets: ['latin'], weight: ['100', '300', '400', '500'] })

const Hero = (props: Props) => {
    return (

        // <section className='h-[20rem]'>
        <div className="container mx-auto md:px-20 px-4 h-full flex justify-center">

            <div className="lg:w-[80%] flex flex-col md:items-center md:text-center mt-20 space-y-6">
                <h1 className={`text-2xl md:text-5xl font-bold leading-tight opacity-75`}>Streamline Your Property Management
                Effortlessly Manage Tenants and Properties</h1>

                <h3 className='text-lg md:text-xl md:w-[80%] text-grey-600'>Our comprehensive solution simplifies tenant oversight, rent collection, and property maintenance. Boost efficiency and reduce stress with our intuitive platform.</h3>
                      
                    <div className="flex gap-3 mt-4">
                        <Button size="xl" className="py-3 md:text-lg">
                            Get Started
                        </Button>

                        <Button variant="outline" size="xl" className="py-3 md:text-lg text-primary">
                            Request Demo
                        </Button>
                    </div>
            </div>

           
            {/* <div className="flex flex-col space-y-4 w-[55%]">
            <h1 className="text-3xl font-bold">The better way to Rent</h1>
            <h3 className={`${monts.className}  text-lg`}>Ilemi is a complete rental management solution for landlords and tenants in Africa. List an apartment for free, rent an apartment and pay flexibly, verify your tenants and collect rent automatically with our rental management tools.</h3>
        </div> */}
        </div>
        // </section>
    )
}

export default Hero