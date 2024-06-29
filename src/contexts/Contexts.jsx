import axios from 'axios'
import { React, useEffect, useState } from 'react'
import { createContext } from 'react'
import { port } from '../config'

export const MyContext = createContext()

export default function Contexts({ children }) {
    const [Data, setData] = useState({})
    const [HospitalAdminRg, setHospitalAdminRg] = useState({})
    const [LabAdminRg, setLabAdminRg] = useState({})
    const [editDoc, seteditDoc] = useState({})
    const [Categories, setCategories] = useState({})
    const [editHos, seteditHos] = useState({})
    const [passedSpecialization, setPassedSpecialization] = useState("")
    const [passedType, setPassedType] = useState("")
    const value = {
        Data,
        setData,
        HospitalAdminRg,
        setHospitalAdminRg,
        passedSpecialization,
        LabAdminRg,
        setLabAdminRg,
        setPassedSpecialization,
        passedType,
        setPassedType,
        editDoc,
        seteditDoc,
        editHos,
        seteditHos,
        Categories,
        setCategories
    }

    useEffect(() => {
        axios.get(`http://192.168.1.13:3003/admin/getallcategories`).then((res) => {
            console.log(res)
            const Fullcategories = res?.data
            setCategories(Fullcategories)
        })
    }, [])

    return (
        <>
            <MyContext.Provider value={value}>{children}</MyContext.Provider>
        </>
    )
}
