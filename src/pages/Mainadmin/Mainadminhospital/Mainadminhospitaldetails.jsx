import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { port } from '../../../config'
import axios from 'axios'

export default function Mainadminhospitaldetails({ Data }) {
  const location = useLocation()

  const [HospitalDetails, setHospitalDetails] = useState(Data)
  const [Feedbacks, setFeedbacks] = useState([])
  const [views, setviews] = useState([])

  console.log(HospitalDetails)

  useEffect(() => {
    const Data = {
      hospital_id: HospitalDetails?.id
    }
    axios.post(`${port}/hospital/getahospitalfeedback`, Data).then((res) => {
      console.log(res)
      setFeedbacks(res?.data?.data)
    })
    axios.post(`${port}/hospital/getahospitalfeedback`, Data).then((res) => {
      console.log(res)
      setviews(res?.data?.data)
    })
  }, [])

  return (

    <>
      <div className="mainadmindoctordatas flex">

        <div className="mainadmindoctordatas_profile flex">

          <img className='mainadmindoctordatas_profile_photo' src={HospitalDetails?.photo?.image1} alt="" />

          <div className="mainadmindoctordatas_profile_data flex">

            <div className='flex'>  <h2>{HospitalDetails?.name}</h2></div>

            <h4 className='highlight_data' style={{ background: "#3A65FD", color: "white", }}>{HospitalDetails?.type}</h4>

            <div className='flex'>
              <div className='flex texticonset'>
                <i class="fi fi-sr-call-outgoing"></i>
                <h4 style={{ marginLeft: "10px" }}>+91 {HospitalDetails?.contact_no}</h4>

              </div>

            </div>

            <div className='flex texticonset'>
              <i class="fi fi-sr-envelope"></i>
              <h4 style={{ marginLeft: "10px" }}>{HospitalDetails?.email}</h4>
            </div>



          </div>



        </div>

        <div className="mainadmindoctordatas_chart flex">


          <div className="mainadmindoctordatas_chart1 flex">

            <div className="mainadmindoctordatas_chart_icon flex">
              <i class="fi fi-sr-overview"></i>
            </div>

            <div style={{ marginLeft: "18px" }}>
              <h2>200</h2>
              <h4>Views</h4>
            </div>

          </div>

          <div className="mainadmindoctordatas_chart1 mainadmindoctordatas_chart2 flex">

            <div className="mainadmindoctordatas_chart_icon flex">
              <i class="fi fi-sr-call-outgoing"></i>
            </div>

            <div style={{ marginLeft: "18px" }}>
              <h2>200</h2>
              <h4>Contacted</h4>
            </div>
          </div>
        </div>

      </div>


      <div className="photosdivadmin">
        <div className="photosdivadminsection flex">
          {HospitalDetails?.photo?.image2 &&
            < img src={HospitalDetails?.photo?.image2} alt="" />
          }
          {HospitalDetails?.photo?.image3 &&
            <img src={HospitalDetails?.photo?.image3} alt="" />
          }
          {HospitalDetails?.photo?.image4 &&
            <img src={HospitalDetails?.photo?.image4} alt="" />
          }

        </div>
      </div>

      <div className="mainadmindoctoraboutavail flex">

        <div className="mainadmindoctorabout ">


          <h3 style={{ marginBottom: "1.3vw" }}>About</h3>


          <h4 style={{ marginBottom: "1.3vw" }}>{HospitalDetails?.about}</h4>
          <h3 style={{ marginBottom: "1.3vw" }}>Address</h3>

          <h4 style={{ marginBottom: "1vw" }}>{HospitalDetails?.address}</h4>
          <div className='flex adimindoctorpin'>
            <h4 style={{ background: "#3A65FD", color: "white" }}>{HospitalDetails.pincode}</h4>
          </div>
        </div>

        <div className="mainadmindoctoravilability mainadmindoctoravilability2">



          <div className='admin_fea_avai flex'>

            <div className='admin_fea_avai_left'>
              <h3 style={{ marginBottom: "1.3vw" }}>Features</h3>
              {HospitalDetails?.feature.map(ele =>
                <h4 style={{ marginBottom: "1.3vw" }}><i class="ri-arrow-right-circle-fill"></i>{ele}</h4>
              )}
            </div>

            <div className='admin_fea_avai_right'>
              <h3 style={{ marginBottom: "1.3vw" }}>Specialities</h3>

              {HospitalDetails?.speciality.map(ele =>
                <h4 style={{ marginBottom: "1.3vw" }}><i class="ri-arrow-right-circle-fill"></i>{ele}</h4>
              )}
            </div>




          </div>




        </div>


      </div>

      {Feedbacks.length > 0 &&
        <>

          <div style={{ marginTop: "1.3vw" }} className='flex admin_view_more'>
            <h3>Latest Feedbacks</h3>
            <h4 >View More<i style={{ marginLeft: "0.5vw" }} class="ri-arrow-right-up-line"></i></h4>
          </div>

          <div className="feedbacksectiondoctor">
            {Feedbacks.map((ele, index) =>
              index < 3 &&
              <div className="feedbacksectiondoctorcard flex">
                <div><img src="/images/man.jpg" alt="" /></div>
                <div className='flex feedbacksectiondoctorcarddata'>
                  <div className='flex feedbacksectiondoctorcardstar'>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                  </div>
                  <h4>Dr. Yadav took the time to thoroughly understand my medical history and current concerns. He listened attentively and asked insightful questions, making me feel heard and valued as a patient. His deep knowledge and expertise were evident, and he explained my diagnosis and treatment options in a clear and understandable manner</h4>
                  <div className='flex feedbacksectiondoctorcardname'>
                    <i class="fi fi-ss-octagon-check"></i>
                    <h3 style={{ marginLeft: "10px" }}>Aswanth</h3>
                  </div>
                </div>
              </div>
            )}

          </div>
        </>
      }



      <h3 style={{ marginBottom: "1.3vw" }}>Views</h3>





      <table className='doctortable'>
        <tr>
          <th>No</th>
          <th>Customer Name</th>
          <th>Mobile Number</th>
          <th>Date & Time</th>
          <th>PIN & Location</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Maria Anders</td><td>+49 30 123456</td>
          <td>Germany</td>


          <td>9/5/2024</td>
          <td>Contacted</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Francisco Chang</td><td>+52 55 987654</td>
          <td>Mexico</td>

          <td>2/5/2024</td>
          <td>View</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Helen Bennett</td> <td>+44 20 7654321</td>
          <td>UK</td>

          <td>4/5/2024</td>
          <td>View</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Yoshi Tannamuri</td> <td>+1 604 1234567</td>
          <td>Canada</td>


          <td>4/5/2024</td>
          <td>Contacted</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Yoshi Tannamuri</td><td>+1 604 1234567</td>
          <td>Canada</td>

          <td>4/5/2024</td>
          <td>View</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Yoshi Tannamuri</td><td>+1 604 1234567</td>
          <td>Canada</td>


          <td>4/5/2024</td>
          <td>Contacted</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Yoshi Tannamuri</td><td>+1 604 1234567</td>
          <td>Canada</td>


          <td>4/5/2024</td>
          <td>Contacted</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Francisco Chang</td><td>+52 55 987654</td>
          <td>Mexico</td>

          <td>2/5/2024</td>
          <td>View</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Helen Bennett</td> <td>+44 20 7654321</td>
          <td>UK</td>

          <td>4/5/2024</td>
          <td>View</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Yoshi Tannamuri</td> <td>+1 604 1234567</td>
          <td>Canada</td>


          <td>4/5/2024</td>
          <td>Contacted</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Yoshi Tannamuri</td><td>+1 604 1234567</td>
          <td>Canada</td>

          <td>4/5/2024</td>
          <td>View</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Yoshi Tannamuri</td><td>+1 604 1234567</td>
          <td>Canada</td>


          <td>4/5/2024</td>
          <td>Contacted</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Yoshi Tannamuri</td><td>+1 604 1234567</td>
          <td>Canada</td>


          <td>4/5/2024</td>
          <td>Contacted</td>
        </tr>



      </table>
      <div className='admin_disable_section flex'>

        <div className='admin_disable_section_left flex'>
          <i class="fi fi-sr-exclamation"></i>
          <div style={{ marginLeft: "1.3vw" }}>
            <h2>Date of join</h2>
            <h4>2/4/2023</h4>
          </div>

          <div style={{ marginLeft: "1.5vw" }}>
            <h2>Last Actived</h2>
            <h4>2/4/2023</h4>
          </div>




        </div>

        <div className='admin_disable_button'>
          <h4>Disable</h4>
        </div>
      </div>









    </>
  )
}
