import React, { useState, useEffect } from 'react';
import "./CusSigninAndSignUp.css";
import { Modal } from '@mui/material';

export const CusSigninAndSignUp = ({ Caller: { ReCallF, OpenModal } }) => {
    const [openModal, setOpenModal] = useState(OpenModal);

    // Update local state if OpenModal prop changes
    useEffect(() => {
        setOpenModal(OpenModal);
    }, [OpenModal]);

    const handleClose = () => {
        setOpenModal(false);
        ReCallF(); // Call the ReCallF function when modal is closed
    };

    console.log("Caller>>>>", ReCallF, OpenModal);

    return (
        <div>
            <Modal
                className='CusSigninAndSignUpModal'
                open={openModal}
                onClose={handleClose}
            >
                <div className='CusSigninAndSignUpModalAdjst'>

                </div>
            </Modal>
        </div>
    );
};
