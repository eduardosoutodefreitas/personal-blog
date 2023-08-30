import Link from "next/link"
import { AiOutlineInstagram, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"

const Footer = () => {
    return (
        <footer className="max-w-3xl mx-auto pb-5 px-8 sm:px-16 lg:px-0">
            <hr className="bg-darkGray mb-8" />
            <div className="flex items-center sm:items-start flex-col sm:flex-row justify-center sm:justify-between flex-wrap gap-y-5">
                <div className="text-center sm:text-left">
                    <Link href="/" className="text-xl font-special font-black">
                        <span className="text-specialBlue">Edu</span>Cation
                    </Link>
                    <p className="text-darkGray dark:text-secundaryDark text-sm">Blog pessoal de <a href="https://github.com/eduardosoutodefreitas" target="_blank" className="font-semibold">Eduardo</a>
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Links</h3>
                    <nav>
                        <ul className="space-y-1 dark:text-secundaryDark text-darkGray text-sm">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/articles?page=1">Artigos</Link>
                            </li>
                            <li>
                                <Link href="/about">Sobre</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Redes sociais</h3>
                    <div className="flex items-center gap-3 justify-center sm:justify-start">
                        <a href="https://github.com/eduardosoutodefreitas" target="_blank">
                            <AiOutlineGithub size={18} />
                        </a>
                        <a href="https://instagram.com/freitas.dev" target="_blank">
                            <AiOutlineInstagram size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/eduardo-souto/" target="_blank">
                            <AiOutlineLinkedin size={18} />
                        </a>
                    </div>
                </div>
            </div>
            <hr className="bg-darkGray my-8" />

            <p className="text-darkGray dark:text-secundaryDark text-sm text-center">
                Todos os direitos reseverdos © Eduardo Souto 2023
            </p>

        </footer>
    )
}

export default Footer