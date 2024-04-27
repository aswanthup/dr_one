import React, { useContext } from "react";
import "./doctoradminregistration2.css";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../contexts/Contexts";
import { speacializationNames } from "../../pages/doctor/constants/filter.js";
import { port } from "../../config.js";
import { Loader } from "../../components/Loader/Loader.jsx";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from 'dayjs';

export default function Doctoradminregistration2() {
  const navigate = useNavigate();
  const { Data, setData } = useContext(MyContext);
  const [postalError, setPostalError] = useState("");
  const [addressdata, setAddressdata] = useState({});
  const [loader, setloader] = useState(false);

  useEffect(() => {
    const names = [
      "confirmPassword",
      "email",
      "name",
      "password",
      "phone",
      "secondname"]
    if (names.some((ele) => !Data[ele])) {
      navigate('/doctoradminregistration1')
    }
    window.scrollTo(0, 0); // Scrolls to the top of the page

  }, [])
  const handleKeyPress = (event) => {
    // Check if the pressed key is '.' or '-'
    if (
      event?.key === "." ||
      event?.key === "-" ||
      event?.key === "e" ||
      event?.key === "+" ||
      event?.key === "E"
    ) {
      // Prevent the default behavior for these keys
      event.preventDefault();
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone_office" && value.length > 11) {
      return;
    }
    setData({
      ...Data,
      [name]: value,
    });
  };
  const handleYearChange = (e) => {
    console.log(e)
    setData({
      ...Data,
      selectedYear: e.$d,
      experience: e.$y,
    })
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setloader(true);
    // Check if any other validations fail
    const checkFields = [
      "name",
      "phone",
      "email",
      "password",
      "qualification",
      "specialization",
      "type",
      "gender",
      "address",
      "experience",
      "about",
      "registration_no",
      "pincode",
      "sector",
      "phone_office",
    ];
    if (
      checkFields.some(
        (ele) =>
          Data[ele] === null ||
          Data[ele] === undefined ||
          Data[ele] === "" ||
          !(ele in Data)
      )
    ) {
      setloader(false);
      toast.info("Please fill in all fields.");
      return;
    }
    // Check if there are any validation errors
    if (postalError) {
      setloader(false);
      toast.error("Please fix the pincode error.");
      return;
    }
    const formData = new FormData();
    formData.append("image", Data.docImage);
    formData.append("data", JSON.stringify(Data));
    axios
      .post(`${port}/doctor/dr_registration`, formData)
      .then((res) => {
        if (res.data.success === true) {
          toast.success(res.data.message);
          setloader(false);
          setTimeout(() => {
            setData({});
            navigate("/");
          }, 2500);
        } else {
          toast.error(res.data.message);
          setloader(false);
        }
      })
      .catch((err) => {
        toast.info(err?.response?.data?.message);
        setloader(false);
      });
  };
  const updatePosts = (pinCode) => {
    if (pinCode?.length === 6) {
      setData({
        ...Data,
        pincode: pinCode,
        selectedPlace: "",
      });
      axios
        .get(`https://api.postalpincode.in/pincode/${pinCode}`)
        .then((res) => {
          const { PostOffice } = res?.data[0];
          setData({
            ...Data,
            Postoffice: PostOffice,
            pincode: pinCode,
            selectedPlace: "",
          });
          if (PostOffice === null) {
            toast.info("Pincode not found")
          } else {
            setPostalError("");
            const postData = PostOffice[0];
            setAddressdata({
              ...addressdata,
              district: postData.District,
              state: postData.State,
              Name: postData.Name,
              Block: postData.Block,
              pincode: parseInt(Data?.pincode),
            });
          }
        });
    }
  };

  const handlePostChange = (event) => {
    const { value } = event.target;

    if (value.length > 6) {
      return;
    }

    if (!/^\d{6}$/.test(value)) {
      setData((prevData) => ({
        ...prevData,
        pincode: value,
        Postoffice: [],
        selectedPlace: "",
      }));

      if (value === "") {
        setPostalError("");
      } else {
        setPostalError("Please enter a 6-digit pincode");
      }
    } else {
      updatePosts(value);
    }
  };

  console.log({ Data })

  return (
    <>
      <ToastContainer>
        position="top-right" autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick rtl={false}, pauseOnFocusLoss draggable pauseOnHover
      </ToastContainer>

      {loader ? <Loader /> : ""}

      <div className="doctoradminregistration flex desktop">
        <div>
          <h1>Doctor Registration</h1>
        </div>
        <div className="doctoradminregistration_input flex">
          <div className="doctoradminregistration_input1 flex">
            <div>
              <h4>Qualification</h4>
              <input
                className="doctoradminregistration_inputs"
                maxLength={50}
                type="text"
                autoComplete="off"
                value={Data?.qualification}
                onChange={handleChange}
                name="qualification"
              />
            </div>
            <div>
              <h4>Gender</h4>
              <select
                type="text"
                name="gender"
                className="doctoradminregistration_gender"
                value={Data?.gender}
                onChange={handleChange}
              >
                <option
                  value=""
                  className="doctoradminregistration_gender_font"
                ></option>
                <option
                  value="male"
                  className="doctoradminregistration_gender_font"
                >
                  Male
                </option>
                <option
                  value="female"
                  className="doctoradminregistration_gender_font"
                >
                  Female
                </option>
                <option
                  value="other"
                  className="doctoradminregistration_gender_font"
                >
                  Other
                </option>
              </select>
            </div>
            <div>
              <h4>Type</h4>
              <select
                type="text"
                name="type"
                value={Data?.type}
                onChange={handleChange}
                className="doctoradminregistration_gender"
              >
                <option
                  value=""
                  className="doctoradminregistration_gender_font"
                ></option>
                <option
                  value="Allopathy"
                  className="doctoradminregistration_gender_font"
                >
                  Allopathy
                </option>
                <option
                  value="Homeopathy"
                  className="doctoradminregistration_gender_font"
                >
                  Homeopathy
                </option>
                <option
                  value="Ayurvedic"
                  className="doctoradminregistration_gender_font"
                >
                  Ayurvedic
                </option>
                <option
                  value="Unani"
                  className="doctoradminregistration_gender_font"
                >
                  Unani
                </option>
              </select>
            </div>
          </div>

          <div className="doctoradminregistration_input2 flex">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              <h4>Year Of Graduation</h4>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  disableFuture
                  slotProps={{
                    field: {
                      readOnly: true,
                    },
                  }}
                  name="experience"
                  onChange={handleYearChange}
                  sx={{
                    width: "30vw",
                    background: "#f6f6f966",
                    // border: "1px solid white",
                    boxSizing: "border-box",
                    borderRadius: "0.5vw",
                  }}
                  value={Data.selectedYear ? dayjs(Data.selectedYear) : null}

                  views={["year"]}
                  className="date-picker"
                />
              </LocalizationProvider>
            </div>
            <div>
              <h4>Registration Number</h4>
              <input
                className="doctoradminregistration_inputs"
                type="text"
                autoComplete="off"
                name="registration_no"
                value={Data?.registration_no}
                onChange={handleChange}
              />
            </div>
            <div>
              <h4>Specialization</h4>
              <select
                type="text"
                name="specialization"
                autoComplete="off"
                value={Data?.specialization}
                onChange={handleChange}
                className="doctoradminregistration_gender"
              >
                <option
                  value=""
                  className="doctoradminregistration_gender_font"
                ></option>
                {speacializationNames.map((value, index) => (
                  <option
                    value={value}
                    key={index}
                    className="doctoradminregistration_gender_font"
                  >
                    {value}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="text_area_section flex">
            <div className="doctoradminregistration_input4 flex">
              <h4 className="">About</h4>

              <div className="doctoradminregistration_input7 flex">
                <textarea
                  name="about"
                  value={Data?.about}
                  id=""
                  autoComplete="off"
                  onChange={handleChange}
                  maxLength={500}
                >
                  {" "}
                </textarea>
                <div className="doctoradminregistration_input6 flex">
                  <input
                    className="red-asterisk"
                    onKeyDown={handleKeyPress}
                    type="number"
                    value={Data?.phone_office ?? ""}
                    placeholder="Office Number"
                    maxLength={10}
                    autoComplete="off"
                    name="phone_office"
                    onChange={handleChange}
                  />

                  <select
                    type="text"
                    onChange={handleChange}
                    value={Data.sector}
                    name="sector"
                    className="doctoradminregistration_gender"
                  >
                    <option selected disabled>
                      {" "}
                      Sector{" "}
                    </option>
                    <option style={{ color: "black" }} value="government">
                      Government
                    </option>
                    <option style={{ color: "black" }} value="private">
                      Private
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div className="doctoradminregistration_input4  flex">
              <h4>Consultation Address</h4>
              <div className="doctoradminregistration_input7  flex">
                <textarea
                  autoComplete="off"
                  name="address"
                  value={Data?.address}
                  id=""
                  onChange={handleChange}
                  maxLength={500}
                >
                  {" "}
                </textarea>
                <div className="doctoradminregistration_input6 flex">
                  <div style={{ position: "relative" }}>
                    <input
                      onKeyDown={handleKeyPress}
                      type="number"
                      autoComplete="off"
                      value={Data?.pincode ?? ""}
                      placeholder="Pincode"
                      maxLength={6}
                      onChange={handlePostChange}
                      style={{ border: postalError && '2px solid red' }}
                    />
                    <p
                      style={{
                        position: "absolute",
                        fontSize: "12px",
                        color: "#ffffffb8",
                        letterSpacing: '1px',
                        padding: "5px 00px"
                      }}
                    >
                      {postalError}
                    </p>
                  </div>

                  <select
                    type="text"
                    disabled={Data?.Postoffice?.length > 0 ? false : true}
                    onChange={handleChange}
                    value={Data.selectedPlace ?? ""}
                    name="selectedPlace"
                    className="doctoradminregistration_gender"
                  >
                    <option selected disabled>
                      {" "}
                      select place{" "}
                    </option>
                    {Data?.Postoffice &&
                      Data?.Postoffice.map((postData, index) => (
                        <option
                          style={{ color: "black" }}
                          key={index}
                          value={postData?.Name}
                        >
                          {postData?.Name}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="doctoradminregistration_button flex">
          <a
            href=""
            className="demo1"
            onClick={(event) => {
              event.preventDefault();
              navigate(-1);
            }}
          >
            <h4>Back</h4>
          </a>
          <a href="" onClick={handleSubmit}>
            <h4>Submit</h4>
          </a>
        </div>
      </div>

      {/* mobile ---------------------------------------------------------------- */}
      <div className="doctoradminregistration mobile ">
        <div className="docadminhead">
          <h1>Doctor Registration</h1>
        </div>
        <div className="doctoradminregistration_input ">
          <div className="doctoradminregistration_input1 ">
            <div>
              <h4>Qualification</h4>
              <input
                className="mob_inputs"
                type="text"
                autoComplete="off"
                value={Data?.qualification}
                onChange={handleChange}
                name="qualification"
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ width: "48%" }}>
                <h4>Gender</h4>
                <select
                  type="text"
                  name="gender"
                  className="doctoradminregistration_gender"
                  value={Data?.gender}
                  style={{ paddingLeft: "10px" }}
                  onChange={handleChange}
                >
                  <option
                    value=""
                    className="doctoradminregistration_gender_font"
                  ></option>
                  <option
                    value="male"
                    className="doctoradminregistration_gender_font"
                  >
                    Male
                  </option>
                  <option
                    value="female"
                    className="doctoradminregistration_gender_font"
                  >
                    Female
                  </option>
                  <option
                    value="other"
                    className="doctoradminregistration_gender_font"
                  >
                    Other
                  </option>
                </select>
              </div>
              <div style={{ width: "48%" }}>
                <h4>Type</h4>
                <select
                  style={{ paddingLeft: "10px" }}
                  type="text"
                  name="type"
                  value={Data?.type}
                  onChange={handleChange}
                  className="doctoradminregistration_gender"
                >
                  <option
                    value=""
                    className="doctoradminregistration_gender_font"
                  ></option>
                  <option
                    value="Allopathy"
                    className="doctoradminregistration_gender_font"
                  >
                    Allopathy
                  </option>
                  <option
                    value="Homeopathy"
                    className="doctoradminregistration_gender_font"
                  >
                    Homeopathy
                  </option>
                  <option
                    value="Ayurveda"
                    className="doctoradminregistration_gender_font"
                  >
                    Ayurveda
                  </option>
                  <option
                    value="Unani"
                    className="doctoradminregistration_gender_font"
                  >
                    Unani
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div className="doctoradminregistration_input2 ">
            <div>
              <h4>Year Of Graduation</h4>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  disableFuture
                  slotProps={{
                    field: {
                      readOnly: true,
                    },
                  }}
                  name="experience"
                  onChange={handleYearChange}
                  sx={{
                    width: "100%",
                    background: "#f6f6f966",
                    border: "none",
                    boxSizing: "border-box",
                    borderRadius: "1vw",
                  }}
                  value={Data.selectedYear ? dayjs(Data.selectedYear) : null}
                  views={["year"]}
                  className="date-picker"
                />
              </LocalizationProvider>
            </div>
            <div>
              <h4>Registration Number</h4>
              <input
                className="mob_inputs"
                type="text"
                autoComplete="off"
                name="registration_no"
                value={Data?.registration_no}
                onChange={handleChange}
              />
            </div>
            <div>
              <h4>Specialization</h4>
              <select
                type="text"
                name="specialization"
                style={{ paddingLeft: "10px" }}
                value={Data?.specialization}
                onChange={handleChange}
                className="doctoradminregistration_gender"
              >
                <option
                  value=""
                  className="doctoradminregistration_gender_font"
                ></option>
                {speacializationNames.map((value, index) => (
                  <option
                    value={value}
                    key={index}
                    className="doctoradminregistration_gender_font"
                  >
                    {value}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="text_area_section ">
            <div className="doctoradminregistration_input3 ">
              <h4>About</h4>
              <textarea
                style={{ paddingLeft: "10px" }}
                name="about"
                autoComplete="off"
                value={Data?.about}
                id=""
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="doctoradminregistration_input3 ">
              <h4>Office Number</h4>
              <input
                onKeyDown={handleKeyPress}
                type="number"
                className="mob_inputs"
                name="phone_office"
                autoComplete="off"
                value={Data?.phone_office}
                onChange={handleChange}
              />
            </div>
            <div className="doctoradminregistration_input3 ">
              <h4>Select Sector</h4>
              <select
                type="text"
                style={{ paddingLeft: "10px" }}
                onChange={handleChange}
                value={Data?.sector}
                name="sector"
                className="doctoradminregistration_gender"
              >
                <option selected disabled>
                  {" "}
                  Select{" "}
                </option>
                <option style={{ color: "black" }} value="goverment">
                  Goverment
                </option>
                <option style={{ color: "black" }} value="private">
                  Private
                </option>
              </select>
            </div>

            <div className="doctoradminregistration_input4 ">
              <h4>Consultation Address</h4>
              <div className="doctoradminregistration_inpu ">
                <textarea
                  name="address"
                  autoComplete="off"
                  value={Data?.address}
                  id=""
                  onChange={handleChange}
                >
                  {" "}
                </textarea>
                <div className="doctoradminregistration_input6 ">
                  <div style={{ display: "flex", gap: "20px" }}>
                    <div style={{ position: "relative" }}>
                      <input
                        className="mob_inputs"
                        onKeyDown={handleKeyPress}
                        type="number"
                        autoComplete="off"
                        value={Data?.pincode ?? ""}
                        placeholder="Pincode"
                        style={{ width: "100%", border: postalError && '2px solid red' }}
                        onChange={handlePostChange}

                      />
                      <p
                        style={{
                          position: "absolute",
                          color: "#ffffffb8",
                          fontSize: "10px",
                          letterSpacing: '1px',
                          padding: "5px 00px"
                        }}
                      >
                        {postalError}
                      </p>
                    </div>

                    <select
                      type="text"
                      onChange={handleChange}
                      disabled={Data?.Postoffice?.length > 0 ? false : true}
                      value={Data.selectedPlace ?? ""}
                      style={{ width: "60%" }}
                      name="selectedPlace"
                      className="doctoradminregistration_gender"
                    >
                      <option selected disabled>
                        {" "}
                        select Place{" "}
                      </option>
                      {Data?.Postoffice &&
                        Data?.Postoffice.map((postData, index) => (
                          <option
                            style={{ color: "black" }}
                            key={index}
                            value={postData?.Name}
                          >
                            {postData?.Name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="doctoradminregistration_button">
              <a
                href=""
                className="demo2"
                onClick={(event) => {
                  event.preventDefault();
                  navigate(-1);
                }}
              >
                <h4>Back</h4>
              </a>
              <a href="" onClick={handleSubmit}>
                <h4>Submit</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
