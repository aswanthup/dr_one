import React from 'react'
import Hospitaladminnotification from '../../components/Hospitaladminnotification'
import Rightnavbar from '../../components/Rightnavbar'
import "../Doctoradmin/doctoradmin.css";




import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//  backgroundColor:"white",
// padding:'2px',
 

};



export default function Doctoradmin() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
<div>



<div className="hospitaladmin-main flex">



<Rightnavbar />

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

{/* <div className='hospitaladmin_images flex' >

<img src="images/hos.jpeg" alt="" />
<img src="images/hosptal1 (1).jpg" alt="" />
<img src="images/hosptal1 (2).jpg" alt="" />
<img src="images/hosptal1 (3).jpg" alt="" />
</div> */}


<div className="availability">
<h3>Availability</h3>
 
  <div className="available flex">
      <div className="hospitalname">
         <h4>
          home
         </h4>
      </div>


      <div onClick={handleOpen} className="hospitalname_button">
         <h4>
          View
         </h4>
      </div>


  </div>


  <div className="available flex ">
      <div className="hospitalname">
         <h4>
          Aster Mims Hospital
         </h4>
      </div>

      <div className="hospitalname_button">
         <h4>
          View
         </h4>
      </div>


  </div>

  <div className="available_add_button flex">
    <h4> Add More </h4>
  </div>


</div>



<div>
   
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
   <div style={style} className='viewdetails'>
        <h3>Availability</h3>
        <h4>Hospital Name</h4>
        <input type="text" />

   </div>
      </Modal>
    </div>


</div>


</div>

</div>
  )
}
