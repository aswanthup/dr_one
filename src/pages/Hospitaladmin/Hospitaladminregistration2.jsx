import React, { useContext, useEffect, useState } from 'react'
import '../Hospitaladmin/hospitaladminregistration2.css'
import { MyContext } from '../../contexts/Contexts'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, ToastContainer, toast } from 'react-toastify'
import { port } from '../../config'
import { Backdrop, CircularProgress, Modal } from '@mui/material'

export default function Hospitaladminregistration2() {

        const { HospitalAdminRg, setHospitalAdminRg } = useContext(MyContext)
        const [Errors, setErrors] = useState({})
        const [location, setlocation] = useState([])
        const [ModalOpen, setModalOpen] = useState({
                features: false,
                specialties: false
        })
        const navigate = useNavigate()
        const [loader, setloader] = useState(false)

        const specialties = [
                { name: "Gynaecology" },
                { name: "Dermatology" },
                { name: "General medicine" },
                { name: "Mental health" },
                { name: "Pediatrics" },
                { name: "Cardiology" },

        ]
        const type = [
                { name: "Allopathy" },
                { name: "Homeopathy" },
                { name: "Unani" },
                { name: "Ayurvedic" },
        ]
        const Features = [
                { name: "Casuality" },
                { name: "Op" },
                { name: "Palliative" },
                { name: "Care" },
                { name: "Other Services " },

        ]

        // useEffect(() => {
        //         if (!HospitalAdminRg?.name && !HospitalAdminRg?.contact_no && !HospitalAdminRg?.password && !HospitalAdminRg?.email && !HospitalAdminRg?.repassword) {
        //                 navigate("/hospitaladminregistration1")
        //         }
        // }, [])

        const toastifyFun = (value, success) => {
                if (!success?.success) {
                        toast.info(value, {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                                transition: Bounce,
                        });
                } else {
                        toast.success(value, {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                                transition: Bounce,
                        });
                }

        }

        const updatePosts = (pinCode) => {
                if (pinCode.length === 6) {
                        console.log(6);
                        axios
                                .get(`https://api.postalpincode.in/pincode/${pinCode}`)
                                .then((res) => {
                                        console.log("res.data[0]?.PostOffice", res.data[0]?.PostOffice);
                                        if (res.data[0]?.PostOffice?.length > 0) {
                                                setlocation(res.data[0]?.PostOffice)
                                        } else {
                                                toast.info("Pincode not found")
                                        }
                                });
                } else {
                        console.log("pincode should be 6 digits");
                }
        };
        const inputChanges = (e) => {
                const { name, value } = e.target

                if (name === "pincode") {
                        if (value.length === 6) {
                                updatePosts(value);
                        }
                }

                setHospitalAdminRg({ ...HospitalAdminRg, [name]: value })
        }
        useEffect(() => {
                CheckValidation()
        }, [HospitalAdminRg.pincode])


        const storeArray = (e, which) => {
                const value = e.target.value;
                const isChecked = e.target.checked;
                let specialties = [...HospitalAdminRg?.specialties || []];
                let features = [...HospitalAdminRg?.features || []];

                if (which.specialties) {
                        if (isChecked) {
                                specialties.push(value);
                        } else {
                                specialties = specialties.filter(spec => spec !== value);
                        }
                } else {
                        if (isChecked) {
                                features.push(value);
                        } else {
                                features = features.filter(feat => feat !== value);
                        }
                }
                setHospitalAdminRg({ ...HospitalAdminRg, features: features, specialties: specialties });
        };


        const Finish = () => {
                setloader(true)
                if (HospitalAdminRg?.pincode && HospitalAdminRg?.about && HospitalAdminRg?.lisence_no && HospitalAdminRg?.type && HospitalAdminRg.features.length > 0 && HospitalAdminRg.specialties.length > 0 && !Errors?.pincode) {
                        CheckValidation()
                        axios.post(`${port}/hospital/registration`, HospitalAdminRg).then((res) => {
                                if (res?.data?.success) {
                                        toastifyFun(res?.data?.message, { success: true })
                                        window.location.reload()
                                        setloader(false)
                                }
                        }).catch((err) => {
                                console.log(err)
                                toastifyFun(err?.response?.data?.message, { info: true })
                                setloader(false)
                        })
                } else {
                        setloader(false)
                        toastifyFun("All fields are mandatory", { info: true })
                }

        }


        const CheckValidation = () => {
                const Pincode = /^\d{6}$/;
                if (HospitalAdminRg?.pincode) {
                        if (!Pincode.test(HospitalAdminRg?.pincode)) {
                                setErrors({ ...Errors, pincode: "Not a valid 6-digit number" })
                        } else {
                                setErrors({ ...Errors, pincode: "" })
                        }
                }

        }

        console.log("HospitalAdminRg>>>>>>>", HospitalAdminRg)
        const handleClose = () => {
                setloader(false)
        }
        const openModal = (data) => {
                if (data?.specialties) {
                        setModalOpen({ specialties: true })
                } else {
                        setModalOpen({ features: true })

                }
        }
        const CloseModal = (data) => {
                setModalOpen({ specialties: false, features: false })
                setModalOpen()
        }
        console.log("HospitalAdminRg>>>>", HospitalAdminRg)
        return (

                <div>
                        <Backdrop
                                sx={{
                                        color: "#fff",
                                        zIndex: (theme) => theme.zIndex.drawer + 1,
                                }}
                                open={loader}
                                onClick={handleClose}
                        >
                                <CircularProgress color="inherit" />
                        </Backdrop>
                        <ToastContainer />

                        <div className='hospitaladminregistration2 flex'>

                                <h1>Hospital Registration</h1>

                                <div className='image_card_ho_ad flex'>
                                        <h4>Add Photos</h4>
                                        <div className='image_card_ho_ad2 flex' >
                                                <div className='image_card_ho_ad_section flex'>
                                                        {/* 
                                                        <img src="images/hosptal1 (1).jpg" alt="" />
                                                        <img src="images/hosptal1 (1).jpg" alt="" />
                                                        <img src="images/hosptal1 (1).jpg" alt="" /> */}
                                                        <div className='image_card_ho_ad_add_image flex'>
                                                                <i class="ri-add-line"></i>
                                                        </div>

                                                </div>

                                        </div>

                                </div>

                                {/* <div className='Features_card_ho_ad_media'>
                                                <h4>Features</h4>
                                                <div className='Features_card_ho_ad flex'>
                                                        <div className='Features_card_ho_ad_check '>
                                                                {Features.map((ele) =>
                                                                        <label class="form-control flex">
                                                                                <input value={ele?.name || ''}
                                                                                        checked={HospitalAdminRg?.features?.includes(ele.name)}
                                                                                        onChange={(e) => { storeArray(e, { features: true }) }} type="checkbox" name="checkbox" />
                                                                                <h4>{ele.name}</h4>
                                                                        </label>
                                                                )}
                                                        </div>
                                                </div>
                                        </div> */}
                                {/* 
                                        <div className='Features_card_ho_ad_media'>
                                                <h4>Specialties</h4>
                                                <div className='Features_card_ho_ad flex'>
                                                        <div className='Features_card_ho_ad_check '>
                                                                {specialties.map((ele) =>
                                                                        <label class="form-control flex">
                                                                                <input
                                                                                        value={ele?.name}
                                                                                        checked={HospitalAdminRg?.specialties?.includes(ele.name)}
                                                                                        onChange={(e) => { storeArray(e, { specialties: true }) }}
                                                                                        type="checkbox"
                                                                                        name="checkbox"
                                                                                />
                                                                                <h4>{ele.name}</h4>
                                                                        </label>
                                                                )}
                                                        </div>
                                                </div>


                                        </div> */}

                                {/* </div> */}




                                <div className='hospital-second-section flex'>
                                        <div>
                                                <h4>License Number</h4>
                                                <input value={HospitalAdminRg?.lisence_no || ''} onChange={inputChanges} type="number" name='lisence_no' />
                                        </div>

                                        <div>
                                                <h4>Features</h4>
                                                <div onClick={() => { openModal() }} className='hospital-second-section-Div flex'> {HospitalAdminRg?.features?.length > 0 ?
                                                        <div className='hospital-second-section-Div-Map'>
                                                                {HospitalAdminRg?.features?.map(ele =>
                                                                        <p>{ele},&nbsp; </p>
                                                                )}
                                                        </div>
                                                        : <h4>Select Features</h4>}</div>
                                        </div>

                                        <div>
                                                <h4>Specialties</h4>
                                                <div onClick={() => { openModal({ specialties: true }) }} className='hospital-second-section-Div flex'>{HospitalAdminRg?.specialties?.length > 0 ?
                                                        <div className='hospital-second-section-Div-Map'>
                                                                {HospitalAdminRg?.specialties?.map(ele =>
                                                                        <p>{ele},&nbsp; </p>
                                                                )}
                                                        </div>
                                                        : <h4>Select Specialties</h4>}
                                                </div>
                                        </div>


                                </div>

                                <div className='hospitaladminregistration_second flex' >
                                        <div className='flex pin-lo'>
                                                <div className='pin-input' >
                                                        <h4>Pincode</h4>
                                                        <input value={HospitalAdminRg?.pincode || ''} onChange={inputChanges} type="number" maxLength={6} name="pincode" />
                                                        <div className="main-waring-section main-waring-section4 flex ">
                                                                <p className="register-number-warning">{Errors?.pincode}</p>
                                                        </div>
                                                </div>
                                                <div className='lo-input'>
                                                        <h4>Place</h4>
                                                        <select
                                                                type="text"
                                                                onChange={inputChanges}
                                                                value={HospitalAdminRg?.place ? HospitalAdminRg?.place : ''}
                                                                name="place"
                                                                className="hospitalRegTypeList"
                                                        >
                                                                <option
                                                                        disabled selected value=''
                                                                >
                                                                        Select place
                                                                </option>
                                                                {location?.map((types, index) => (
                                                                        <option style={{ color: "black" }}
                                                                                key={index}
                                                                                value={types?.Name}>
                                                                                {types?.Name}
                                                                        </option>
                                                                ))}
                                                        </select>
                                                </div>

                                        </div>



                                        <div>
                                                <h4>Type</h4>
                                                <select
                                                        type="text"
                                                        onChange={inputChanges}
                                                        value={HospitalAdminRg?.type ? HospitalAdminRg?.type : ''}
                                                        name="type"
                                                        className="hospitalRegTypeList"
                                                >
                                                        <option
                                                                disabled selected value=''
                                                        >
                                                                Select Type
                                                        </option>
                                                        {type.map((types, index) => (
                                                                <option style={{ color: "black" }}
                                                                        key={index}
                                                                        value={types?.name}>
                                                                        {types?.name}
                                                                </option>
                                                        ))}
                                                </select>
                                        </div>
                                </div>
                                <div className='flex hospital-adress-about'>

                                        <div className=''>
                                                <h4>About</h4>
                                                <textarea value={HospitalAdminRg?.about || ''} onChange={inputChanges} name="about" id="" cols="30" rows="10"></textarea>
                                        </div>

                                        <div>
                                                <h4>Address</h4>
                                                <textarea value={HospitalAdminRg?.address || ''} onChange={inputChanges} name="address" id="" cols="30" rows="5"></textarea>
                                        </div>

                                </div>









                                <div className='ho_ad_re_button flex'>
                                        <a onClick={() => { navigate(-1) }} ><h4>Back</h4></a>
                                        <a onClick={Finish} ><h4>Finish</h4></a>
                                </div>
                                <Modal className='Features_card_ho_Modal' open={ModalOpen?.features || ModalOpen?.specialties}
                                        onClose={CloseModal}
                                >
                                        <>
                                                <div className='Features_card_ho_ad flex'>



                                                        <div className='Features_card_ho_ad_check '>
                                                                {ModalOpen?.features ?
                                                                        Features.map((ele) =>
                                                                                <label class="form-control flex">
                                                                                        <input value={ele?.name || ''}
                                                                                                checked={HospitalAdminRg?.features?.includes(ele.name)}
                                                                                                onChange={(e) => { storeArray(e, { features: true }) }} type="checkbox" name="checkbox" />
                                                                                        <h4 className='select-new'>{ele.name}</h4>
                                                                                </label>
                                                                        )
                                                                        :
                                                                        specialties.map((ele) =>
                                                                                <label class="form-control flex">
                                                                                        <input value={ele?.name || ''}
                                                                                                checked={HospitalAdminRg?.specialties?.includes(ele.name)}
                                                                                                onChange={(e) => { storeArray(e, { specialties: true }) }} type="checkbox" name="checkbox" />
                                                                                        <h4 className='select-new'>{ele.name}</h4>
                                                                                </label>
                                                                        )
                                                                }
                                                        </div>



                                                        <button onClick={CloseModal} className='Features_card_ho_ad_button'><h4>ok</h4></button>
                                                </div>
                                        </>
                                </Modal>
                        </div>

                </div >

        )
}
