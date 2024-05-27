import React from 'react'
import '../User/userprofile.css'

import Headroom from 'react-headroom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Userprofile() {




    return (
        <div>

            <Headroom>
                <Navbar />
            </Headroom>
            <div className="container-third">

                <div className="editing-section flex">
                    <div>
                        <div className="photo-section flex">
                            <img src="images/man.jpg" alt="" />
                            <div className="img-button-section flex">
                                <a href="" className='flex'><h4>Upload Photo</h4></a>
                            </div>

                        </div>
                    </div>



                    <div className="editing-data-section">
                        <h1>Edit Your <span className='color-blue'>Profile</span></h1>
                        <div className="editing-input-section">
                            <div className="editing-input-label">
                                <h4>Name</h4>
                                <input type="text" placeholder='Arun' />
                            </div>

                            <div className="editing-input-label">
                                <h4>Second Name</h4>
                                <input type="text" placeholder='Kumar' />
                            </div>


                            <div className="editing-input-label">
                                <h4>Phone Number</h4>
                                <input type="text" placeholder='+91 8958367392' />
                            </div>

                            <div className="editing-input-label">
                                <h4>Email</h4>
                                <input type="text" placeholder='arunkumar@gmail.com' />
                            </div>

                            <div className="editing-input-label">
                                <h4>Password</h4>
                                <input type="text" placeholder='arun@123' />
                            </div>

                            <div className="editing-button-section flex">
                                <a href=""><h4 className='cancel-edit'>Cancel</h4></a>
                                <a href=""><h4 className='cancel-edit2'>Save</h4></a>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <Footer />
        </div>
    )
}
