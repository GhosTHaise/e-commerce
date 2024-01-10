"use client"

import React, { SetStateAction, useState } from "react";
import { createContext, useContext } from "react"
interface IConetxtType {
    categoryFilters : string[],
    setCategoryFilters : React.Dispatch<SetStateAction<string[]>>,
    sort : string,
    setSort : React.Dispatch<SetStateAction<string>>
}
export const INITIAL_FILTER_DATA : IConetxtType = {
    categoryFilters : [],
    setCategoryFilters : () => [],
    sort : "",
    setSort : () => ""
}

const FilterContext = createContext<IConetxtType>(INITIAL_FILTER_DATA);

export const FilterProvider = ({ children} : {children : React.ReactNode}) => {
    const [categoryFilters, setCategoryFilters] = useState([]);
    const [sort, setSort] = useState<string>("")
    return(
        <FilterContext.Provider value={{
            categoryFilters ,
            setCategoryFilters,
            sort,
            setSort
        }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => useContext(FilterContext)