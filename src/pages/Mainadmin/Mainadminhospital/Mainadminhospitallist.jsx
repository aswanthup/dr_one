import React from 'react'

export default function Mainadminhospitallist() {
  return (
    <div>
      <div className="mainadmindoctordatas_chart mainadmindoctordatas_chart_doctor flex">


        <div className="mainadmindoctordatas_chart1 mainadmindoctordatas_chart10 flex">

          <div className="mainadmindoctordatas_chart_icon mainadmindoctordatas_chart_icon10 flex">
            <i class="fi fi-sr-hospital"></i>
          </div>

          <div style={{ marginLeft: "18px" }}>
            <h2>200</h2>
            <h4>Hospital</h4>
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




      <h3 style={{ marginBottom: "1.3vw" }}>Hospital List</h3>
      <table className='doctortable'>
        <tr>
          <th>No</th>
          <th>Hospital Name</th>
          <th>Mobile Number</th>
          <th>PIN & Location</th>
          <th>Medical Field</th>
          <th>Clicks</th>
          <th>Contacts</th>
          <th>Join Date</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Maria Anders</td><td>+49 30 123456</td>
          <td>Germany</td>
          <td>Berlin</td>
          <td>100</td>
          <td>10</td>

          <td>9/5/2024</td>
          <td>Active</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Francisco Chang</td><td>+52 55 987654</td>
          <td>Mexico</td>
          <td>Mexico City</td>
          <td>100</td>
          <td>10</td>
          <td>2/5/2024</td>
          <td>Approved</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Helen Bennett</td> <td>+44 20 7654321</td>
          <td>UK</td>
          <td>London</td>
          <td>100</td>
          <td>10</td>

          <td>4/5/2024</td>
          <td>Rejected</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Yoshi Tannamuri</td> <td>+1 604 1234567</td>
          <td>Canada</td>
          <td>Vancouver</td>
          <td>100</td>
          <td>10</td>
          <td>4/5/2024</td>
          <td>Actived</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Yoshi Tannamuri</td><td>+1 604 1234567</td>
          <td>Canada</td>
          <td>Vancouver</td>
          <td>100</td>
          <td>10</td>
          <td>4/5/2024</td>
          <td>Disabled</td>
        </tr>
      </table>

    </div>
  )
}
