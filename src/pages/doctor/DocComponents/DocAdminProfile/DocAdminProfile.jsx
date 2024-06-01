import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import "./DocAdminProfile.css"
import dayjs from 'dayjs';
import { toast } from 'react-toastify';
import { Modal } from '@mui/material';
import { TimePicker } from '@mui/x-date-pickers';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
export const DocAdminProfile = () => {
    const [open, setOpen] = React.useState({});
    const [FormValues, setFormValues] = useState({})
    const [DoctorData, setDoctorData] = useState()
    const [EditValues, setEditValues] = useState({})
    const [deletePopup, setdeletePopUp] = useState(false)
    const [loading, setloading] = useState(false)
    const [Hospitals, setHospitals] = useState([])
    const [TimePickers, setTimePickers] = useState([
        { day: "Sunday", id: 1, availableTimes: [{ startTime: '', endTime: '' }] },
        { day: "Monday", id: 2, availableTimes: [{ startTime: '', endTime: '' }] },
        { day: "Tuesday", id: 3, availableTimes: [{ startTime: '', endTime: '' }] },
        { day: "Wednesday", id: 4, availableTimes: [{ startTime: '', endTime: '' }] },
        { day: "Thursday", id: 5, availableTimes: [{ startTime: '', endTime: '' }] },
        { day: "Friday", id: 6, availableTimes: [{ startTime: '', endTime: '' }] },
        { day: "Saturday", id: 7, availableTimes: [{ startTime: '', endTime: '' }] }
    ])
    const ResetTimePicker = () => {
        setTimePickers([
            { day: "Sunday", id: 1, availableTimes: [{ startTime: '', endTime: '' }] },
            { day: "Monday", id: 2, availableTimes: [{ startTime: '', endTime: '' }] },
            { day: "Tuesday", id: 3, availableTimes: [{ startTime: '', endTime: '' }] },
            { day: "Wednesday", id: 4, availableTimes: [{ startTime: '', endTime: '' }] },
            { day: "Thursday", id: 5, availableTimes: [{ startTime: '', endTime: '' }] },
            { day: "Friday", id: 6, availableTimes: [{ startTime: '', endTime: '' }] },
            { day: "Saturday", id: 7, availableTimes: [{ startTime: '', endTime: '' }] }
        ])

    }
    const storedLoginData = localStorage.getItem("loginData")
    const LoggedData = JSON.parse(storedLoginData);
    const [currentAvailability, setcurrentAvailability] = useState([])
    const handleOpen = (edit) => {
        if (edit?.edit) {
            setOpen({ edit: true });
            changeValues(edit?.id)
            setFormValues('')
        } else {
            setOpen({ another: true });
            setFormValues('')
        }
    }
    console.log("FormValues>>>>", FormValues)
    const changeValues = (id) => {
        const findData = currentAvailability.find(ele => ele?.hospital_id === id)
        setEditValues(findData)
    }
    const handleClose = () => {
        setOpen({ edit: false });
        setOpen({ another: false });
    }

    const PickTime = (e, day) => {
        const values = dayjs(e).$d; // Convert Day.js object to JavaScript Date object
        console.log(values)
        const name = day?.name;
        let mainind = day?.mainInd;
        let timingArray = [...TimePickers[mainind].availableTimes || []];
        timingArray[day?.index] = { ...timingArray[day?.index], [name]: values };
        let tempData = [...TimePickers || []];
        tempData[day?.mainInd] = { ...tempData[day?.mainInd], availableTimes: timingArray };
        setTimePickers(tempData);
    };
    const edittime = (e, day) => {
        const values = dayjs(e)?.$d; // Convert Day.js object to JavaScript Date object
        const name = day?.name;
        const mainind = day?.mainInd;
        const index = day?.index;
        let tempData = EditValues?.days_timing
        tempData[mainind].availableTimes[index] = { ...tempData[mainind].availableTimes[index], [name]: values }
        setEditValues({ ...EditValues, days_timing: tempData });
    };

    const NameOnchange = (e) => {
        const selectedOption = e.target.options[e.target.selectedIndex];
        const hospital_id = parseInt(e.target.value);
        const hospital_name = selectedOption.getAttribute('data-name');

        console.log("Selected ID:", hospital_id);
        console.log("Selected Name:", hospital_name);

        setFormValues({
            ...FormValues,
            hospital_id: hospital_id,
            hospital_name: hospital_name,
        });
    };

    const toastify = (data) => {
        if (data?.success) {
            toast.success(data?.msg)
        } else {
            toast.info(data?.msg)
        }
    }
    const getitngAllhospitals = () => {
        const data = {
            id: LoggedData?.id
        }
        if (data?.id) {
            // axios.post(`${port}/hospital/consultationdata`, data).then((res) => {
            //   setcurrentAvailability(res.data.data)
            //   console.log(res)
            // }).catch((err) => {
            //   console.log(err)
            //   toast.info(err?.response?.data?.message)
            // })
        }

    }
    useEffect(() => {
        //   axios.get(`${port}/hospital/list`).then((res) => {
        //     setHospitals(res.data.data)
        //     console.log(res)
        //   }).catch((err) => {
        //     console.log(err)
        //   })
        const data = {
            id: LoggedData?.id
        }
        //   axios.post(`${port}/doctor/doctordetails`, data).then((res) => {
        //     setDoctorData(res.data.data)
        //     console.log(res)
        //   }).catch((err) => {
        //     console.log(err)
        //   })
        getitngAllhospitals()
    }, [])


    const DecrementInput = (MainInd, SubInd) => {
        const tempPicker = [...TimePickers]
        tempPicker[MainInd].availableTimes.splice(SubInd, 1)
        setTimePickers(tempPicker)
    }
    const DecrementInputEdit = (MainInd, SubInd) => {
        const tempPicker = [...EditValues?.days_timing]
        tempPicker[MainInd].availableTimes.splice(SubInd, 1)
        setTimePickers(tempPicker)
    }

    console.log("EditValues>>>>", EditValues)
    const incrementBox = (id) => {
        const find = TimePickers?.filter(ele => ele.id === id)
        const index = TimePickers?.findIndex(ele => ele.id === id)
        if (find.length > 0 && TimePickers[index].availableTimes.length < 4) {
            let temp = [...TimePickers]
            temp[index] = { ...temp[index], availableTimes: [...temp[index]?.availableTimes, { startTime: '', endTime: '' }] }
            setTimePickers(temp)
        }
    }
    const EditIncrement = (id) => {
        const find = EditValues?.days_timing?.filter(ele => ele.id === id)
        const index = EditValues?.days_timing?.findIndex(ele => ele.id === id)
        if (find.length > 0) {
            let temp = [...EditValues?.days_timing]
            temp[index] = { ...temp[index], availableTimes: [...temp[index]?.availableTimes, { startTime: '', endTime: '' }] }
            console.log("temp>>>", temp)
            setEditValues({ ...EditValues, days_timing: temp })
        }
    }
    console.log("FormValues>>>", FormValues)

    const SaveData = () => {
        const data = {
            hospital_id: FormValues?.hospital_id,
            days: TimePickers,
            doctor_id: LoggedData?.id
        }

        // const checkingValues = TimePickers?.filter(Values => {
        //   const CheckStartPoint = Values?.availableTimes?.filter(availableTimes =>
        //     availableTimes?.startTime
        //   );
        //   const checkEndPoint = Values?.availableTimes?.filter(ele => ele?.endTime);
        //   return checkEndPoint?.length === CheckStartPoint?.length
        // })
        // console.log("checkingValues>>>>", checkingValues)
        // if (!FormValues?.hospital_id && checkingValues?.length > 0) {
        //   toastify({ msg: "Hospital not default; residential auto-added." })
        // }

        let hasStartTime = [];
        let hasEndTime = [];
        let FindEndTime = [];
        let FindStartTime = [];
        let checkingValues = false;
        if (TimePickers && Array.isArray(TimePickers)) {
            TimePickers.forEach((Values) => {
                // Filter out undefined values while adding to hasStartTime and hasEndTime
                const startTime = Values?.availableTimes?.find(availableTime => availableTime?.startTime);
                const endTime = Values?.availableTimes?.find(availableTime => availableTime?.endTime);
                if (startTime) hasStartTime.push(startTime);
                if (endTime) hasEndTime.push(endTime);
                FindStartTime = hasStartTime.filter(ele => ele?.endTime);
                FindEndTime = hasEndTime.filter(ele => ele?.startTime);
                // console.log("FindStartEndTime>>>", FindStartEndTime);
            });
        }
        if (hasStartTime.length === FindStartTime.length && hasEndTime.length === FindEndTime.length) {
            checkingValues = true;
        }
        console.log("checkingValues>>>>", checkingValues)
        if (checkingValues && !FormValues?.hospital_id && !FormValues?.hospital_name) {
            toastify({ msg: "Hospital not default; residential auto-added." })
        }
        if (checkingValues) {
            setloading(true)
            // axios.post(`${port}/hospital/consultation_details`, data).then((res) => {
            //   if (res?.data?.success) {
            //     toastify({ msg: res?.data?.message, success: true })
            //     handleClose()
            //     ResetTimePicker()
            //     getitngAllhospitals()
            //     setloading(false)
            //   }
            // }).catch((err) => {
            //   toastify({ msg: err?.response?.data?.message })
            //   setloading(false)
            // })
        } else {
            toastify({ msg: "Please verify either the start time or the end time" })
            setloading(false)
        }

    }
    const EditData = () => {
        const checkingValues = EditValues.days_timing?.filter(Values => {
            const CheckStartPoint = Values?.availableTimes?.filter(availableTimes =>
                availableTimes?.startTime
            );
            const checkEndPoint = Values?.availableTimes?.filter(ele => ele?.endTime);
            return checkEndPoint?.length === CheckStartPoint?.length
        })
        console.log("checkingValues>>>", checkingValues)
        if (checkingValues.length === 7) {
            setloading(true)
            // axios.post(`${port}/hospital/edit_consultation`, EditValues).then((res) => {
            //   if (res?.data?.success) {
            //     toastify({ msg: res?.data?.message, success: true })
            //     handleClose()
            //     getitngAllhospitals()
            //     setloading(false)
            //   }
            // }).catch((err) => {
            //   toastify({ msg: err?.response?.data?.message })
            //   setloading(false)
            // })
        } else {
            toastify({ msg: "Please verify either the start time or the end time" })
            setloading(false)
        }

    }
    const DeleteTimeConfirm = (check) => {
        if (check.cls) {
            setdeletePopUp({ condition: false })
        } else {
            setdeletePopUp({ id: check.id, condition: true, index: check.index })
        }
    }
    const ConfirmDelete = () => {
        const data = {
            id: deletePopup?.id,
            doctor_id: LoggedData?.id
        }
        setloading(true)
        //   axios.post(`${port}/hospital/delete_availability`, data).then((res) => {
        //     console.log("res>>>", res)
        //     if (res?.data?.success) {
        //       let allAvailblity = [...currentAvailability]
        //       allAvailblity.splice(deletePopup.index, 1)
        //       setcurrentAvailability(allAvailblity)
        //       DeleteTimeConfirm({ cls: true })
        //       toastify({ success: true, msg: res?.data?.message })
        //       setloading(false)
        //     }
        //   }).catch((err) => {
        //     toast.info(err.response.data.message)
        //     setloading(false)
        //   })
    }
    return (
        <>
            <div className="mainadmindoctordatas flex">

                <div className="mainadmindoctordatas_profile flex">

                    <img className='mainadmindoctordatas_profile_photo' src="/images/doc.jpg" alt="" />

                    <div className="mainadmindoctordatas_profile_data flex">

                        <div className='flex'>  <h2>Dr.Anil Yadav</h2> <h4 className='highlight_data' style={{ background: "#2A9D8F", color: "white", marginLeft: "10px" }}>Gov</h4></div>

                        <h4 className='highlight_data' style={{ background: "#3A65FD", color: "white", }}>MBBS.M.D(Phychiatry)</h4>

                        <div className='flex'>
                            <div className='flex texticonset'>
                                <i class="fi fi-sr-call-outgoing"></i>
                                <h4 style={{ marginLeft: "10px" }}>+91 9878898346</h4>

                            </div>
                            <div className='flex texticonset' style={{ marginLeft: "20px" }}>
                                <i class="fi fi-sr-city"></i>    <h4 style={{ marginLeft: "10px" }}>+91 9878898346</h4>
                            </div>
                        </div>

                        <div className='flex texticonset'>
                            <i class="fi fi-sr-envelope"></i>
                            <h4 style={{ marginLeft: "10px" }}>anilyadhav@gmail.com</h4>
                        </div>



                    </div>



                </div>

                <div className="mainadmindoctordatas_chart flex">


                    <div className="mainadmindoctordatas_chart1 flex">

                        <div className="mainadmindoctordatas_chart_icon flex">
                            <i class="fi fi-sr-call-outgoing"></i>
                        </div>

                        <div style={{ marginLeft: "18px" }}>
                            <h2>200</h2>
                            <h4>Views</h4>
                        </div>





                    </div>

                    <div className="mainadmindoctordatas_chart1 mainadmindoctordatas_chart2 flex">

                        <div className="mainadmindoctordatas_chart_icon flex">
                            <i class="fi fi-sr-call-outgoing"></i>
                        </div>

                        <div style={{ marginLeft: "18px" }}>
                            <h2>200</h2>
                            <h4>Views</h4>
                        </div>





                    </div>




                </div>





            </div>

            <div className="mainadmindoctoraboutavail flex">

                <div className="mainadmindoctorabout ">
                    <div style={{ marginBottom: "1.3vw" }} className='mainadmindoctoraboutDiv'>
                        <h3>About</h3>
                        <EditIcon id="mainadmindoctoraboutDivIcon" />
                    </div>

                    <div className='flex' style={{ marginBottom: "1vw" }}><h4 className='highlight_data' style={{ background: "#2A9D8F", color: "white", }}>Allopathy</h4> <h4 className='highlight_data' style={{ marginLeft: "20px", background: "#FB8500", color: "white", }}>Epilepsy</h4></div>


                    <h4 style={{ marginBottom: "1.3vw" }}>Open-source neutral-style system symbols elaborately crafted for designers and developers.
                        All of the icons are free for both personal and commercial use.</h4>
                    <h3 style={{ marginBottom: "1.3vw" }}>Address</h3>

                    <h4 style={{ marginBottom: "1vw" }}>Fifth Floor Arcadia Market Sec 49 South City 2, Gurgaon</h4>
                    <div className='flex adimindoctorpin'>
                        <h4 style={{ background: "#3A65FD", color: "white" }}>986744</h4>
                        <h4 style={{ background: "#F3F6FF", color: "#6B8CFE" }}>Kozhikode</h4>
                    </div>
                </div>

                <div className="mainadmindoctoravilability">
                    <div className='mainadmindoctoravilabilityHeight flex' >
                        <i style={{ color: "#6B8CFE" }} class="ri-time-fill"></i>
                        <h3 style={{ marginBottom: "1.3vw", marginLeft: "0.6vw", }}>Availability</h3>
                    </div>

                    <div className='mainadmindoctoravilabilityContent'>
                        <div className="hospitaltime flex">
                            <div className="hospitaltime_name">

                                <h3>Caritas hospital, Kotayam</h3>
                                <h4>Sun,Mon,Tue,Wed,Thu,Fri,Sat</h4>
                            </div>
                            <div
                                // onClick={() => handleOpen({ edit: true, id: ele?.hospital_id })}
                                className="hospitaltimebutton">
                                <h4>View Details</h4>
                            </div>
                        </div>

                    </div>


                    <div className='mainadmindoctoravilabilityAdd'>
                        <button onClick={handleOpen}  >Add more</button>
                    </div>


                </div>



            </div>



            <Modal
                open={open.another}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className='viewdetails'>
                    <h2>Specify your hospital visit duration.</h2>
                    <div className='modalInputdiv'>
                        <label style={{ fontWeight: "500" }} className='modalInputdivlabel' >Select your residential or hospital</label>
                        <select onChange={NameOnchange} name="myBrowser"
                            className="modalInputOpenDiv">
                            <option selected disabled >Choose Hospitals or Residence</option>
                            <optgroup label="Select Residence or">
                                <option data-name="Residential" value=''>Residential</option>
                                <>
                                    <p className='modalInputPtag'><span className='modalInputPtagSpan'>+</span> Add Hospital</p>
                                </>
                            </optgroup>
                            <optgroup label="Hospitals">
                                {Hospitals.map((ele, index) =>
                                    <option data-name={ele.name} value={ele?.id}>{ele?.name}</option>
                                )}
                            </optgroup>
                        </select>
                    </div>
                    <label style={{ fontWeight: "500" }} className='modalInputdivlabel'>Select your Time</label>
                    <div className='viewdataTimePicker'>
                        <div className='viewdataTimePickerScroll' style={{ height: '50vh' }}>
                            {TimePickers?.map((ele, index) =>
                                <div className='viewdataTimeSec'>
                                    <label htmlFor="">{ele?.day}</label>
                                    <>
                                        {ele?.availableTimes?.map((data, ind) =>
                                            <div className='viewdataTimePickerDuelAlign' >
                                                <div className='viewdataTimePickerDuelStart' >
                                                    <label htmlFor="">Start time</label>
                                                    <TimePicker
                                                        // label="Start Time"
                                                        name='startTime'
                                                        className='viewdataTimePickerCompo'
                                                        value={data?.endTime ? dayjs(data?.startTime) : null}
                                                        onChange={(e) => { PickTime(e, { day: ele?.day, name: "startTime", index: ind, mainInd: index }) }}
                                                    />
                                                </div>
                                                <div className='viewdataTimePickerDuelStart' >
                                                    <label htmlFor="">End time</label>
                                                    <TimePicker
                                                        // label="End Time"
                                                        className='viewdataTimePickerCompo'
                                                        value={data?.endTime ? dayjs(data?.endTime) : null}
                                                        name='endTime'
                                                        onChange={(e) => { PickTime(e, { day: ele?.day, name: "endTime", index: ind, mainInd: index }) }}
                                                    />
                                                </div>
                                                {!ind > 0 ? <button onClick={() => { incrementBox(ele.id) }} className='viewdataTimeAddEx'>
                                                    <AddIcon id="viewdataTimeAddExIcon" />
                                                </button> :
                                                    <button onClick={() => { DecrementInput(index, ind) }} className='viewdataTimeRemo'>
                                                        <RemoveIcon id="viewdataTimeAddREmove" />
                                                    </button>
                                                }
                                            </div>
                                        )}
                                    </>
                                </div>
                            )}
                        </div>
                        <div className='viewdataFinalSaveButton'>
                            <button onClick={SaveData}>Save</button>
                        </div>
                    </div>
                </div>
            </Modal>
            {/* Edit modal */}
            <Modal
                open={open?.edit}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className='viewdetails'>
                    <h2>Specify your hospital visit duration.</h2>
                    <div className='modalInputdiv'>
                        <select value={EditValues?.hospital_name} name="myBrowser"
                            className="modalInputOpenDiv">
                            <option selected disabled >Choose Hospitals or Residence</option>
                            <option value=''>{EditValues?.hospital_name}</option>
                        </select>
                    </div>
                    <label>Select your Time</label>
                    <div className='viewdataTimePicker'>
                        <div className='viewdataTimePickerScroll'>
                            {EditValues?.days_timing?.map((ele, index) =>
                                <div className='viewdataTimeSec'>
                                    <label htmlFor="">{ele?.day}</label>
                                    <>
                                        {ele?.availableTimes?.map((data, ind) =>
                                            <div className='viewdataTimePickerDuelAlign' >
                                                <TimePicker
                                                    label="Start Time"
                                                    name='startTime'
                                                    className='viewdataTimePickerCompo'
                                                    value={dayjs(data?.startTime)}
                                                    onChange={(e) => { edittime(e, { day: ele?.day, name: "startTime", index: ind, mainInd: index }) }}
                                                />
                                                <TimePicker
                                                    label="End Time"
                                                    className='viewdataTimePickerCompo'
                                                    value={dayjs(data?.endTime)}
                                                    onChange={(e) => { edittime(e, { day: ele?.day, name: "endTime", index: ind, mainInd: index }) }}
                                                />
                                                {!ind > 0 ? <button onClick={() => { EditIncrement(ele.id) }} className='viewdataTimeAddEx'>
                                                    <AddIcon id="viewdataTimeAddExIcon" />
                                                </button> :
                                                    <button onClick={() => { DecrementInputEdit(index, ind) }} className='viewdataTimeRemo'>
                                                        <RemoveIcon id="viewdataTimeAddREmove" />
                                                    </button>
                                                }
                                            </div>
                                        )}</>
                                </div>
                            )}
                        </div>
                        <div className='viewdataFinalSaveButton'>
                            <button onClick={EditData}>Save</button>
                        </div>
                    </div>
                </div>
            </Modal>



        </>

    )
}
