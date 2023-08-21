
import SearchArticlesProvider from "@/context/SearchArticles"

interface AppProviderProps {
    children: React.ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <SearchArticlesProvider>{children}</SearchArticlesProvider>
    )
}

export default AppProvider