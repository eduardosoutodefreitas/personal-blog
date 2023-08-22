"use client"
import MobileMenuContextProvider from "@/context/MobileMenu"
import SearchArticlesProvider from "@/context/SearchArticles"
import { ThemeProvider } from "next-themes"

interface AppProviderProps {
    children: React.ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <SearchArticlesProvider>
            <MobileMenuContextProvider>
                <ThemeProvider attribute="class">
                    {children}

                </ThemeProvider>
            </MobileMenuContextProvider>
        </SearchArticlesProvider>
    )
}

export default AppProvider