import { React, useState } from 'react'
import { createContext } from 'react'

export const MyContext = createContext()

export default function Contexts({ children }) {
    const [Data, setData] = useState({})
    const value = {
        Data,
        setData
    }
    return (
        <>
            <MyContext.Provider value={value}>{children}</MyContext.Provider>
        </>
    )
}
