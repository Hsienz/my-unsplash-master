import { createContext, useContext, useState } from "react";
import React from "react";
interface Context {
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>> 
}

const SearchContext = createContext<Context>({
    value: '',
    setValue: () => {}
})

interface Props {
    children: JSX.Element
}

const SearchProvider:React.FC<Props> = ({children}) => {
    const [value, setValue] = useState("")
    return (
        <SearchContext.Provider value={{
            value,
            setValue
        }}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider
export const useSearch = () => useContext(SearchContext)