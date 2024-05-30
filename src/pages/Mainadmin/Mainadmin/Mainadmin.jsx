import React, { useState } from 'react'
import Mainadminsidebar from '../../../components/Mainadminsidebar/Mainadminsidebar'
import Mainadminnavbar from '../../../components/Mainadminnavbar/Mainadminnavbar'
import Mainadmindoctordetails from '../Mainadmindoctor/Mainadmindoctordetails'
import Mainadmindoctorapprove from '../Mainadmindoctor/Mainadmindoctorapprove'
import Mainadmindoctorlist from '../Mainadmindoctor/Mainadmindoctorlist'
import Mainadminhospitaldetails from '../Mainadminhospital/Mainadminhospitaldetails'
import Mainadminhospitalapprove from '../Mainadminhospital/Mainadminhospitalapprove'
import Mainadminhospitallist from '../Mainadminhospital/Mainadminhospitallist'
import Mainadminlabsdetails from '../Mainadminlabs/Mainadminlabsdetails'
import Mainadminlabsapprove from '../Mainadminlabs/Mainadminlabsapprove'
import Mainadminlabslist from '../Mainadminlabs/Mainadminlabslist'

export default function Mainadmin() {
  const [ChangeDashboards, setChangeDashboards] = useState({
    overview: true
  })
  const SentData = (data) => {
    setChangeDashboards({ [data]: true })
  }
  console.log("ChangeDashboards>>>>", ChangeDashboards)
  return (
    <div className="mainadminsection">
      <Mainadminnavbar />
      <div className="mainadmindoctorsection flex">
        <Mainadminsidebar data={{ SentData: SentData, selected: ChangeDashboards }} />
        <div className="mainadmindoctordetails mainadmincontainer">
          <div className="scroll">
            {ChangeDashboards?.doctor &&
              <>
                <Mainadmindoctorlist />
                <br /><br /><br /><br /><br /><br /><br /><br />
                <Mainadmindoctordetails />
                <br /><br /><br /><br /><br /><br /><br /><br />
                <Mainadmindoctorapprove />
              </>

            }
            {ChangeDashboards?.hospital &&
              <>
                <Mainadminhospitallist />
                <br /><br /><br /><br /><br /><br /><br /><br />
                <Mainadminhospitaldetails />
                <br /><br /><br /><br /><br /><br /><br /><br />
                <Mainadminhospitalapprove />
              </>
            }

            {ChangeDashboards?.lab &&
              <>
                <Mainadminlabslist />
                <br /><br /><br /><br /><br /><br /><br /><br />
                <Mainadminlabsdetails />
                <br /><br /><br /><br /><br /><br /><br /><br />
                <Mainadminlabsapprove />

              </>

            }
          </div>
        </div>

      </div>


    </div>
  )
}
