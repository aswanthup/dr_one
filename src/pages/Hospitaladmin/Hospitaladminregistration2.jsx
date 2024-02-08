import React from 'react'
import '../Hospitaladmin/hospitaladminregistration2.css'

export default function Hospitaladminregistration2() {
  return (


    <div>

<div className='hospitaladminregistration2 flex'>
     
     <h1>Hospital Registration</h1>

     <div className='hospitaladminregistration_first flex'>

        <div  className='image_card_ho_ad flex'>
        <h4>Add Photos</h4> 
<div className='image_card_ho_ad2 flex' >
            <div className='image_card_ho_ad_section flex'>

                <img src="images/hosptal1 (1).jpg" alt="" />
                <img src="images/hosptal1 (1).jpg" alt="" />
                <img src="images/hosptal1 (1).jpg" alt="" />

                <div className='image_card_ho_ad_add_image flex'>
                <i class="ri-add-line"></i>
                </div>
            
            </div>

            <div>
                <h4>License Number</h4>
                <input type="text" />
            </div>
</div>
          
        </div>

        <div>

            <h4>Features</h4>

            <div className='Features_card_ho_ad flex'>


 
<div className='Features_card_ho_ad_check flex'>

<label class="form-control flex">
<input type="checkbox" name="checkbox" />
<h4>Features</h4>
</label>

<label class="form-control">
<input type="checkbox" name="checkbox" />
<h4>Features</h4>
</label>

    
</div>


<div className='Features_card_ho_ad_check flex'>

<label class="form-control flex">
<input type="checkbox" name="checkbox" />
<h4>Features</h4>
</label>

<label class="form-control">
<input type="checkbox" name="checkbox" />
<h4>Features</h4>
</label>

    
</div>

<div className='Features_card_ho_ad_check flex'>

<label class="form-control flex">
<input type="checkbox" name="checkbox" />
<h4>Features</h4>
</label>

<label class="form-control">
<input type="checkbox" name="checkbox" />
<h4>Features</h4>
</label>

    
</div>

<div className='Features_card_ho_ad_check flex'>

<label class="form-control flex">
<input type="checkbox" name="checkbox" />
<h4>Features</h4>
</label>

<label class="form-control">
<input type="checkbox" name="checkbox" />
<h4>Features</h4>
</label>

    
</div>



            </div>




        </div>

        <div>
        <h4>Specialties</h4>

        <div className='Specialties_card_ho_ad flex'>

        <div className='Features_card_ho_ad_check flex'>

<label class="form-control flex">
<input type="checkbox" name="checkbox" />
<h4>Features</h4>
</label>

<label class="form-control">
<input type="checkbox" name="checkbox" />
<h4>Features</h4>
</label>

    
</div>


<div className='Features_card_ho_ad_check flex'>

<label class="form-control flex">
<input type="checkbox" name="checkbox" />
<h4>Features</h4>
</label>

<label class="form-control">
<input type="checkbox" name="checkbox" />
<h4>Features</h4>
</label>

    
</div>

<div className='Features_card_ho_ad_check flex'>

<label class="form-control flex">
<input type="checkbox" name="checkbox" />
<h4>Features</h4>
</label>

<label class="form-control">
<input type="checkbox" name="checkbox" />
<h4>Features</h4>
</label>

    
</div>

<div className='Features_card_ho_ad_check flex'>

<label class="form-control flex">
<input type="checkbox" name="checkbox" />
<h4>Features</h4>
</label>

<label class="form-control">
<input type="checkbox" name="checkbox" />
<h4>Features</h4>
</label>

    
</div>

           
        </div>


        </div>

     </div>





     <div className='hospitaladminregistration_second flex' >
             
             <div>
                <h4>About</h4>
                <textarea name="" id="" cols="30" rows="10"></textarea>
             </div>

             <div>
                <h4>Address</h4>
                <textarea name="" id="" cols="30" rows="10"></textarea>
             </div>


     </div>

     <div className='ho_ad_re_button flex'>
             <a href=""><h4>Finish</h4></a>
     </div>

</div>
</div>

  )
}
