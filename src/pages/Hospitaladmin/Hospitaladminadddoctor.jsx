import React from "react";
import "../Hospitaladmin/hospitaladminadddoctor.css";
import { types, speacializationNames } from "../doctor/constants/filter";

export default function Hospitaladminadddoctor() {
  return (
    <div>
      <div className="adddoctor flex">
        <div>
          <h1>Add Doctor</h1>
        </div>

        <div className="adddoctor_inputsection flex">
          <div className="adddoctor_inputsection1 flex">
            <h2>Name</h2>
            <input type="text" />

            <h2>Photo</h2>

            <div className="flex upload_button">
              {" "}
              <input type="text" />{" "}
              <h4 className="flex upload_button2 ">Upload</h4>{" "}
            </div>

            <h2>Qulification</h2>
            <input type="text" />

            <h2>Experience</h2>
            <input type="text" />
          </div>

          <div className="adddoctor_inputsection1 flex">
            <h2>Email</h2>
            <input type="text" />

            <h2>Phone Number</h2>
            <input type="text" />

            <h2>Gender</h2>
            <select
              type="text"
              name="gender"
              className="doctoradminregistration_gender"
            >
              <option
                value=""
                className="doctoradminregistration_gender_font"
              ></option>

              <option
                value="Male"
                className="doctoradminregistration_gender_font"
              >
                Male
              </option>
              <option
                value="Female"
                className="doctoradminregistration_gender_font"
              >
                Female
              </option>
            </select>

            <h2>Registration Number</h2>
            <input type="text" />
          </div>

          <div className="adddoctor_inputsection1 flex">
            <h2>About</h2>
            <textarea name="" id="" cols="30" rows="10"></textarea>

            <h2>Type</h2>
            <select
              type="text"
              name="type"
              className="doctoradminregistration_gender"
            >
              <option
                value=""
                className="doctoradminregistration_gender_font"
              ></option>
              {types.map((type, index) => (
                <option
                  key={index}
                  value={type}
                  className="doctoradminregistration_gender_font"
                >
                  {type}
                </option>
              ))}
            </select>

            <h2>Specialization</h2>
            <select
              type="text"
              name="type"
              className="doctoradminregistration_gender"
            >
              <option
                value=""
                className="doctoradminregistration_gender_font"
              ></option>
              {speacializationNames.map((specialization, index) => (
                <option
                  key={index}
                  value={specialization}
                  className="doctoradminregistration_gender_font"
                >
                  {specialization}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="adddoctor_button flex">
          <a href="" className="demo">
            <h4>Cancel</h4>
          </a>
          <a href="">
            <h4>Next</h4>
          </a>
        </div>
      </div>
    </div>
  );
}
