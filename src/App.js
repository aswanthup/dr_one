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
import Hospitaladmindoctorlist from "./pages/Hospitaladmin/Hospitaladmindoctorlist";
import Hospitaladmin_doctor_card from "./components/Hospitaladmin_doctor_card";
import Hospitaladminregistration2 from "./pages/Hospitaladmin/Hospitaladminregistration2";
import Hospitaladmindoctordetails from "./pages/Hospitaladmin/Hospitaladmindoctordetails";
import Hospitaladminadddoctor from "./pages/Hospitaladmin/Hospitaladminadddoctor";
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
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Pharmacyregistration1 from "./pages/Pharmacyadmin/Pharmacyregistration1";
import SearchDoc from "./pages/doctor/DoctorSearch/Index";
import Registerlanding from "./pages/registerlanding/Registerlanding";
import { HospitalFiltering } from "./pages/HospitalFiltering/HospitalFiltering";
import { LabFiltering } from "./pages/Labs/LabFIltering/LabFiltering";
import { Loader } from "./components/Loader/Loader";
import { ToastContainer } from "react-toastify";
import { ToastifyComponent } from "./components/ToastifyComponent/ToastifyComponent";

function App() {
  return (
    <div className="App">
      <ToastifyComponent />
      <BrowserRouter>

        <LocalizationProvider dateAdapter={AdapterDayjs}>

          <Routes>
            <Route path="/footer" element={<Footer />}></Route>
            <Route path="/checking" element={<Mainpage />}></Route>
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
            <Route path="/pharmacydetails" element={<Pharmacydetails />}></Route>
            <Route path="/nav" element={<Navbar2 />}></Route>
            <Route path="/hospitaladmin" element={<Hospitaladmin />}></Route>
            <Route path="/rightnav" element={<Rightnavbar />}></Route>
            <Route path="/hosPitalfilter" element={<HospitalFiltering />}></Route>
            <Route
              path="/hospitaladminnotification"
              element={<Hospitaladminnotification />}
            ></Route>
            <Route
              path="/hospitaladmindoctorlist"
              element={<Hospitaladmindoctorlist />}
            ></Route>
            <Route path="/hospitaldetails" element={<Hospitaldetails />}></Route>
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
            <Route path="/labfiltering" element={<LabFiltering />}></Route>
            <Route path="/loader" element={<Loader />}></Route>
            <Route path='/' element={<Registerlanding />} ></Route>
          </Routes>
        </LocalizationProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
