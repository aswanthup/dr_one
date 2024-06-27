import React from 'react'

export default function Addadmins() {
  return (
    <div>
        <div style={{marginTop:"1.3vw"}} className='flex admin_view_more'>
          <h3>Add New Admin</h3>
        </div >

        <div className='addadminimage'>
          <img src="../images/man.jpg" alt="" />
        </div>


        <div style={{marginTop:"1.3vw"}} className='flex admin2 admin_view_more'>
          <h3>Add Details</h3>
        </div >

    <div className='admindetailsinput flex'>

      <div>
        <h4>Admin Name</h4>
        <input type="text" />
      </div>

      <div>
        <h4>Type</h4>
        <input type="text" />
      </div>

      <div>
        <h4>Number</h4>
        <input type="text" />
      </div>

      <div>
        <h4>Email</h4>
        <input type="text" />
      </div>

    </div>


    <div style={{marginTop:"1.3vw"}} className='flex  admin2 admin_view_more'>
          <h3>Add Password</h3>
        </div >

        <div className='admindetailsinput flex'>

<div>
  <h4>Password</h4>
  <input type="text" />
</div>

<div>
  <h4>Confirm Password</h4>
  <input type="text" />
</div>

<div className='adminhide'>
  <h4>Confirm Password</h4>
  <input type="text" />
</div>

<div className='adminhide'>
  <h4>Confirm Password</h4>
  <input type="text" />
</div>


</div>



<button className='addadminsavebutton flex'>
  Save
</button>




    </div>
  )
}
