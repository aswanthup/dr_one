import React from 'react'
import '../Mainadmindoctor/mainadmindoctordetails.css'
import Mainadminnavbar from '../../../components/Mainadminnavbar/Mainadminnavbar'
import Mainadminsidebar from '../../../components/Mainadminsidebar/Mainadminsidebar'

export default function Mainadmindoctordetails() {
  return (
    <div className="mainadminsection">
<Mainadminnavbar />
        <div className="mainadmindoctorsection flex">

        <Mainadminsidebar />








           <div className="mainadmindoctordetails mainadmincontainer">
               <div className="scroll">
           <div className="mainadmindoctordatas flex">

           <div className="mainadmindoctordatas_profile flex">

                 <img className='mainadmindoctordatas_profile_photo' src="/images/doc.jpg" alt="" />

                        <div className="mainadmindoctordatas_profile_data flex">

                          <div className='flex'>  <h2>Dr.Anil Yadav</h2> <h4 className='highlight_data' style={{background:"#2A9D8F", color:"white",marginLeft:"10px"}}>Gov</h4></div>

                            <h4 className='highlight_data' style={{background:"#3A65FD", color:"white",}}>MBBS.M.D(Phychiatry)</h4>

                            <div className='flex'>
                                <div className='flex texticonset'>
                                    <i class="fi fi-sr-call-outgoing"></i>
                                    <h4 style={{marginLeft:"10px"}}>+91 9878898346</h4>

                                </div>
                                <div className='flex texticonset' style={{marginLeft:"20px"}}>
                                <i class="fi fi-sr-city"></i>    <h4 style={{marginLeft:"10px"}}>+91 9878898346</h4>
                                </div>
                            </div>

                            <div className='flex texticonset'>
                                <i class="fi fi-sr-envelope"></i>
                                <h4 style={{marginLeft:"10px"}}>anilyadhav@gmail.com</h4>
                            </div>
                            


                        </div>


            
         </div>

         <div className="mainadmindoctordatas_chart flex">

            
         <div className="mainadmindoctordatas_chart1 flex">

            <div className="mainadmindoctordatas_chart_icon flex">
            <i class="fi fi-sr-call-outgoing"></i>
            </div>

            <div style={{marginLeft:"18px"}}>
                <h2>200</h2>
                <h4>Views</h4>
            </div>

            

                        
            
          </div>

          <div className="mainadmindoctordatas_chart1 mainadmindoctordatas_chart2 flex">

          <div className="mainadmindoctordatas_chart_icon flex">
            <i class="fi fi-sr-call-outgoing"></i>
            </div>

            <div style={{marginLeft:"18px"}}>
                <h2>200</h2>
                <h4>Views</h4>
            </div>

            

                        
            
          </div>
            

                        
            
         </div>



                        
            
           </div>

           <div className="mainadmindoctoraboutavail flex">

           <div className="mainadmindoctorabout ">


<h3 style={{marginBottom:"1.3vw"}}>About</h3>
<div className='flex' style={{marginBottom:"1vw"}}><h4 className='highlight_data' style={{background:"#2A9D8F", color:"white",}}>Allopathy</h4> <h4 className='highlight_data' style={{marginLeft:"20px", background:"#FB8500", color:"white",}}>Epilepsy</h4></div>


<h4 style={{marginBottom:"1.3vw"}}>Open-source neutral-style system symbols elaborately crafted for designers and developers.
All of the icons are free for both personal and commercial use.</h4>
<h3 style={{marginBottom:"1.3vw"}}>Address</h3>  

<h4 style={{marginBottom:"1vw"}}>Fifth Floor Arcadia Market Sec 49 South City 2, Gurgaon</h4>
<div className='flex adimindoctorpin'>
    <h4 style={{background:"#3A65FD" , color:"white"}}>986744</h4>
    <h4 style={{background:"#F3F6FF" , color:"#6B8CFE"}}>Kozhikode</h4>
</div>
</div>

<div className="mainadmindoctoravilability">
<div className='flex' >
<i style={{color:"#6B8CFE"}} class="ri-time-fill"></i>
<h3 style={{marginBottom:"1.3vw", marginLeft:"0.6vw", }}>Availability</h3>
</div>

<div className="hospitaltime flex">
<div className="hospitaltime_name">

    <h3>Caritas hospital, Kotayam</h3>
    <h4>Sun,Mon,Tue,Wed,Thu,Fri,Sat</h4>
    
    </div>
    <div className="hospitaltimebutton">
        <h4>View Details</h4>
    
</div>
</div>

<div className="hospitaltime flex">
<div className="hospitaltime_name">

    <h3>Amrita School of Medicine, Kochi</h3>
    <h4>Sun,Mon,Tue,Wed,Thu,Fri,Sat</h4>
    
    </div>
    <div className="hospitaltimebutton">
        <h4>View Details</h4>
    
</div>
</div>
<div className="hospitaltime flex">
<div className="hospitaltime_name">

    <h3>Kottayam Medical College</h3>
    <h4>Sun,Mon,Tue,Wed,Thu,Fri,Sat</h4>
    
    </div>
    <div className="hospitaltimebutton">
        <h4>View Details</h4>
    
</div>
</div>
<div className="hospitaltime flex">
<div className="hospitaltime_name">

    <h3>Caritas hospital, Kotayam</h3>
    <h4>Sun,Mon,Tue,Wed,Thu,Fri,Sat</h4>
    
    </div>
    <div className="hospitaltimebutton">
        <h4>View Details</h4>
    
</div>
</div>



            
</div>



           </div>




           <div className='admin_disable_section flex'>
            <div>
           <i class="fi fi-sr-exclamation"></i>
           </div>

           <div className='admin_disable_button'>
             <h4>Disable</h4>
           </div>
           </div>


           <h3 style={{marginBottom:"1.3vw"}}>Views</h3>





<div className='table_2'>
 Table
</div>









            
            </div>
            </div>


 

        </div>


    </div>
  )
}
