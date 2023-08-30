"use client"
import { MobileMenuContext } from "@/context/MobileMenu"
import Link from "next/link"
import { useContext } from "react"
import { AiOutlineClose, AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMenu } from "react-icons/ai"
import ThemeSwitcher from "./ThemeSwitcher"

const MobileMenu = () => {
    const { handleIsOpen, isOpen } = useContext(MobileMenuContext)
    return (
        <>
            <AiOutlineMenu size={23} onClick={handleIsOpen} className="cursor-pointer sm:hidden" />

            {isOpen && (
                <div className="w-full h-screen inset-0 p-8 absolute bg-white dark:bg-[#121212] sm:hidden z-50 overflow-hidden">

                    <div className="flex flex-col w-full h-full items-center justify-center text-center">
                        <div className="left-5 absolute top-5">
                            <ThemeSwitcher />
                        </div>
                        <AiOutlineClose size={23} className="cursor-pointer top-5 right-5 absolute" onClick={handleIsOpen} />

                        <Link href="/" className='text-xl font-special font-black' onClick={handleIsOpen}>
                            <span className='text-specialBlue'>Edu</span>Cation
                        </Link>
                        <nav className="my-5">
                            <ul className="space-y-3 text-darkGray dark:text-secundaryDark">
                                <li>
                                    <Link onClick={handleIsOpen} href="/">Home</Link>
                                </li>
                                <li>
                                    <Link onClick={handleIsOpen} href="/articles">Artigos</Link>
                                </li>
                                <li>
                                    <Link onClick={handleIsOpen} href="/about">Sobre mim</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="flex items-center justify-between w-full font-special text-xs">
                            <a href="https://github.com/eduardosoutodefreitas" className="flex items-center gap-2" target="_blank">
                                <AiOutlineGithub size={18} />
                                Github
                            </a>
                            <a href="https://instagram.com/freitas.dev" className="flex items-center gap-2" target="_blank">
                                <AiOutlineInstagram size={18} />
                                Instagram
                            </a>
                            <a href="https://www.linkedin.com/in/eduardo-souto/" className="flex items-center gap-2" target="_blank">
                                <AiOutlineLinkedin size={18} />
                                Linkedin
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default MobileMenu