import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Mainpage from "./pages/Mainpage/Mainpage";
import Doctor from "./pages/doctor/Doctor";
import Labs from "./pages/Labs/Labs";
import Pharmacy from "./pages/Pharmacy/Pharmacy";
import Hospital from "./pages/Hospital/Hospital";
import Navbar from "./components/Navbar";
import { LoginSignin } from "./pages/Login&register/LoginSignin";
import Register1 from "./pages/Login&register/Register1";
import Doctor_profile from "./pages/doctor/Doctor_profile";
import Doctorlist from "./pages/doctor/Doctorlist";
import Labdetails from "./pages/Labs/Labdetails";
import Notification from "./pages/Notificationpage/Notification";
import About from "./pages/Aboutus/About";
import Pharmacydetails from "./pages/Pharmacy/Pharmacydetails";
import Userprofile from "./pages/User/Userprofile";
import Navbar2 from "./components/Navbar2";
import Hospitaladmin from "./pages/Hospitaladmin/Hospitaladmin";
import Rightnavbar from "./components/Rightnavbar";
import Hospitaldetails from "./pages/Hospitaladmin/Hospitaldetails";
import Hospitaladminnotification from "./components/Hospitaladminnotification";
import Hospitaladmindoctorlist from "./pages/Hospitaladmin/Doctors/Hospitaladmindoctorlist";
import Hospitaladmin_doctor_card from "./components/Hospitaladmin_doctor_card";
import Hospitaladminregistration2 from "./pages/Hospitaladmin/Hospitaladminregistration2";
import Hospitaladmindoctordetails from "./pages/Hospitaladmin/Hospitaladmindoctordetails";
import Hospitaladminadddoctor from "./pages/Hospitaladmin/Doctors/AddDoctor/Hospitaladminadddoctor";
import Map from "./pages/Mainpage/Map";
import Doctoradmin from "./pages/Doctoradmin/Doctoradmin";
import Pharmacyadmin from "./pages/Pharmacyadmin/Pharmacyadmin";
import Labadmin from "./pages/Labadmin/Labadmin";
import Doctoradminregistration1 from "./pages/Doctoradmin/Doctoradminregistration1";
import Doctoradminregistration2 from "./pages/Doctoradmin/Doctoradminregistration2";
import Hospitaladminregistration1 from "./pages/Hospitaladmin/Hospitaladminregistration1";
import Labadminregistration1 from "./pages/Labadmin/Labadminregistration1";
import Labadminregistration2 from "./pages/Labadmin/Labadminregistration2";
import Pharmacyadminregister2 from "./pages/Pharmacyadmin/Pharmacyadminregister2";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Pharmacyregistration1 from "./pages/Pharmacyadmin/Pharmacyregistration1";
import SearchDoc from "./pages/doctor/DoctorSearch/Index";
import Registerlanding from "./pages/registerlanding/Registerlanding";
import { HospitalFiltering } from "./pages/HospitalFiltering/WebMobile/HospitalFiltering";
import { LabFiltering } from "./pages/Labs/LabFIltering/WebMobile/LabFiltering";
import { Loader } from "./components/Loader/Loader";
import { ToastifyComponent } from "./components/ToastifyComponent/ToastifyComponent";
import { Connect } from "./pages/Labs/LabFIltering/WebMobileConnect/Connect";
import { Hosconnect } from "./pages/HospitalFiltering/WebMobileConnect/Hosconnect";
import { LabAdminProfile } from "./pages/Labadmin/LabAdminProfile/LabAdminProfile";
import { AnalyzeLabAdmin } from "./pages/Labadmin/AnalyzeLabAdmin/AnalyzeLabAdmin";
import { EditLaboratory } from "./pages/Labadmin/EditLaboratory/EditLaboratory";
import Mainadmindoctordetails from "./pages/Mainadmin/Mainadmindoctor/Mainadmindoctordetails";
import Mainadmindoctorapprove from "./pages/Mainadmin/Mainadmindoctor/Mainadmindoctorapprove";
import Mainadmindoctorlist from "./pages/Mainadmin/Mainadmindoctor/Mainadmindoctorlist";
import Mainadminhospitallist from "./pages/Mainadmin/Mainadminhospital/Mainadminhospitallist";
import Mainadminhospitaldetails from "./pages/Mainadmin/Mainadminhospital/Mainadminhospitaldetails";
import Mainadminhospitalapprove from "./pages/Mainadmin/Mainadminhospital/Mainadminhospitalapprove";
import Mainadminlabslist from "./pages/Mainadmin/Mainadminlabs/Mainadminlabslist";
import Mainadminlabsdetails from "./pages/Mainadmin/Mainadminlabs/Mainadminlabsdetails";
import Mainadminlabsapprove from "./pages/Mainadmin/Mainadminlabs/Mainadminlabsapprove";
import Mainadminnavbar from "./components/Mainadminnavbar/Mainadminnavbar";
import Mainadminsidebar from "./components/Mainadminsidebar/Mainadminsidebar";
import Mainadmin from "./pages/Mainadmin/Mainadmin/Mainadmin";
import Mainadminfeedback from "./pages/Mainadmin/Mainadminfeedback/Mainadminfeedback";
import Mainadminonboarding from "./pages/Mainadmin/Mainadminonboarding/Mainadminonboarding";
import Mainadmincustomer from "./pages/Mainadmin/Mainadmincustomer/Mainadmincustomer";
import Mainadmincustomerdetails from "./pages/Mainadmin/Mainadmincustomer/Mainadmincustomerdetails";
import { DocProfileMainSec } from "./pages/doctor/DocProfileMainSec/DocProfileMainSec";
import HospitalDetailed from "./pages/Hospital/HospitalDetailed/HospitalDetailed";
import HospitalAdminProvider from "./contexts/Doctor/HospitalAdminProvider";

