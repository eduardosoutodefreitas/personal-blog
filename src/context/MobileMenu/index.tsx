'use client'
import { createContext, useState } from "react"

interface IMobileMenu {
    isOpen: boolean
    handleIsOpen: () => void
}

export const MobileMenuContext = createContext<IMobileMenu>({
    isOpen: false,
    handleIsOpen: () => { }
})

const MobileMenuContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleIsOpen = () => {
        setIsOpen(state => !state)
    }

    return (
        <MobileMenuContext.Provider value={{ isOpen, handleIsOpen }}>{children}</MobileMenuContext.Provider>
    )
}
export default MobileMenuContextProvider