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
export const ProfileView = ({ data: { CloserModal, OpenPro } }) => {
    const data = { gender: 'male' }
    const [OpenProfile, setOpenProfile] = useState(OpenPro)
    const closeProfile = () => {
        setOpenProfile(false)
        CloserModal()
    }
    useEffect(() => {
        setOpenProfile(OpenPro)
    }, [OpenPro])

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
                        <p>Arun Yadhav</p>
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
                                <p>13 - 19 years</p>
                            </div>
                        </div>
                        <div className='ProfileAlignCardDetailSec'>
                            <div className='ProfileAlignCardAge'>
                                <LocalPhoneIcon id="ProfileAlignCardDetPhoneIcon" />
                                <p> +91 9747137305</p>
                            </div>

                        </div>
                        <div className='ProfileAlignCardDetailSec'>
                            <div className='ProfileAlignCardAge'>
                                <EmailIcon id="ProfileAlignCardDetPhoneIcon" />
                                <p> arunyadhav@gmail.com</p>
                            </div>
                        </div>
                        <div className='ProfileAlignCardDetailSec'>
                            <div className='ProfileAlignCardPInCode'>
                                <p>670604</p>
                            </div>

                        </div>
                        <div className='ProfileAlignCardDetailSec'>
                            <div className='ProfileAlignLogoutSec'>
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
