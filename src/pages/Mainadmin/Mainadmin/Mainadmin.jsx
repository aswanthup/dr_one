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
    category: true
  })
  const [DetailData, setDetailData] = useState()
  const SentData = (data) => {
    setChangeDashboards({ [data]: true })
  }


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
                <Mainadminlabslist />
                <br /><br /><br /><br /><br /><br /><br /><br />
                <Mainadminlabsdetails />
                <br /><br /><br /><br /><br /><br /><br /><br />
                <Mainadminlabsapprove />

              </>

            }
            {ChangeDashboards?.customer &&
              <>
                <Mainadmincustomer />
                <br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br />
                <Mainadmincustomerdetails />
                <br /><br /><br /><br /><br /><br /><br /><br />
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
          </div>
        </div>

      </div>


    </div>
  )
}
