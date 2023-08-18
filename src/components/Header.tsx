import Link from 'next/link'
import { MdLightMode } from 'react-icons/md'
const Header = () => {
    return (
        <header className='px-8 flex items-center justify-between h-[55px] shadow-sm'>
            <Link href="/" className='text-2xl font-special font-black'>
                <span className='text-specialBlue'>Edu</span>Cation
            </Link>
            <div className="flex items-center gap-10">
                <nav>
                    <ul className='flex gap-5 text-ligthGray'>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/articles">Artigos</Link>
                        </li>
                        <li>
                            <Link href="/about">Sobre mim</Link>
                        </li>
                    </ul>
                </nav>
                <MdLightMode size={20} className="cursor-pointer" />
            </div>

        </header>
    )
}

export default Header