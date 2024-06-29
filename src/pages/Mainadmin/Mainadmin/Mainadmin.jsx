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
import Mainadmincustomer from '../Mainadmincustomer/Mainadmincustomer'
import Mainadminfeedback from '../Mainadminfeedback/Mainadminfeedback'
import Mainadminonboarding from '../Mainadminonboarding/Mainadminonboarding'
import Mainadminoverview from '../Mainadminoverview/Mainadminoverview'
import Mainadmincustomerdetails from '../Mainadmincustomer/Mainadmincustomerdetails'
import { MainAdminCategoryEdit } from '../MainAdminCategoryEdit/MainAdminCategoryEdit'
import MainAdminDoctorEditBasic from '../Mainadmindoctor/MainAdminDoctorEdit/MainAdminDoctorEditBasic'

export default function Mainadmin() {
  const [ChangeDashboards, setChangeDashboards] = useState({
    doctor: true
  })
  const [DetailData, setDetailData] = useState()
  const SentData = (data) => {
    setChangeDashboards({ [data]: true })
  }


  console.log("ChangeDashboards>>>>", ChangeDashboards)
  return (
    <div className="mainadminsection">
      <Mainadminnavbar data={{ SentData: SentData, selected: ChangeDashboards }} />
      <div className="mainadmindoctorsection flex">
        <Mainadminsidebar data={{ SentData: SentData, selected: ChangeDashboards }} />
        <div className="mainadmindoctordetails mainadmincontainer">
          <div className="scroll">
            {ChangeDashboards?.overview &&
              <>
                <Mainadminoverview />
                <br /><br /><br /><br /><br /><br /><br /><br />

              </>

            }


            {ChangeDashboards?.doctor &&
              <>
                <Mainadmindoctorlist updateState={{ setChangeDashboards, setDetailData }} />
              </>
            }
            {ChangeDashboards?.doctorDetail &&
              <>
                <Mainadmindoctordetails Data={{ DetailData }} />
              </>
            }

            {ChangeDashboards?.hospital &&
              <>
                <Mainadminhospitallist updateState={{ setChangeDashboards, setDetailData }} />
              </>
            }
            {ChangeDashboards?.hospitaldetails &&
              <>
                <Mainadminhospitaldetails Data={{ DetailData }} />
              </>
            }

            {ChangeDashboards?.lab &&
              <>
                <Mainadminlabslist updateState={setChangeDashboards} setLabDetails={setDetailData} />


              </>

            }
            {ChangeDashboards?.singleLabDetails &&
              <>

                <Mainadminlabsdetails labData={DetailData} />


              </>

            }
            {ChangeDashboards?.customer &&
              <>
                <Mainadmincustomer updateState={{ setChangeDashboards, setDetailData }} />
              </>

            }
            {ChangeDashboards?.feedback &&
              <>
                <Mainadminfeedback />
              </>

            }
            {ChangeDashboards?.onboarding &&
              <>
                <Mainadminonboarding />
              </>
            }
            {ChangeDashboards?.category &&
              <>
                <MainAdminCategoryEdit />
              </>

            }
            {ChangeDashboards?.customerDetail &&
              <>
                <Mainadmincustomerdetails Details={DetailData} />
              </>

            }
          </div>
        </div>

      </div>


    </div>
  )
}
