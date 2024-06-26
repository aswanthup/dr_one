import React, { useState, useEffect } from 'react';
import "./CusSigninAndSignUp.css";
import { Modal } from '@mui/material';
import { toast } from 'react-toastify';
import axios from 'axios';
import { port } from '../../config';
import ErrorIcon from '@mui/icons-material/Error';
export const CusSigninAndSignUp = ({ Caller: { ReCallF, OpenModal } }) => {
    const [openModal, setOpenModal] = useState(OpenModal);
    const [FormData, setFormData] = useState({})
    const [Errors, setErrors] = useState({})
    const [ChangeBoxes, setChangeBoxes] = useState({
        signIn: true,
        signUp: false,
    })
    useEffect(() => {
        setOpenModal(OpenModal);
    }, [OpenModal]);

    const handleClose = () => {
        setOpenModal(false);
        setChangeBoxes({ signIn: true })
        setFormData('')
        ReCallF();
    };

    const BoxChangeFungtinion = (data) => {
        if (data.signIn) {
            setChangeBoxes({ signIn: true })
            setFormData('')
        } else {
            setChangeBoxes({ signUp: true })
            setFormData('')
        }
    }
    const handlechanges = (e) => {
        const { name, value } = e?.target
        if (name === "name") {
            const filteredValue = value.replace(/[0-9]/g, '');
            setFormData({ ...FormData, [name]: filteredValue })
        } else if (name === "phone_no") {
            const sanitizedValue = value.replace(/[.-]/g, '');
            const truncatedValue = sanitizedValue.slice(0, 10);
            setFormData({ ...FormData, [name]: truncatedValue })
        } else if (name === "password") {
            const trimmedValue = value.trim();
            setFormData({ ...FormData, [name]: trimmedValue })
        } else {
            setFormData({ ...FormData, [name]: value })
        }

    }
    useEffect(() => {
        checkErrors()
    }, [FormData])

    const checkErrors = () => {
        if (ChangeBoxes?.signUp) {
            const errors = {};
            const Passwordpattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&]).{6,}$/;
            const EmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const PhonePattern = /^[6-9]\d{9}$/;
            if (FormData?.password && !Passwordpattern.test(FormData?.password)) {
                errors.password = "Password must be 6+ characters with an uppercase letter, digit, and special character.";
            }

            if (FormData?.email && !EmailPattern.test(FormData?.email)) {
                errors.email = "Please enter a valid email address.";
            }

            if (FormData?.phone_no && !PhonePattern.test(FormData?.phone_no)) {
                errors.phone = "Please enter a valid phone number.";
            }

            if (FormData?.password && FormData?.repassword && FormData?.password !== FormData?.repassword) {
                errors.repassword = "Passwords do not match.";
            }
            setErrors(errors);
        }
    }
    const handleKeyPress = (event) => {
        // Check if the pressed key is '.' or '-'
        if (event?.key === '.' || event?.key === '-' || event?.key === 'e' || event?.key === '+' || event?.key === 'E') {
            // Prevent the default behavior for these keys
            event.preventDefault();
        }
    };
    const onSignIn = () => {
        const SubmitValues = !FormData?.email || !FormData?.password
        if (!SubmitValues) {
            axios.post(`${port}/user/userlogin`, FormData).then((res) => {
                console.log("res>>>>", res)
                const loginData = { id: res?.data?.logged_id };
                localStorage.setItem("cuslogin", JSON.stringify(loginData))
                if (res?.data?.success) toast.success(res?.data?.message);
                window.location.reload()
            }).catch((err) => {
                toast.info(err?.response?.data?.message);
            })
        } else {
            toast.info("Check Email or Password")
        }
    }
    const onSignUp = () => {
        checkErrors()
        const SubmitValues = !FormData?.email || !FormData?.password || !FormData?.phone_no || !FormData?.repassword || !FormData?.name
        const FindError = Errors?.email || Errors?.password || Errors?.phone || Errors?.repassword
        if (!SubmitValues && !FindError) {
            axios.post(`${port}/user/addusers`, FormData).then((res) => {
                console.log("res>>>", res)
                if (res?.data?.success) toast.success(res?.data?.message);
            }).catch((err) => {
                console.log(err)
                toast.info(err?.response?.data?.message);
            })
        } else {
            if (FindError) {
                toast.info(FindError)
            } else {
                toast.info(`Check Required fields`)
            }
        }
        console.log("SubmitValues>>>>", SubmitValues)
    }
    return (
        <>
            <Modal
                className='CusSigninAndSignUpModal container'
                open={openModal}
                onClose={handleClose}
            >
                <div className='CusSigninAndSignUpModalAdjst'>


                    {/* LOGIN */}
                    {ChangeBoxes?.signIn ?
                        <>
                            <div className="toploginnav flex">
                                <div className="toploginnavlogo">
                                    <h3>
                                        DOCONE
                                    </h3>
                                </div>

                                <div onClick={() => { BoxChangeFungtinion({ signUp: true }) }} className="toploginnavlogo flex">
                                    <h4 className='smallh4'>Don't have an account?</h4>
                                    <h4 style={{ color: "#3a65fd" }}>Sign up </h4>
                                </div>
                            </div>
                            <div className="toplogindata flex">

                                <div className="toplogindataimg flex">

                                    <img src="/images/logincu.png" alt="" />

                                </div>

                                <div className="toplogindatainput flex">

                                    <h3 className='smallh3'>
                                        Welcome Back
                                    </h3>
                                    <h4 className='smallh4'>Login your account</h4>
                                    <h4 className="toplogindatatext">Email</h4>
                                    <input onChange={handlechanges} name='email' type="text" />

                                    <h4 className="toplogindatatext">Password</h4>
                                    <input onChange={handlechanges} name='password' type="password" />

                                    <button onClick={onSignIn} className="toplogindatabutton flex" ><h4>Sign in</h4></button>

                                </div>
                            </div>
                        </>
                        :
                        ChangeBoxes?.signUp ?
                            <>


                                {/*END LOGIN */}




                                {/* REGISTER */}


                                {/*END REGISTER */}

                                <div className="toploginnav flex">
                                    <div className="toploginnavlogo">
                                        <h3>
                                            DOCONE
                                        </h3>
                                    </div>

                                    <div onClick={() => { BoxChangeFungtinion({ signIn: true }) }} className="toploginnavlogo flex">
                                        <h4 className='smallh4'>Have an account?</h4>
                                        <h4 style={{ color: "#3a65fd" }}>Log in</h4>
                                    </div>
                                </div>
                                <div className="registerpopup">

                                    <h2 className='smallh3'>
                                        Create your account
                                    </h2>
                                    <div>
                                        <h4 className="toplogindatatext">Name</h4>
                                        <input value={FormData?.name} onChange={handlechanges} name='name' type="text" />
                                    </div>

                                    <div className="registerpopupleft flex">
                                        <div className='registerpopuinputs'>
                                            <h4 className="toplogindatatext">Phone Number</h4>
                                            <input value={FormData?.phone_no} onKeyDown={handleKeyPress} style={{ border: Errors?.phone ? '1px solid red' : '' }} onChange={handlechanges} name='phone_no' type="number" />
                                        </div>
                                        <div className='registerpopuinputs'>
                                            <h4 className="toplogindatatext">Email</h4>
                                            <input value={FormData?.email} style={{ border: Errors?.email ? '1px solid red' : '' }} onChange={handlechanges} name='email' type="email" />
                                        </div>

                                    </div>
                                    <div className="registerpopupright flex">

                                        <div className='registerpopuinputs'>
                                            <h4 className="toplogindatatext">Password</h4>
                                            <input value={FormData?.password} style={{ border: Errors?.password ? '1px solid red' : '' }} onChange={handlechanges} name='password' type="Password" />

                                        </div>
                                        <div className='registerpopuinputs'>
                                            <h4 className="toplogindatatext">Confirm Password</h4>
                                            <input value={FormData?.repassword} style={{ border: Errors.repassword ? '1px solid red' : '' }} onChange={handlechanges} name='repassword' type="Password" />
                                        </div>
                                    </div>
                                    {Errors?.phone || Errors?.email || Errors?.password || Errors?.repassword ?
                                        <div className='registerpopuinputsErrorSec'>
                                            {Errors?.phone &&
                                                <div className='registerpopuinputsErrorSecFlex'>
                                                    <ErrorIcon id="registerpopuinputsErrorSecFlexIcon" />
                                                    <p>{Errors?.phone}</p>
                                                </div>
                                            }
                                            {Errors?.email &&

                                                <div className='registerpopuinputsErrorSecFlex'>
                                                    <ErrorIcon id="registerpopuinputsErrorSecFlexIcon" />
                                                    <p>{Errors?.email}</p>
                                                </div>
                                            }
                                            {Errors?.password &&
                                                <div className='registerpopuinputsErrorSecFlex'>
                                                    <ErrorIcon id="registerpopuinputsErrorSecFlexIcon" />
                                                    <p>{Errors?.password}</p>
                                                </div>
                                            }
                                            {Errors?.repassword &&
                                                <div className='registerpopuinputsErrorSecFlex'>
                                                    <ErrorIcon id="registerpopuinputsErrorSecFlexIcon" />
                                                    <p>{Errors?.repassword}</p>
                                                </div>
                                            }
                                        </div>
                                        : ''
                                    }
                                    <button onClick={onSignUp} className="toplogindatabutton flex" ><h4>Sign Up</h4></button>

                                </div>



                            </>
                            : ''
                    }

                </div>
            </Modal >
        </>
    );
};
