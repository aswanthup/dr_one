import React, { useContext } from "react";
import "../Doctoradmin/doctoradminregistration2.css";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../contexts/Contexts";
import { speacializationNames } from "../../pages/doctor/constants/filter.js";
import { port } from "../../config.js";

export default function Doctoradminregistration2() {
  const navigate = useNavigate();
  const { Data, setData } = useContext(MyContext);
  const [postal, setPostal] = useState();
  const [postalError, setPostalError] = useState("");
  const [addressdata, setAddressdata] = useState({});

  const handleChange = (e) => {
    setData({
      ...Data,
      [e.target.name]: e.target.value,
    });
  };
  console.log("dataaaaaaaaaa", Data);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if any other validations fail
    if (!Data.name || !Data.email || !Data.phone || !Data.phone_office || !Data?.pincode || !Data.sector) {
      console.log("chekcingggggg", Data.name, Data.email, Data.phone, Data.phone_office, Data?.pincode, Data.sector)
      toast.error("Please fill in all the required fields.");
      return;
    }
    // Check if there are any validation errors
    if (postalError) {
      toast.error("Please fix the pincode error.");
      return;
    }

    const mergedData = { ...Data };
    console.log("mergedData", mergedData);
    axios
      .post(`${port}/doctor/dr_registration`, mergedData)
      .then((res) => {
        // console.log("resssssssssssssss", res);

        if (res?.data?.success === true) {
          console.log("errorrrrrrrr");
          toast.success(res?.data?.message);
          window.location.reload()
        } else {
          console.log(res?.data);
          toast.error(res?.data);
        }
      });
  };
  const updatePosts = (pinCode) => {
    if (pinCode.length === 6) {
      console.log(6);
      axios
        .get(`https://api.postalpincode.in/pincode/${pinCode}`)
        .then((res) => {
          console.log(res.data[0]?.PostOffice);
          // console.log(res.data);

          setData({
            ...Data,
            Postoffice: res.data[0]?.PostOffice,
            pincode: pinCode,
          });
          if (res?.data[0]?.PostOffice === null) {
            console.log("noo dataaaa");
            toast.error("Invalid pincode");
          } else {
            setAddressdata({
              ...addressdata,
              district: res.data[0]?.PostOffice[0].District,
              state: res.data[0]?.PostOffice[0].State,
              Name: res.data[0]?.PostOffice[0].Name,
              Block: res.data[0]?.PostOffice[0].Block,
              pincode: parseInt(Data?.pincode),
            });
          }
        });
    } else {
      console.log("pincode should be 6 digits");
    }
  };

  const handlePostChange = (event) => {
    // setData(event.target.value)
    const { value } = event.target;
    setData({ ...Data, pincode: value });
    if (value.length === 6) {
      updatePosts(value);
    }
    if (!/^\d+$/.test(value)) {
      setPostalError("Please enter only digits.");
    } else if (value.length !== 6) {
      setPostalError("Pincode must be exactly 6 digits.");
    } else {
      setPostalError("");
    }
  };
  useEffect(() => {
    // console.log("postal===", postal);
  }, []);

  return (
    <>
      <ToastContainer>
        position="top-right" autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick rtl={false}, pauseOnFocusLoss draggable pauseOnHover
      </ToastContainer>

      <div className="doctoradminregistration flex desktop">
        <div>
          <h1>Doctor Registration</h1>
        </div>
        <div className="doctoradminregistration_input flex">
          <div className="doctoradminregistration_input1 flex">
            <div>
              <h4>Qualification</h4>
              <input
                type="text"
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
            <div>
              <h4>Practice started year</h4>
              <input
                type="number"
                maxLength={4}
                name="experience"
                value={Data?.experience}
                onChange={handleChange}
              />
            </div>
            <div>
              <h4>Registration Number</h4>
              <input
                type="text"
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
              <h4>About</h4>

              <div className="doctoradminregistration_input7 flex">
                <textarea
                  name="about"
                  value={Data?.about}
                  id=""
                  onChange={handleChange}
                >
                  {" "}
                </textarea>
                <div className="doctoradminregistration_input6 flex">
                  <input
                    type="text"
                    value={Data?.phone_office ?? ""}
                    placeholder="Office Number"
                    maxLength={6}
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
                    <option
                      style={{ color: "black" }}
                      value="goverment"
                    >
                      Goverment
                    </option>
                    <option
                      style={{ color: "black" }}
                      value="private"
                    >
                      Private
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div className="doctoradminregistration_input4 flex">
              <h4>Address</h4>

              <div className="doctoradminregistration_input7 flex">
                <textarea
                  name="address"
                  value={Data?.address}
                  id=""
                  onChange={handleChange}
                >
                  {" "}
                </textarea>
                <div className="doctoradminregistration_input6 flex">
                  <input
                    type="text"
                    value={Data?.pincode ?? ""}
                    placeholder="Pincode"
                    maxLength={6}
                    name="pincode"
                    onChange={handlePostChange}
                  />

                  <select
                    type="text"
                    onChange={handleChange}
                    value={Data.selectedPlace}
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

      <div className="doctoradminregistration mobile ">
        <div className="docadminhead">
          <h1>Doctor Registration</h1>
        </div>
        <div className="doctoradminregistration_input ">
          <div className="doctoradminregistration_input1 ">
            <div>
              <h4>Qualification</h4>
              <input
                type="text"
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
                  style={{ paddingLeft: "15px" }}
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
                  style={{ paddingLeft: "15px" }}
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
              <h4>Practice started year</h4>


              <input
                type="number"
                maxLength={4}
                name="experience"
                value={Data?.experience}
                onChange={handleChange}
              />
            </div>
            <div>
              <h4>Registration Number</h4>
              <input
                type="text"
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
                name="about"
                value={Data?.about}
                id=""
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="doctoradminregistration_input4 ">
              <h4>Address</h4>

              <div className="doctoradminregistration_inpu ">
                <textarea
                  name="address"
                  value={Data?.address}
                  id=""
                  onChange={handleChange}
                >
                  {" "}
                </textarea>
                <div className="doctoradminregistration_input6 ">
                  <div style={{ display: "flex", gap: "20px" }}>
                    <input
                      type="number"
                      value={Data?.pincode ?? ""}
                      placeholder="Pincode"
                      style={{ width: "40%" }}
                      maxLength={6}
                      onChange={handlePostChange}
                    />

                    <select
                      type="text"
                      onChange={handleChange}
                      value={Data.selectedPlace}
                      style={{ width: "60%" }}
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
