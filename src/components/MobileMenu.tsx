"use client"
import { MobileMenuContext } from "@/context/MobileMenu"
import Link from "next/link"
import { useContext } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

const MobileMenu = () => {
    const { handleIsOpen, isOpen } = useContext(MobileMenuContext)
    return (
        <>
            {
                isOpen ? <AiOutlineClose size={23} className="cursor-pointer" onClick={handleIsOpen} /> : <AiOutlineMenu size={23} onClick={handleIsOpen} className="cursor-pointer sm:hidden" />
            }

            {isOpen && (
                <div className="w-[90%] left-[50%] -translate-x-1/2 border-b border-x border-lightGray p-8 top-[56px] absolute sm:hidden bg-white z-50 overflow-hidden">

                    <div className="flex flex-col w-full items-center">
                        <nav>
                            <ul className="space-y-3 text-darkGray">
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/articles">Artigos</Link>
                                </li>
                                <li>
                                    <Link href="/about">Sobre</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            )}
        </>
    )
}

export default MobileMenu