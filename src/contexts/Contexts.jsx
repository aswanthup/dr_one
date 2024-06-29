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
    const [labCategories, setlabCategories] = useState({})
    const [hosAndDocCategories, sethosAndDoclabCategories] = useState({})
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
        seteditHos
    }

    useEffect(() => {
        axios.get(`${port}/admin/getcategory`).then((res) => {
            console.log(res)
            const ShortKey = res?.data?.data
            const filteredData = ShortKey?.originalData?.find(ele => ele?.Laboratory)
            console.log("filteredData>>>>", filteredData)
            const splitCategoriesLab = {
                features: filteredData?.Laboratory?.features,
                services: filteredData?.Laboratory?.services
            }
            console.log("splitCategoriesLab>>>>>", splitCategoriesLab)
            setlabCategories(splitCategoriesLab)
        })
    }, [])

    return (
        <>
            <MyContext.Provider value={value}>{children}</MyContext.Provider>
        </>
    )
}
