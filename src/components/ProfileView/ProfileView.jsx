import React, { useEffect, useState } from 'react'
import "./ProfileView.css"
import { Modal } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import TransgenderIcon from '@mui/icons-material/Transgender';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import axios from 'axios';
import { port } from '../../config';
export const ProfileView = ({ data: { CloserModal, OpenPro } }) => {
    const data = { gender: 'male' }
    const [OpenProfile, setOpenProfile] = useState(OpenPro)
    const [profile, setprofile] = useState()
    const closeProfile = () => {
        setOpenProfile(false)
        CloserModal()
    }
    const { id } = JSON.parse(localStorage.getItem("cuslogin")) || {};
    useEffect(() => {
        console.log(id)
        const data = {
            id: id
        }
        axios.post(`${port}/user/getprofile`, data).then((res) => {
            console.log("res>>>>>>>>>>>>>>", res)
            setprofile(res?.data?.userDetails)
        }).catch((err) => {
            console.log(err)
        })
        setOpenProfile(OpenPro)
    }, [OpenPro])




    const logout = () => {
        localStorage.removeItem("cuslogin");
        window.location.reload()
    }
    return (
        <>
            <Modal open={OpenProfile} onClose={closeProfile} className='ProfileViewAlign'>
                <div className='ProfileViewAlignCard'>
                    <div className='ProfileViewAlignCardEditBtnAlign'>
                        <button>
                            <EditIcon id="ProfileViewAlignCardEditBtnAlignEditIcon" />
                            Edit
                        </button>
                    </div>
                    <div className='ProfileAlignCardImg'>
                        <img src="/images/TempDocImg.jpg" alt="" />
                        <p>{profile?.name}</p>
                        <div className='ProfileAlignCardDetailSec'>
                            <div className='ProfileAlignCardDetGender'>
                                {
                                    data.gender === "male" ?
                                        <MaleIcon id="ProfileAlignCardDetGenderIcon" />
                                        :
                                        data.gender === "female" ?
                                            < FemaleIcon id="ProfileAlignCardDetGenderIcon" />
                                            : <TransgenderIcon id="ProfileAlignCardDetGenderIcon" />
                                }
                                <p> {data?.gender}</p>
                            </div>
                            <div className='ProfileAlignCardAge'>
                                <img className='' src="/images/Group 153.png" alt="" />
                                <p>{profile?.agegroup} years</p>
                            </div>
                        </div>
                        <div className='ProfileAlignCardDetailSec'>
                            <div className='ProfileAlignCardAge'>
                                <LocalPhoneIcon id="ProfileAlignCardDetPhoneIcon" />
                                <p> +91 {profile?.phone_no}</p>
                            </div>

                        </div>
                        <div className='ProfileAlignCardDetailSec'>
                            <div className='ProfileAlignCardAge'>
                                <EmailIcon id="ProfileAlignCardDetPhoneIcon" />
                                <p> {profile?.email}</p>
                            </div>
                        </div>
                        {profile?.pincode &&
                            <div className='ProfileAlignCardDetailSec'>
                                <div className='ProfileAlignCardPInCode'>
                                    <p>{profile?.pincode}</p>
                                </div>
                            </div>
                        }

                        <div className='ProfileAlignCardDetailSec'>
                            <div onClick={logout} className='ProfileAlignLogoutSec'>
                                <PowerSettingsNewIcon id="ProfileAlignCardDetLogoutIcon" />
                                <p className='ProfileAlignCardDetLogoutFont'>Logout</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}
