import React from 'react'
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'

const AboutPage = () => {
    return (
        <div className="max-w-3xl mx-auto my-8 px-12 sm:px-16 lg:px-0  flex flex-col gap-5">

            <div className='' >
                <h2 className='text-xl font-medium font-special mb-2'>Sobre mim</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores suscipit nulla, praesentium dignissimos doloribus ex ea quae possimus delectus facere?
                    Esse consequatur molestias voluptatum soluta possimus fugit id tempora expedita.
                </p>
            </div>



            <div >
                <h2 className='text-xl font-medium font-special mb-2'>Entre em contato!</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores suscipit nulla, praesentium dignissimos doloribus ex ea quae possimus delectus facere?
                    Esse consequatur molestias voluptatum soluta possimus fugit id tempora expedita.</p>
            </div>

            <div className="flex items-center justify-between w-full font-special">
                <a href="https://github.com/eduardosoutodefreitas" className="flex items-center gap-2 text-sm" target="_blank">
                    <AiOutlineGithub size={32} />
                    Github
                </a>
                <a href="https://instagram.com/freitas.dev" className="flex items-center gap-2 text-sm" target="_blank">
                    <AiOutlineInstagram size={32} />
                    Instagram
                </a>
                <a href="https://www.linkedin.com/in/eduardo-souto/" className="flex items-center gap-2 text-sm" target="_blank">
                    <AiOutlineLinkedin size={32} />
                    Linkedin
                </a>
            </div>

        </div>

    )
}

export default AboutPage