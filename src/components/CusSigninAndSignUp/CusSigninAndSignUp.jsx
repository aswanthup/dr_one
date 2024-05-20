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
                className='CusSigninAndSignUpModal container'
                open={openModal}
                onClose={handleClose}
            >
                <div className='CusSigninAndSignUpModalAdjst'>


                    {/* LOGIN */}
                      {/* <div className="toploginnav flex">
                             <div className="toploginnavlogo">
                                      <h3>
                                        DOCONE
                                      </h3>
                             </div>

                             <div className="toploginnavlogo flex">
                                <h4 className='smallh4'>Don't have an account?</h4>
                                <h4 style={{color:"#3a65fd"}}>Sign up </h4>
                             </div>
                      </div> */}












{/* <div className="toplogindata flex">

<div className="toplogindataimg flex">

    <img src="/images/logincu.png" alt="" />

</div>

<div className="toplogindatainput flex">

    <h3 className='smallh3'>
        Welcome Back
    </h3>
    <h4 className='smallh4'>Login your account</h4>


    <h4 className="toplogindatatext">Email</h4>
    <input type="text" />

    
    <h4 className="toplogindatatext">Password</h4>
    <input type="password" />

    <button className="toplogindatabutton flex" ><h4>Sign in</h4></button>
    
</div>
</div> */}


{/*END LOGIN */}




{/* REGISTER */}


{/*END REGISTER */}

<div className="toploginnav flex">
                             <div className="toploginnavlogo">
                                      <h3>
                                        DOCONE
                                      </h3>
                             </div>

                             <div className="toploginnavlogo flex">
                                <h4 className='smallh4'>Have an account?</h4>
                                <h4 style={{color:"#3a65fd"}}>Log in</h4>
                             </div>
                      </div>



<div className="registerpopup">

<h2 className='smallh3'>
        Create your account
</h2>
<h4 className="toplogindatatext">Name</h4>
<input type="text" />



    

<div className="registerpopupleft flex">
<div className='registerpopuinputs'>
<h4 className="toplogindatatext">Phone Number</h4>
<input type="text" />
</div>
<div className='registerpopuinputs'>
<h4 className="toplogindatatext">Email</h4>
<input type="text" />
</div>

</div>

<div className="registerpopupright flex">

<div className='registerpopuinputs'>
<h4 className="toplogindatatext">Password</h4>
<input type="Password" />
</div>
<div className='registerpopuinputs'>
<h4 className="toplogindatatext">Confirm Password</h4>
<input type="Password" />
</div>
</div>

<button className="toplogindatabutton flex" ><h4>Sign Up</h4></button>







</div>















                </div>
            </Modal>
        </div>
    );
};