function App() {
  return (
    <div className="App">
      <ToastifyComponent />
      <BrowserRouter>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Routes>
            <Route path="/footer" element={<Footer />}></Route>
            <Route path="/" element={<Mainpage />}></Route>
            <Route path="/doctor" element={<Doctor />}></Route>
            <Route path="/labs" element={<Labs />}></Route>
            <Route path="/Pharmacy" element={<Pharmacy />}></Route>
            <Route path="/hospital" element={<Hospital />}></Route>
            <Route path="/navbar" element={<Navbar />}></Route>
            <Route path="/login" element={<LoginSignin />}></Route>
            <Route path="/register" element={<Register1 />}></Route>
            <Route path="/doctorprofile" element={<Doctor_profile />}></Route>
            <Route path="/doctorlist" element={<Doctorlist />}></Route>
            <Route path="/Labdetails" element={<Labdetails />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/notification" element={<Notification />}></Route>
            <Route path="/userprofile" element={<Userprofile />}></Route>
            <Route
              path="/pharmacydetails"
              element={<Pharmacydetails />}
            ></Route>
            <Route path="/nav" element={<Navbar2 />}></Route>
            <Route
              path="/hospitaladmin"
              element={
                <HospitalAdminProvider>
                  <Hospitaladmin />
                </HospitalAdminProvider>
              }
            ></Route>
            <Route path="/rightnav" element={<Rightnavbar />}></Route>
            <Route path="/hosPitalfilter" element={<Hosconnect />}></Route>
            <Route
              path="/hospitaladminnotification"
              element={<Hospitaladminnotification />}
            ></Route>
            <Route
              path="/hospitaladmindoctorlist"
              element={<Hospitaladmindoctorlist />}
            ></Route>
            <Route
              path="/hospitaldetails"
              element={<Hospitaldetails />}
            ></Route>
            <Route
              path="/hospitaladmindoctorcard"
              element={<Hospitaladmin_doctor_card />}
            ></Route>
            <Route
              path="/hospitaladmindoctordetails"
              element={<Hospitaladmindoctordetails />}
            ></Route>
            <Route
              path="/hospitaladminregistration2"
              element={<Hospitaladminregistration2 />}
            ></Route>
            <Route
              path="/hospitaladminadddoctor"
              element={<Hospitaladminadddoctor />}
            ></Route>

            <Route
              path="/hospitaladminregistration1"
              element={<Hospitaladminregistration1 />}
            ></Route>
            <Route path="/map" element={<Map />}></Route>

            <Route path="/searchdoctor" element={<SearchDoc />}></Route>

            <Route
              path="/doctoradminregistration1"
              element={<Doctoradminregistration1 />}
            ></Route>
            <Route
              path="/doctoradminregistration2"
              element={<Doctoradminregistration2 />}
            ></Route>

            <Route path="/doctoradmin" element={<Doctoradmin />}></Route>

            {/* Pharmacy admin */}

            <Route path="/pharmacyadmin" element={<Pharmacyadmin />}></Route>
            <Route
              path="/pharmacyadminregister2"
              element={<Pharmacyadminregister2 />}
            ></Route>

            <Route
              path="/pharmacyadminregister1"
              element={<Pharmacyregistration1 />}
            ></Route>

            {/* Lab admin */}

            <Route
              path="/labadminregistration1"
              element={<Labadminregistration1 />}
            ></Route>
            <Route
              path="/labadminregistration2"
              element={<Labadminregistration2 />}
            ></Route>

            <Route path="/labadmin" element={<Labadmin />}></Route>
            <Route path="/labfiltering" element={<Connect />}></Route>
            <Route path="/loader" element={<Loader />}></Route>
            <Route path="/registration" element={<Registerlanding />}></Route>
            <Route path="/LabProfile" element={<LabAdminProfile />}></Route>
            <Route path="/analyzelab" element={<AnalyzeLabAdmin />}></Route>
            <Route path="/editLaboratory" element={<EditLaboratory />}></Route>
            <Route
              path="/hospitaldetailed"
              element={<HospitalDetailed />}
            ></Route>

            {/* Main admin */}

            <Route path="/mainadmin" element={<Mainadmin />}></Route>

            <Route
              path="/mainadmindoctordetails"
              element={<Mainadmindoctordetails />}
            ></Route>
            <Route
              path="/mainadmindoctorapprove"
              element={<Mainadmindoctorapprove />}
            ></Route>
            <Route
              path="/mainadmindoctorlist"
              element={<Mainadmindoctorlist />}
            ></Route>

            <Route
              path="/mainadminhospitallist"
              element={<Mainadminhospitallist />}
            ></Route>
            <Route
              path="/mainadminhospitaldetails"
              element={<Mainadminhospitaldetails />}
            ></Route>
            <Route
              path="/mainadminhospitalapprove"
              element={<Mainadminhospitalapprove />}
            ></Route>

            <Route
              path="/mainadminlabslist"
              element={<Mainadminlabslist />}
            ></Route>
            <Route
              path="/mainadminlabsdetails"
              element={<Mainadminlabsdetails />}
            ></Route>
            <Route
              path="/mainadminlabsapprove"
              element={<Mainadminlabsapprove />}
            ></Route>

            <Route
              path="/mainadminnavbar"
              element={<Mainadminnavbar />}
            ></Route>

            <Route
              path="/mainadminsidebar"
              element={<Mainadminsidebar />}
            ></Route>

            <Route
              path="/mainadminonboading"
              element={<Mainadminonboarding />}
            ></Route>
            <Route
              path="/mainadminfeedback"
              element={<Mainadminfeedback />}
            ></Route>
            <Route
              path="/mainadminfeedback"
              element={<Mainadmincustomer />}
            ></Route>
            <Route
              path="/mainadminfeedback"
              element={<Mainadmincustomerdetails />}
            ></Route>
            <Route
              path="/doctoradminprofile"
              element={<DocProfileMainSec />}
            ></Route>

            {/*End Main admin */}
          </Routes>
        </LocalizationProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
