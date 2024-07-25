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
        <div className="container mx-auto px-20 h-full flex items-center">

            <div className="w-[50%] flex flex-col space-y-4">
                <h1 className={`${robo.className} w-[90%] text-gray-800 text-5xl font-bold`}>Africa’s Leading Tenanncy management Solution</h1>

                <h3 className={`${monts.className} text-lg`}>Organise your HR processes efficiently with our
                    modern HR & payroll software that leaves nothing
                    out of the picture, from recruitment to exit.</h3>
                      
                    <div>
                        <Button className='py-3 px-10 bg-primary rounded-full text-white flex items-center gap-3'>
                            Get Started
                            <PlayIcon />
                        </Button>
                    </div>
            </div>

            <div className="w-1/2 ">
            <img
                        src={'https://nb7947.n3cdn1.secureserver.net/wp-content/uploads/homepage_3d.webp'}
                        
                        alt="Picture of the author"
                     />
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