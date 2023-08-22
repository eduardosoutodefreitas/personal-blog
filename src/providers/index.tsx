
import MobileMenuContextProvider from "@/context/MobileMenu"
import SearchArticlesProvider from "@/context/SearchArticles"

interface AppProviderProps {
    children: React.ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <SearchArticlesProvider>
            <MobileMenuContextProvider>
                {children}
            </MobileMenuContextProvider>
        </SearchArticlesProvider>
    )
}

export default AppProvider