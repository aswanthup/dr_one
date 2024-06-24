import React, { useEffect, useState } from 'react'
import "./MainAdminCategoryEdit.css"
import axios from 'axios'
import { port } from '../../../config'
import { toast } from 'react-toastify'
import { Modal } from '@mui/material'
import { Loader } from "../../../components/Loader/Loader"
import DeleteIcon from '@mui/icons-material/Delete';
export const MainAdminCategoryEdit = () => {

    const [HosSections, setHosSections] = useState({
        Homeopathy: true
    })
    const [DeletePopup, setDeletePopup] = useState({
        index: '',
        delete: false
    })
    const [Loading, setLoading] = useState(
        false
    )
    const [LabSections, setLabSections] = useState({
        Services: true
    })
    const [DocSections, setDocSections] = useState({
        Homeopathy: true
    })
    const [ModalCondition, setModalCondition] = useState({})
    const [ConditionForHos, setConditionForHos] = useState({})
    const [ConditionForLab, setConditionForLab] = useState({})
    const [ConditionForDoc, setConditionForDoc] = useState({})
    const [Hosspecialities, setHosspecialities] = useState([])
    const [Docspecialities, setDocspecialities] = useState([])
    const [LabPrintingItems, setLabPrintingItems] = useState([])
    const [categories, setcategories] = useState([])

    const loadingFn = (condition) => {
        setLoading(condition)
    }

    const HosChangeSections = (sec) => {
        setHosSections({ [sec]: true })
        setConditionForHos({ edit: false })
        if (sec === "Features") {
            const FindData = categories?.originalData?.find(ele => ele?.Hospital)
            setHosspecialities(FindData?.Hospital?.features)
        } else {
            const FindData = categories?.transformedData?.find(ele => ele?.type === sec)
            if (FindData) {
                setHosspecialities(FindData?.department)
            }
        }
    }
    const LabChangeSections = (sec) => {
        setLabSections({ [sec]: true })
        setConditionForLab({ edit: false })
        if (sec) {
            const LabServices = categories?.originalData?.find(ele => ele?.Laboratory)
            setLabPrintingItems(LabServices.Laboratory?.[sec.toLowerCase()])
        }
    }
    const DocChangeSections = (sec) => {
        setDocSections({ [sec]: true })
        setConditionForDoc({ edit: false })
        if (sec) {
            const FindData = categories?.transformedData?.find(ele => ele?.type === sec)
            if (FindData) {
                setDocspecialities(FindData?.department)
            }
        }
    }
    const EditFn = () => {
        if (ConditionForHos?.edit) {
            setConditionForHos({ edit: false })
        } else {
            setConditionForHos({ edit: true })
        }

    }
    const EditFnDoc = () => {
        if (ConditionForDoc?.edit) {
            setConditionForDoc({ edit: false })
        } else {
            setConditionForDoc({ edit: true })
        }
    }
    const EditFnLab = () => {
        if (ConditionForDoc?.edit) {
            setConditionForLab({ edit: false })
        } else {
            setConditionForLab({ edit: true })
        }
    }
    useEffect(() => {
        loadingFn(true)
        axios.get(`${port}/admin/getcategory`).then((res) => {
            setcategories(res?.data?.data)
            console.log("res>>>>", res)
            loadingFn(false)
            const FindData = res?.data?.data?.transformedData?.find(ele => ele?.type === "Homeopathy")
            setHosspecialities(FindData?.department)
            setDocspecialities(FindData?.department)
            const LabServices = res?.data?.data?.originalData?.find(ele => ele?.Laboratory)
            setLabPrintingItems(LabServices?.Laboratory?.services)
        })
    }, [])

    console.log("DeletePopup>>>>", DeletePopup)
    const EditFnBox = (index, which) => {

        const Type = Object.keys(HosSections)
        let Data = {}
        console.log(Type[0])
        if (Type[0] === "Features") {
            Data = {
                main_type: "Hospital",
                features: which
            }
        } else {
            Data = {
                type: Type[0],
                main_type: "Doctor",
                department: which,
            }
        }
        axios.post(`${port}/admin/editcategory`, Data).then((res) => {
            console.log(res)
            toast.success(res?.data?.message)
            if (res?.data?.success) {
                loadingFn(false)
                setConditionForHos({ edit: true, index: index })
                setDeletePopup({ ...DeletePopup, can: true })
                loadingFn(false)
            }
        }).catch((err) => {
            toast.info(err.response?.data?.message)
            loadingFn(false)
        })
        console.log("Data>>>>>>", Data)
        loadingFn(true)

    }

    const EditFnBoxDoc = (index, which) => {
        console.log(Object.keys(DocSections))
        const Type = Object.keys(DocSections)
        let Data = {}
        if (Type[0] === "Features") {
            Data = {
                main_type: "Doctor",
                features: which
            }
        } else {
            Data = {
                type: Type[0],
                main_type: "Doctor",
                department: which,
            }
        }
        if (Data?.main_type) {
            axios.post(`${port}/admin/editcategory`, Data).then((res) => {
                console.log("res>>>>", res)
                if (res?.data?.success)
                    toast.success(res?.data?.message);
                setConditionForDoc({ edit: true, index: index })
                setDeletePopup({ ...DeletePopup, can: true })
                loadingFn(false)

            }).catch((err) => {
                toast.info(err.response?.data?.message)
                loadingFn(false)

            })
        } else {
            toast.info("Check Fields")
        }
        console.log(Data)
        loadingFn(true)
    }
    const EditFnBoxLab = (index, which) => {
        console.log(Object.keys(LabSections))
        const Type = Object.keys(LabSections)
        console.log("Typeeee>>>>>", Type[0])
        let Data = {}
        if (Type[0] === "Features") {
            Data = {
                main_type: "Laboratory",
                features: which
            }
        } else {
            Data = {
                main_type: "Laboratory",
                services: which
            }

        }
        console.log(Data)
        if (Data?.main_type) {
            axios.post(`${port}/admin/editcategory`, Data).then((res) => {
                console.log("res>>>>", res)
                if (res?.data?.success)
                    toast.success(res?.data?.message);
                setConditionForLab({ edit: true, index: index })
                setDeletePopup({ ...DeletePopup, can: true })
                loadingFn(false)
            }).catch((err) => {
                console.log(err)
                toast.info(err.response?.data?.message)
                loadingFn(false)
            })
        } else {
            toast.info("Check Fields")
        }
        loadingFn(true)
    }



    const CheckEdit = (which, maintype) => {
        const Type = Object.keys(LabSections)
        let Data = ''
        if (Type[0] === "Features") {
            Data = {
                main_type: maintype,
                features: which
            }
        } else {
            Data = {
                main_type: "Laboratory",
                services: which
            }

        }
        axios.post(`${port}/admin/editcategory`, Data).then((res) => {
            console.log("res>>>>", res)
            if (res?.data?.success)
                toast.success(res?.data?.message);
            return { data: "success" }
            loadingFn(false)
        }).catch((err) => {
            console.log(err)
            toast.info(err.response?.data?.message)
            loadingFn(false)
        })
    }

    const editHosSpeciality = (e, index) => {
        const value = e?.target?.value
        let tempSepeciality = [...Hosspecialities]
        tempSepeciality[index] = value
        setHosspecialities(tempSepeciality)
    }
    const editLabSpeciality = (e, index) => {
        const value = e?.target?.value
        let tempSepeciality = [...LabPrintingItems]
        tempSepeciality[index] = value
        setLabPrintingItems(tempSepeciality)
    }
    const editDocSpeciality = (e, index) => {
        const value = e?.target?.value
        let tempSepeciality = [...Docspecialities]
        tempSepeciality[index] = value
        setDocspecialities(tempSepeciality)
    }
    const SaveDoc = () => {
        console.log(Object.keys(DocSections))
        const Type = Object.keys(DocSections)
        let Data = {}
        if (Type[0] === "Features") {
            Data = {
                main_type: "Doctor",
                features: Docspecialities
            }
        } else {
            Data = {
                type: Type[0],
                main_type: "Doctor",
                department: Docspecialities,
            }
        }
        if (Data?.main_type) {
            axios.post(`${port}/admin/addcategory`, Data).then((res) => {
                console.log("res>>>>", res)
                if (res?.data?.success)
                    toast.success(res?.data?.message);
                loadingFn(false)
            })
        } else {
            toast.success("Check Fields")
        }
        console.log(Data)
        loadingFn(true)
    }
    const SaveHos = () => {
        console.log(Object.keys(HosSections))
        const Type = Object.keys(HosSections)
        console.log("Typeeee>>>>>", Type[0])
        let Data = {}
        if (Type[0] === "Features") {
            Data = {
                main_type: "Hospital",
                features: Hosspecialities
            }
        } else {
            Data = {
                type: Type[0],
                main_type: "Doctor",
                department: Hosspecialities,
            }
        }
        if (Data?.main_type) {
            axios.post(`${port}/admin/addcategory`, Data).then((res) => {
                console.log("res>>>>", res)
                if (res?.data?.success)
                    toast.success(res?.data?.message);
                loadingFn(false)
            })
        } else {
            toast.info("Check Fields")
        }
        console.log(Data)
        loadingFn(true)

    }
    const SaveLab = () => {
        console.log(Object.keys(LabSections))
        const Type = Object.keys(LabSections)
        console.log("Typeeee>>>>>", Type[0])
        let Data = {}
        if (Type[0] === "Features") {
            Data = {
                main_type: "Laboratory",
                features: LabPrintingItems
            }
        } else {
            Data = {
                main_type: "Laboratory",
                services: LabPrintingItems
            }

        }
        if (Data?.main_type) {
            axios.post(`${port}/admin/addcategory`, Data).then((res) => {
                console.log("res>>>>", res)
                if (res?.data?.success)
                    toast.success(res?.data?.message);
                loadingFn(false)
            })
        } else {
            toast.info("Check Fields")
        }
        loadingFn(true)
        console.log(Data)
    }


    const openModal = (type) => {
        if (ModalCondition?.open) {
            setModalCondition({ open: false })
        } else {
            setModalCondition({ open: true, type: type })
        }
    }

    const AddCategoryOnchange = (e) => {
        const value = e?.target?.value
        setModalCondition({ ...ModalCondition, value: value })
    }
    const AddCategory = () => {
        if (ModalCondition?.value) {
            if (ModalCondition?.type === "Hospital") {
                let TempData = [...Hosspecialities]
                TempData = [...TempData, ModalCondition?.value]
                setHosspecialities(TempData)
                setModalCondition({ open: false })
                toast.info("Click the Save button to apply your changes")
            } else if (ModalCondition?.type === "Doctor") {
                let TempData = [...Docspecialities]
                TempData = [...TempData, ModalCondition?.value]
                setDocspecialities(TempData)
                setModalCondition({ open: false })
                toast.info("Click the Save button to apply your changes")
            } else if (ModalCondition?.type === "Laboratory") {
                let TempData = [...LabPrintingItems]
                TempData = [...TempData, ModalCondition?.value]
                setLabPrintingItems(TempData)
                setModalCondition({ open: false })
                toast.info("Click the Save button to apply your changes")
            }
        } else {
            toast.info("Please enter values")
        }

    }

    const OpenDeletePopup = (index, type) => {
        if (DeletePopup?.delete) {
            setDeletePopup({ delete: false })
        } else {
            setDeletePopup({ ...DeletePopup, delete: true, index: index, type })
        }

    }
    console.log(Hosspecialities)
    const ConfirmDelete = () => {
        if (DeletePopup?.type === 'hospital') {
            let TempData = [...Hosspecialities]
            TempData.splice(DeletePopup?.index, 1)
            setHosspecialities(TempData)
            setDeletePopup({ delete: false })
        } else if (DeletePopup?.type === 'doctor') {
            let TempData = [...Docspecialities]
            TempData.splice(DeletePopup?.index, 1)
            setDocspecialities(TempData)
            setDeletePopup({ delete: false })
        } else if (DeletePopup?.type === 'lab') {
            let TempData = [...LabPrintingItems]
            TempData.splice(DeletePopup?.index, 1)
            setLabPrintingItems(TempData)
            setDeletePopup({ delete: false })
        }
    }

    return (
        <div className='MainAdminCategoryEdit'>
            <div className='MainAdminCategoryEditHeader'>
                <p>Edit Category</p>
            </div>

            {categories?.transformedData ?
                <>
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
                                        ConditionForHos?.index !== index ?
                                            <div onClick={() => { EditFnBox(index, ele) }} className='MainAdminCatSetSecondSecDivIcon'>
                                                {ConditionForHos?.edit &&
                                                    <i onClick={() => { OpenDeletePopup(index, "hospital") }} class="ri-close-line"></i>}
                                                <div className='MainAdminCatSetSecondSecDiv'>
                                                    <p>{ele}</p>
                                                </div>
                                            </div>
                                            :
                                            ConditionForHos?.edit && ConditionForHos.index == index &&
                                            < div className='MainAdminCatSetSecondSecDivIcon' >
                                                <i onClick={() => { OpenDeletePopup(index, "hospital") }} class="ri-close-line"></i>
                                                <input onChange={(e) => { editHosSpeciality(e, index) }} value={ele} className='MainAdminCatSetSecondSecDiv' />
                                            </div>
                                    )}
                                </div>
                                <div className='MainAdminCatEditSec'>
                                    {ConditionForHos.edit &&
                                        <>
                                            <button className='MainAdminCatEditSecbtn3' onClick={() => { openModal('Hospital') }}>Add more</button>
                                            <button className='MainAdminCatEditSecbtn2' onClick={SaveHos}>Save</button>
                                        </>
                                    }
                                    {!ConditionForHos.edit &&
                                        <button className='MainAdminCatEditSecbtn1' onClick={EditFn}>Edit</button>
                                    }
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
                            </div>
                            <div className='MainAdminCatSetSecondSec'>
                                <div className='MainAdminCatSetSecondSePtag'>
                                    <p>Speciality</p>
                                </div>

                                <div className='MainAdminCatSetSecondSecAlignItem'>
                                    {Docspecialities.map((ele, index) =>
                                        ConditionForDoc?.index !== index ?
                                            <div onClick={() => { EditFnBoxDoc(index, ele) }} className='MainAdminCatSetSecondSecDivIcon'>
                                                {ConditionForDoc?.edit &&
                                                    <i onClick={() => { OpenDeletePopup(index, "doctor") }} class="ri-close-line"></i>}
                                                <div className='MainAdminCatSetSecondSecDiv'>
                                                    <p>{ele}</p>
                                                </div>
                                            </div>
                                            :
                                            ConditionForDoc?.edit && ConditionForDoc.index == index &&
                                            < div className='MainAdminCatSetSecondSecDivIcon' >
                                                <i onClick={() => { OpenDeletePopup(index, "doctor") }} class="ri-close-line"></i>
                                                <input onChange={(e) => { editDocSpeciality(e, index) }} value={ele} className='MainAdminCatSetSecondSecDiv' />
                                            </div>
                                    )}
                                </div>
                                <div className='MainAdminCatEditSec'>
                                    {ConditionForDoc.edit &&
                                        <>
                                            <button className='MainAdminCatEditSecbtn3' onClick={() => { openModal('Doctor') }}>Add more</button>
                                            <button className='MainAdminCatEditSecbtn2' onClick={SaveDoc}>Save</button>
                                        </>
                                    }
                                    {!ConditionForDoc.edit &&
                                        <button className='MainAdminCatEditSecbtn1' onClick={EditFnDoc}>Edit</button>
                                    }
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
                                    <p>{LabSections?.Services ? "Services" : "Features"}</p>
                                </div>

                                <div className='MainAdminCatSetSecondSecAlignItem'>
                                    {LabPrintingItems?.map((ele, index) =>
                                        ConditionForLab?.index !== index ?
                                            <div onClick={() => { EditFnBoxLab(index, ele) }} className='MainAdminCatSetSecondSecDivIcon'>
                                                {ConditionForLab?.edit &&
                                                    <i onClick={() => { OpenDeletePopup(index, "lab") }} class="ri-close-line"></i>}
                                                <div className='MainAdminCatSetSecondSecDiv'>
                                                    <p>{ele}</p>
                                                </div>
                                            </div>
                                            :
                                            ConditionForLab?.edit && ConditionForLab.index == index &&
                                            < div className='MainAdminCatSetSecondSecDivIcon' >
                                                <i onClick={() => { OpenDeletePopup(index, "lab") }} class="ri-close-line"></i>
                                                <input onChange={(e) => { editLabSpeciality(e, index) }} value={ele} className='MainAdminCatSetSecondSecDiv' />
                                            </div>
                                    )}
                                </div>
                                <div className='MainAdminCatEditSec'>
                                    {ConditionForLab.edit &&
                                        <>
                                            <button className='MainAdminCatEditSecbtn3' onClick={() => { openModal('Laboratory') }}>Add more</button>
                                            <button className='MainAdminCatEditSecbtn2' onClick={SaveLab}>Save</button>
                                        </>
                                    }
                                    {!ConditionForLab.edit &&
                                        <button className='MainAdminCatEditSecbtn1' onClick={EditFnLab}>Edit</button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal className='MainAdminCatEditSecModal' open={ModalCondition?.open} onClose={openModal}>
                        <>
                            <div className='MainAdminCatEditSecModalDiv'>
                                <p>Add Category</p>
                                <input onChange={AddCategoryOnchange} type="text" placeholder='Input categories' />
                                <div className='MainAdminCatEditSecModalButton'>
                                    <button onClick={AddCategory}>Add</button>
                                </div>
                            </div>
                        </>
                    </Modal>
                    {DeletePopup?.can &&
                        <Modal className='EditQuestionsModalSec' open={DeletePopup?.delete} onClose={OpenDeletePopup}>
                            <div className='EditQuestionsModal'>

                                <DeleteIcon id="EditQuestionsDeleteIcon" />
                                <p>Are you sure you want to proceed with the removal?</p>
                                <div className='EditQuestionsModalFlex'>
                                    <button className='EditQuestionsModalFlex1' onClick={OpenDeletePopup}>Close</button>
                                    <button className='EditQuestionsModalFlex2' onClick={ConfirmDelete} >Confirm</button>
                                </div>
                            </div>
                        </Modal>
                    }
                    {
                        Loading &&
                        < Loader />
                    }
                </>
                : <>
                    <Loader />
                </>
            }
        </div >



    )
}
