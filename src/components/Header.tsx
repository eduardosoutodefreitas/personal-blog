import Link from 'next/link'
import MobileMenu from './MobileMenu'
import ThemeSwitcher from './ThemeSwitcher'
const Header = () => {
    return (
        <header className='px-8 flex items-center justify-between h-[55px] shadow-sm'>
            <Link href="/" className='text-2xl font-special font-black'>
                <span className='text-specialBlue'>Edu</span>Cation
            </Link>
            <div className="flex items-center gap-5 sm:gap-10">
                <nav className='hidden sm:block'>
                    <ul className='flex gap-5 text-ligthGray dark:text-secundaryDark'>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/articles?page=1">Artigos</Link>
                        </li>
                        <li>
                            <Link href="/about">Sobre mim</Link>
                        </li>
                    </ul>
                </nav>
                <MobileMenu />
                <ThemeSwitcher />
            </div>

        </header>
    )
}

export default Header