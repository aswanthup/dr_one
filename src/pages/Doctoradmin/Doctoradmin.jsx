import React, { useEffect, useState } from 'react'
import Hospitaladminnotification from '../../components/Hospitaladminnotification'
import Rightnavbar from '../../components/Rightnavbar'
import "./doctoradmin.css";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { TimePicker } from '@mui/x-date-pickers';
import axios from 'axios';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import AddIcon from '@mui/icons-material/Add';
import 'react-toastify/dist/ReactToastify.css';
import dayjs from 'dayjs';
import DeleteIcon from '@mui/icons-material/Delete';
import { port } from '../../config';
export default function Doctoradmin() {
  const [open, setOpen] = React.useState({});
  const [FormValues, setFormValues] = useState({})
  const [EditValues, setEditValues] = useState({})
  const [deletePopup, setdeletePopUp] = useState(false)
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
  const [currentAvailability, setcurrentAvailability] = useState([])
  const handleOpen = (edit) => {
    if (edit?.edit) {
      setOpen({ edit: true });
      changeValues(edit?.id)
    } else {
      setOpen({ another: true });
    }
  }
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
    const values = dayjs(e).$d; // Convert Day.js object to JavaScript Date object
    const name = day?.name;
    const mainind = day?.mainInd;
    const index = day?.index;
    let tempData = EditValues?.days_timing
    tempData[mainind].availableTimes[index] = { ...tempData[mainind].availableTimes[index], [name]: values }
    console.log("tempData>>>", tempData)
    setEditValues({ ...EditValues, days_timing: tempData });
  };



  const NameOnchange = (e) => {
    setFormValues({ ...FormValues, hospital_id: parseInt(e?.target?.value), })
  }

  const toastify = (data) => {
    if (data?.success) {
      toast.success(data?.msg, {
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
      toast.info(data?.msg, {
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
  console.log("EditValues>>>", EditValues)
  const getitngAllhospitals = () => {
    axios.post(`${port}/hospital/consultationdata`).then((res) => {
      setcurrentAvailability(res.data.data)
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })

  }
  useEffect(() => {
    axios.get(`${port}/hospital/list`).then((res) => {
      setHospitals(res.data.data)
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
    getitngAllhospitals()
  }, [])


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
  console.log("TimePickers>>>>", TimePickers)
  const SaveData = () => {
    const data = {
      hospital_id: FormValues?.hospital_id,
      days: TimePickers
    }
    const checkingValues = TimePickers?.filter(Values => {
      const CheckStartPoint = Values?.availableTimes?.filter(availableTimes =>
        availableTimes?.startTime
      );
      const checkEndPoint = Values?.availableTimes?.filter(ele => ele?.endTime);
      return checkEndPoint?.length === CheckStartPoint?.length
    })
    console.log("checkingValues>>>>", checkingValues)
    if (!FormValues?.hospital_id) {
      toastify({ msg: "Hospital not default; residential auto-added." })
    }
    if (checkingValues?.length === 7) {
      axios.post(`${port}/hospital/consultation_details`, data).then((res) => {
        console.log(res)
        if (res?.data?.success) {
          toastify({ msg: res?.data?.message, success: true })
          handleClose()
          getitngAllhospitals()
        }
      }).catch((err) => {
        toastify({ msg: err?.response?.data?.message })
      })
    } else {
      toastify({ msg: "Please verify either the start time or the end time" })
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
      axios.post(`${port}/hospital/edit_consultation`, EditValues).then((res) => {
        if (res?.data?.success) {
          toastify({ msg: res?.data?.message, success: true })
          handleClose()
          getitngAllhospitals()
        }
      }).catch((err) => {
        toastify({ msg: err?.response?.data?.message })
      })
    } else {
      toastify({ msg: "Please verify either the start time or the end time" })
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
      id: deletePopup?.id
    }
    axios.post(`${port}/hospital/delete_availability`, data).then((res) => {
      console.log("res>>>", res)
      if (res?.data?.success) {
        let allAvailblity = [...currentAvailability]
        allAvailblity.splice(deletePopup.index, 1)
        setcurrentAvailability(allAvailblity)
        DeleteTimeConfirm({ cls: true })
        toastify({ success: true, msg: res?.data?.message })
      }
    })
  }
  return (
    <div>
      <div className="hospitaladmin-main flex">
        <ToastContainer />
        <Rightnavbar />
        <Modal
          onClose={() => { DeleteTimeConfirm({ cls: true }) }}
          open={deletePopup.condition}
          className='dltPopupAlignModal'
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <div className='DltPopupAlign'>
            <div className='DltPopupAlignIconDiv'>
              <DeleteIcon id="DltPopupAlignIcon" />
            </div>
            <h3>Are you sure you want to proceed with the removal?</h3>
            <div className='DltPopupAlignButtons'>
              <button onClick={() => { DeleteTimeConfirm({ cls: true }) }} className='DltPopupAlignButton'>Close</button>
              <button onClick={ConfirmDelete} className='DltPopupAlignButton2'>Confirm</button>
            </div>
          </div>
        </Modal>
        <div className="hospitaladmin_right">
          <Hospitaladminnotification />
          <div className='manage flex'>
            <div className="hospitaladmin_title flex">
              <h1>Manage Your</h1>
              <h1 className='color-blue'>Account</h1>
            </div>
            <div className="hospitaladmin_cards flex">
              <a href='' className="hospitaladmin_card hospitaladmin_card1 flex">
                <div>
                  <div className='hospitaladmin_number hospitaladmin_number1 flex' ><h2>24</h2></div>
                </div>
                <div>
                  <h4>Enquiries</h4>
                </div>
              </a>
              <a href='' className="hospitaladmin_card hospitaladmin_card2 flex">
                <div>
                  <div className='hospitaladmin_number hospitaladmin_number2 flex' ><h2>24</h2></div>
                </div>
                <div>
                  <h4>Pending</h4>
                </div>
              </a>
              <a href='' className="hospitaladmin_card hospitaladmin_card3 flex">
                <div>
                  <div className='hospitaladmin_number hospitaladmin_number3 flex' ><h2>24</h2></div>
                </div>
                <div>
                  <h4>Fulfilled</h4>
                </div>
              </a>
            </div>
          </div>
          <div className="availability">
            <h3>Availability</h3>
            <div className='availabilityFixedSize'>
              {currentAvailability.length > 0 ?
                currentAvailability?.map((ele, index) =>
                  <div className="available flex">
                    <div className="hospitalname">
                      <h4>
                        {ele?.hospital_name}
                      </h4>
                    </div>
                    <div className="hospitalname_button">
                      <button onClick={() => handleOpen({ edit: true, id: ele.hospital_id })}>
                        Edit
                      </button>
                      <button onClick={() => { DeleteTimeConfirm({ id: ele.id, index: index },) }}>
                        Delete
                      </button>
                    </div>
                  </div>
                ) :
                <h3>Data not found</h3>
              }
            </div>
            <div className='available_add_button_align'>
              <Button onClick={handleOpen} className="available_add_button flex">
                <h4> Add More </h4>
              </Button>
            </div>

          </div>
          <div>
            {/* add modal editing modal */}
            <Modal
              open={open.another}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <div className='viewdetails'>
                <h2>Specify your hospital visit duration.</h2>
                <div className='modalInputdiv'>
                  <select onChange={NameOnchange} name="myBrowser"
                    className="modalInputOpenDiv">
                    <option selected disabled >Choose Hospitals or Residence</option>
                    <optgroup label="Select Residence or">
                      <option value=''>Residential</option>
                      <>
                        <p className='modalInputPtag'><span className='modalInputPtagSpan'>+</span> Add Hospital</p>
                      </>
                    </optgroup>
                    <optgroup label="Hospitals">
                      {Hospitals.map((ele, index) =>
                        <option value={ele?.id}>{ele?.name}</option>
                      )}
                    </optgroup>
                  </select>
                </div>
                <label>Select your Time</label>
                <div className='viewdataTimePicker'>
                  <div className='viewdataTimePickerScroll' style={{ height: '50vh' }}>
                    {TimePickers?.map((ele, index) =>
                      <div className='viewdataTimeSec'>
                        <label htmlFor="">{ele?.day}</label>
                        <>
                          {ele?.availableTimes?.map((data, ind) =>
                            <div className='viewdataTimePickerDuelAlign' >
                              <TimePicker
                                label="Start Time"
                                name='startTime'
                                className='viewdataTimePickerCompo'
                                value={''}
                                onChange={(e) => { PickTime(e, { day: ele?.day, name: "startTime", index: ind, mainInd: index }) }}
                              />
                              <TimePicker
                                label="End Time"
                                className='viewdataTimePickerCompo'
                                value={''}
                                name='endTime'
                                onChange={(e) => { PickTime(e, { day: ele?.day, name: "endTime", index: ind, mainInd: index }) }}
                              />
                              {!ind > 0 ? <button onClick={() => { incrementBox(ele.id) }} className='viewdataTimeAddEx'>
                                <AddIcon id="viewdataTimeAddExIcon" />
                              </button> :
                                <div className='viewdataTimeAddGap'>
                                </div>
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
                                <div className='viewdataTimeAddGap'>
                                </div>
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
          </div>


        </div>


      </div >

    </div >
  )
}
