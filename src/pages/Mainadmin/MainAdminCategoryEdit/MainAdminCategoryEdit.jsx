import React, { useEffect, useState } from 'react'
import "./MainAdminCategoryEdit.css"
import axios from 'axios'
import { port } from '../../../config'
import { services } from '../../Labs/LabFIltering/constatnts/Filter'
import { Category } from '@mui/icons-material'
export const MainAdminCategoryEdit = () => {
    const [HosSections, setHosSections] = useState({
        Homeopathy: true
    })
    const [LabSections, setLabSections] = useState({
        Services: true
    })
    const [DocSections, setDocSections] = useState({
        Homeopathy: true
    })
    const [ConditionForSelections, setConditionForSelections] = useState({
    })
    const [Hosspecialities, setHosspecialities] = useState([])
    const [Docspecialities, setDocspecialities] = useState([])
    const [HosFeatures, setHosFeatures] = useState([])
    const [LabPrintingItems, setLabPrintingItems] = useState([])
    const [categories, setcategories] = useState([])
    const HosChangeSections = (sec) => {
        setHosSections({ [sec]: true })
        if (sec) {
            const FindData = categories?.transformedData?.find(ele => ele?.type === sec)
            console.log("Allopathydata>>>>", FindData)
            if (FindData) {
                setHosspecialities(FindData?.department)
            }
        }
    }
    const LabChangeSections = (sec) => {
        setLabSections({ [sec]: true })
        if (sec) {
            const LabServices = categories?.originalData?.find(ele => ele?.Labortary)
            console.log("LabServices>>>>>", LabServices.Labortary?.[sec.toLowerCase()])
            setLabPrintingItems(LabServices.Labortary?.[sec.toLowerCase()])
        }
    }
    const DocChangeSections = (sec) => {
        setDocSections({ [sec]: true })
        if (sec) {
            const FindData = categories?.transformedData?.find(ele => ele?.type === sec)
            console.log("Allopathydata>>>>", FindData)
            if (FindData) {
                setDocspecialities(FindData?.department)
            }
        }
    }
    const EditFn = () => {
        if (ConditionForSelections?.edit) {
            setConditionForSelections({ edit: false })
        } else {
            setConditionForSelections({ edit: true })
        }

    }
    useEffect(() => {
        axios.get(`${port}/admin/getcategory`).then((res) => {
            setcategories(res?.data?.data)
            console.log("res>>>>", res)
            const FindData = res?.data?.data?.transformedData?.find(ele => ele?.type === "Homeopathy")
            setHosspecialities(FindData?.department)
            setDocspecialities(FindData?.department)
            const LabServices = res?.data?.data?.originalData?.find(ele => ele?.Labortary)
            console.log("LabServices>>>>>", LabServices.Labortary.services)
            setLabPrintingItems(LabServices?.Labortary?.services)

        })
    }, [])

    const EditFnBox = (index) => {
        setConditionForSelections({ edit: true, index: index })
    }
    const editHosSpeciality = (e, index) => {
        const value = e?.target?.value
        let tempSepeciality = [...Hosspecialities]
        tempSepeciality[index] = value
        setHosspecialities(tempSepeciality)
    }
    const editDocSpeciality = (e, index) => {
        const value = e?.target?.value
        let tempSepeciality = [...Docspecialities]
        tempSepeciality[index] = value
        setDocspecialities(tempSepeciality)
    }
    console.log("categories>>>>>", categories)
    const SaveDoc = () => {

        const Data = {
            type: DocSections 
        }

    }
    const SaveHos = () => {

    }
    const SaveLab = () => {

    }
    return (
        <div className='MainAdminCategoryEdit'>
            <div className='MainAdminCategoryEditHeader'>
                <p>Edit Category</p>
            </div>

            <div className='MainAdminCategoryContent'>
                <p className='MainAdminCategoryContentPtag'>Hospital</p>
                <div className='MainAdminCatSetSec'>
                    <div className='MainAdminCatSetFirstSec'>
                        {categories?.allTypes?.map(sec =>
                            <div onClick={() => { HosChangeSections(sec) }} className={!HosSections?.[sec] ? 'MainAdminCatSetFirstTile' : "MainAdminCatSetFirstTileBefore"}>
                                <p>{sec}</p>
                            </div>
                        )}
                        <div onClick={() => { HosChangeSections("Features") }} className={!HosSections?.["Features"] ? 'MainAdminCatSetFirstTile' : "MainAdminCatSetFirstTileBefore"}>
                            <p>Features</p>
                        </div>
                    </div>
                    <div className='MainAdminCatSetSecondSec'>
                        <div className='MainAdminCatSetSecondSePtag'>
                            <p>Speciality</p>
                        </div>

                        <div className='MainAdminCatSetSecondSecAlignItem'>
                            {Hosspecialities.map((ele, index) =>
                                ConditionForSelections?.index !== index ?
                                    <div onClick={() => { EditFnBox(index) }} className='MainAdminCatSetSecondSecDivIcon'>
                                        {ConditionForSelections?.edit &&
                                            <i class="ri-close-line"></i>}
                                        <div className='MainAdminCatSetSecondSecDiv'>
                                            <p>{ele}</p>
                                        </div>
                                    </div>
                                    :
                                    ConditionForSelections?.edit && ConditionForSelections.index == index &&
                                    < div className='MainAdminCatSetSecondSecDivIcon' >
                                        <i class="ri-close-line"></i>
                                        <input onChange={(e) => { editHosSpeciality(e, index) }} value={ele} className='MainAdminCatSetSecondSecDiv' />
                                    </div>
                            )}
                        </div>
                        <div className='MainAdminCatEditSec'>
                            <button className='MainAdminCatEditSecbtn3' onClick={EditFn}>Add more</button>
                            <button className='MainAdminCatEditSecbtn2' onClick={SaveHos}>Save</button>
                            <button className='MainAdminCatEditSecbtn1' onClick={EditFn}>Edit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='MainAdminCategoryContent'>
                <p className='MainAdminCategoryContentPtag'>Doctor</p>
                <div className='MainAdminCatSetSec'>
                    <div className='MainAdminCatSetFirstSec'>
                        {categories?.allTypes?.map(sec =>
                            <div onClick={() => { DocChangeSections(sec) }} className={!DocSections?.[sec] ? 'MainAdminCatSetFirstTile' : "MainAdminCatSetFirstTileBefore"}>
                                <p>{sec}</p>
                            </div>
                        )}
                        <div onClick={() => { DocChangeSections("Features") }} className={!DocSections?.["Features"] ? 'MainAdminCatSetFirstTile' : "MainAdminCatSetFirstTileBefore"}>
                            <p>Features</p>
                        </div>
                    </div>
                    <div className='MainAdminCatSetSecondSec'>
                        <div className='MainAdminCatSetSecondSePtag'>
                            <p>Speciality</p>
                        </div>

                        <div className='MainAdminCatSetSecondSecAlignItem'>
                            {Docspecialities.map((ele, index) =>
                                ConditionForSelections?.index !== index ?
                                    <div onClick={() => { EditFnBox(index) }} className='MainAdminCatSetSecondSecDivIcon'>
                                        {ConditionForSelections?.edit &&
                                            <i class="ri-close-line"></i>}
                                        <div className='MainAdminCatSetSecondSecDiv'>
                                            <p>{ele}</p>
                                        </div>
                                    </div>
                                    :
                                    ConditionForSelections?.edit && ConditionForSelections.index == index &&
                                    < div className='MainAdminCatSetSecondSecDivIcon' >
                                        <i class="ri-close-line"></i>
                                        <input onChange={(e) => { editDocSpeciality(e, index) }} value={ele} className='MainAdminCatSetSecondSecDiv' />
                                    </div>
                            )}
                        </div>
                        <div className='MainAdminCatEditSec'>
                            <button className='MainAdminCatEditSecbtn3' onClick={EditFn}>Add more</button>
                            <button className='MainAdminCatEditSecbtn2' onClick={SaveDoc}>Save</button>
                            <button className='MainAdminCatEditSecbtn1' onClick={EditFn}>Edit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='MainAdminCategoryContent'>
                <p className='MainAdminCategoryContentPtag'>Laboratory</p>
                <div className='MainAdminCatSetSec'>
                    <div className='MainAdminCatSetFirstSec'>
                        <div onClick={() => { LabChangeSections("Services") }} className={!LabSections?.["Services"] ? 'MainAdminCatSetFirstTile' : "MainAdminCatSetFirstTileBefore"}>
                            <p>Services</p>
                        </div>
                        <div onClick={() => { LabChangeSections("Features") }} className={!LabSections?.["Features"] ? 'MainAdminCatSetFirstTile' : "MainAdminCatSetFirstTileBefore"}>
                            <p>Features</p>
                        </div>
                    </div>
                    <div className='MainAdminCatSetSecondSec'>
                        <div className='MainAdminCatSetSecondSePtag'>
                            <p>Speciality</p>
                        </div>

                        <div className='MainAdminCatSetSecondSecAlignItem'>
                            {LabPrintingItems?.map((ele, index) =>
                                ConditionForSelections?.index !== index ?
                                    <div onClick={() => { EditFnBox(index) }} className='MainAdminCatSetSecondSecDivIcon'>
                                        {ConditionForSelections?.edit &&
                                            <i class="ri-close-line"></i>}
                                        <div className='MainAdminCatSetSecondSecDiv'>
                                            <p>{ele}</p>
                                        </div>
                                    </div>
                                    :
                                    ConditionForSelections?.edit && ConditionForSelections.index == index &&
                                    < div className='MainAdminCatSetSecondSecDivIcon' >
                                        <i class="ri-close-line"></i>
                                        <input onChange={(e) => { editHosSpeciality(e, index) }} value={ele} className='MainAdminCatSetSecondSecDiv' />
                                    </div>
                            )}
                        </div>
                        <div className='MainAdminCatEditSec'>
                            <button className='MainAdminCatEditSecbtn3' onClick={EditFn}>Add more</button>
                            <button className='MainAdminCatEditSecbtn2' onClick={SaveLab}>Save</button>
                            <button className='MainAdminCatEditSecbtn1' onClick={EditFn}>Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
