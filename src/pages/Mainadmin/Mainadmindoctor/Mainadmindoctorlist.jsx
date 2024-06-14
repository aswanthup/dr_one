import React, { useEffect, useState } from 'react'
import { port } from '../../../config'
import axios from 'axios'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

export default function Mainadmindoctorlist() {
  const navigate = useNavigate()
  const [Doctors, setDoctors] = useState([])
  const [initialData, setinitialData] = useState([])
  useEffect(() => {
    axios.get(`${port}/doctor/complete_data`).then((res) => {
      console.log(res)
      setDoctors(res?.data?.data)
      setinitialData(res?.data?.data)
    })
  }, [])

  const navigateFn = (data) => {
    navigate("/mainadmindoctordetails", { state: { data: data } })
  }
  const SearchData = (e) => {
    const { name, value } = e?.target;
    let tempData = initialData;
    console.log(value)
    if (!value) {
      setDoctors(Doctors);
      return;
    }

    tempData = tempData.filter(item => {
      let itemValue = item?.[name];
      if (itemValue !== undefined && itemValue !== null) {
        // Convert itemValue to string for comparison
        itemValue = itemValue.toString().toLowerCase();
        return itemValue.includes(value.toLowerCase());
      }
      return false;
    });

    setDoctors(tempData);
  };
  const filterDate = (e) => {
    const { value } = e.target;
    const inputDate = moment(value); // Assuming a date input

    if (!inputDate.isValid()) {
      return; // Handle invalid date input (optional)
    }

    const filteredData = initialData.filter(item => {
      const itemDate = moment(item?.datetime);
      if (itemDate.isValid()) {
        // Adjust filtering logic based on your needs (see options above)
        return itemDate.isSame(inputDate, 'day'); // Example: filter by day
      }
      return false;
    });

    setDoctors(filteredData);
  };
  return (
    <div>


      <div className="mainadmindoctordatas_chart mainadmindoctordatas_chart_doctor flex">


        <div className="mainadmindoctordatas_chart1 mainadmindoctordatas_chart10 flex">

          <div className="mainadmindoctordatas_chart_icon mainadmindoctordatas_chart_icon10 flex">
            <i class="fi fi-sr-stethoscope"></i>
          </div>

          <div style={{ marginLeft: "18px" }}>
            <h2>200</h2>
            <h4>Doctors</h4>
          </div>

        </div>

        <div className="mainadmindoctordatas_chart1 mainadmindoctordatas_chart2 mainadmindoctordatas_chart11  flex">

          <div className="mainadmindoctordatas_chart_icon mainadmindoctordatas_chart_icon11 flex">
            <i class="ri-rest-time-line"></i>
          </div>

          <div style={{ marginLeft: "18px" }}>
            <h2>200</h2>
            <h4>Inactive</h4>
          </div>
        </div>

        <div className="mainadmindoctordatas_chart1 mainadmindoctordatas_chart2 mainadmindoctordatas_chart12 flex">

          <div className="mainadmindoctordatas_chart_icon mainadmindoctordatas_chart_icon12 flex">
            <i class="ri-close-circle-line"></i>
          </div>

          <div style={{ marginLeft: "18px" }}>
            <h2>200</h2>
            <h4>Disabled</h4>
          </div>
        </div>
      </div>




      <h3 style={{ marginBottom: "1.3vw" }}>Doctor List</h3>
      <table className='doctortable'>
        <tr className='doctortableTr'>
          <th>No</th>
          <th className='doctortableTh'>Doctor Name
            <input type="text" onChange={SearchData} name='name' placeholder='Search Doctors' />
          </th>
          <th>Mobile Number</th>
          <th>PIN & Location
            <input type="text" onChange={SearchData} name='pincode' placeholder='Search pincode' />
          </th>
          <th>Specialized
            <input type="text" onChange={SearchData} name='specialization' placeholder='Search by Specialization' />
          </th>
          <th>Clicks</th>
          <th>Contacts
            <input type="text" onChange={SearchData} name='contacted' placeholder='Search by Contacts' />
          </th>
          <th>Join Date
            <input type="date" onChange={filterDate} name='datetime' placeholder='Search by date' />
          </th>
          <th>Status
            <input type="text" onChange={SearchData} name='status' placeholder='Search by Contacts' />
          </th>
        </tr>
        {Doctors.map((ele, index) =>
          <tr onClick={() => { navigateFn(ele) }}>
            <td>{index + 1}</td>
            <td>{ele?.name}
            </td>
            <td>{ele?.phone_no}</td>
            <td>{ele?.pincode}</td>
            <td>{ele?.specialization}</td>
            <td>100</td>
            <td>10</td>
            <td>{moment(ele?.datetime).subtract(10, 'days').calendar()}
            </td>
            <td>{ele?.status}</td>
          </tr>
        )}


      </table>

    </div>
  )
}
