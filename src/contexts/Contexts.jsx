import { React, useState } from 'react'
import { createContext } from 'react'

export const MyContext = createContext()

export default function Contexts({ children }) {
    const [Data, setData] = useState({})
    const [HospitalAdminRg, setHospitalAdminRg] = useState({})
    const [passedSpecialization, setPassedSpecialization] = useState("")
    const value = {
        Data,
        setData,
        HospitalAdminRg,
        setHospitalAdminRg,
        passedSpecialization,
        setPassedSpecialization
    }
    return (
        <>
            <MyContext.Provider value={value}>{children}</MyContext.Provider>
        </>
    )
}
