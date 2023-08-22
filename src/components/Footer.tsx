import Link from "next/link"
import { AiOutlineInstagram, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"

const Footer = () => {
    return (
        <footer className="max-w-3xl mx-auto pb-5 px-12 sm:px-16 lg:px-0">
            <div className="flex items-start justify-between flex-wrap gap-y-5">
                <div>
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
                                <Link href="/articles">Artigos</Link>
                            </li>
                            <li>
                                <Link href="/about">Sobre</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Redes sociais</h3>
                    <div className="flex items-center gap-3">
                        <a href="https://github.com/eduardosoutodefreitas" target="_blank">
                            <AiOutlineGithub size={16} />
                        </a>
                        <a href="https://instagram.com/freitas.dev" target="_blank">
                            <AiOutlineInstagram size={16} />
                        </a>
                        <a href="https://www.linkedin.com/in/eduardo-souto/" target="_blank">
                            <AiOutlineLinkedin size={16} />
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