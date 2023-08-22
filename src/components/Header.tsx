import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'
import { MdOutlineLightMode } from 'react-icons/md'
import MobileMenu from './MobileMenu'
const Header = () => {
    return (
        <header className='px-8 flex items-center justify-between h-[55px] shadow-sm'>
            <Link href="/" className='text-2xl font-special font-black'>
                <span className='text-specialBlue'>Edu</span>Cation
            </Link>
            <div className="flex items-center gap-5 sm:gap-10">
                <nav className='hidden sm:block'>
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
                <MobileMenu />
                <MdOutlineLightMode size={23} className="cursor-pointer" />
            </div>

        </header>
    )
}

export default Header