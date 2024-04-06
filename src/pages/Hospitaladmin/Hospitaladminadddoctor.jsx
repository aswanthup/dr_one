import React, { useState } from "react";
import "../Hospitaladmin/hospitaladminadddoctor.css";
import { types, speacializationNames } from "../doctor/constants/filter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Backdrop, CircularProgress } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
export default function Hospitaladminadddoctor() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const schema = yup.object({
    name: yup.string().trim().max(25, "Name cannot exceed 25 characters"),
    email: yup.string().email("Invalid email format"),
    phone_no: yup
      .string()
      .required("Mobile number is required")
      .matches(/^\d{10}$/, "Mobile number must be 10 digits"),
    about: yup.string().required("about field is required"),
    qualification: yup
      .string()
      .required("required")
      .trim()
      .max(20, "cannot exceed 20 characters"),
    gender: yup.string(),
    type: yup.string(),
    experience: yup.number().min(1950, "Must be greater than 1950"),
    registration_no: yup.string(),
    specialization: yup.string(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = async (data) => {
    console.log({ data });
    try {
      data.hospital_id = 52;
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:3003/hospital/add_doctor",
        data
      );
      // console.log({ response });
      if (response.status === 200) {
        reset();
        toast.success(response?.data?.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="adddoctor flex">
          <div>
            <h1>Add Doctor</h1>
          </div>

          <div className="adddoctor_inputsection flex">
            <div className="adddoctor_inputsection1 flex">
              <h2>
                Name <span style={{ color: "red" }}>*</span>
              </h2>
              <div style={{ position: "relative" }}>
                <input
                  name="name"
                  type="text"
                  maxLength={25}
                  {...register("name")}
                  required={true}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <p className="error-message error-p">{errors.name.message}</p>
                )}
              </div>

              <h2>
                Photo <span style={{ color: "red" }}></span>
              </h2>

              <div className="flex upload_button">
                {" "}
                <input type="text" />{" "}
                <h4 className="flex upload_button2 ">Upload</h4>{" "}
              </div>

              <h2>
                Qualification <span style={{ color: "red" }}>*</span>
              </h2>
              <div style={{ position: "relative" }}>
                <input
                  {...register("qualification")}
                  name="qualification"
                  required={true}
                  maxLength={20}
                  type="text"
                />
                {errors.qualification && (
                  <p className="error-message error-p">
                    {errors.qualification.message}
                  </p>
                )}
              </div>

              <h2>
                Started year <span style={{ color: "red" }}>*</span>
              </h2>
              <div style={{ position: "relative" }}>
                <input
                  {...register("experience")}
                  name="experience"
                  type="number"
                  required={true}
                  max={new Date().getFullYear()}
                />
                {errors.experience && (
                  <p className="error-message error-p">
                    {errors.experience.message}
                  </p>
                )}
              </div>
            </div>

            <div className="adddoctor_inputsection1 flex">
              <h2>
                Email <span style={{ color: "red" }}>*</span>
              </h2>
              <div style={{ position: "relative" }}>
                <input
                  {...register("email")}
                  name="email"
                  type="text"
                  required={true}
                  maxLength={30}
                />
                {errors.email && (
                  <p className="error-message error-p">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <h2>
                Phone Number <span style={{ color: "red" }}>*</span>
              </h2>
              <div style={{ position: "relative" }}>
                <input
                  {...register("phone_no")}
                  name="phone_no"
                  required={true}
                  type="number"
                />
                {errors.phone_no && (
                  <p className="error-message error-p">
                    {errors.phone_no.message}
                  </p>
                )}
              </div>

              <h2>
                Gender <span style={{ color: "red" }}>*</span>
              </h2>
              <div style={{ position: "relative" }}>
                <select
                  required={true}
                  {...register("gender")}
                  type="text"
                  name="gender"
                  className="hospital-admin-add-doctor-select"
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
                  <option
                    value="Others"
                    className="doctoradminregistration_gender_font"
                  >
                    Others
                  </option>
                </select>

                {errors.gender && (
                  <p className="error-message error-p">
                    {errors.gender.message}
                  </p>
                )}
              </div>

              <h2>
                Registration Number <span style={{ color: "red" }}>*</span>
              </h2>
              <div style={{ position: "relative" }}>
                <input
                  {...register("registration_no")}
                  name="registration_no"
                  type="text"
                  required={true}
                  maxLength={25}
                />
                {errors.registration_no && (
                  <p className="error-message error-p">
                    {errors.registration_no.message}
                  </p>
                )}
              </div>
            </div>

            <div className="adddoctor_inputsection1 flex">
              <h2>
                About <span style={{ color: "red" }}>*</span>
              </h2>
              <div style={{ position: "relative" }}>
                <textarea
                  required={true}
                  {...register("about")}
                  name="about"
                  id=""
                  cols="30"
                  rows="10"
                  maxLength={600}
                ></textarea>
                {errors.about && (
                  <p className="error-message error-p">
                    {errors.about.message}
                  </p>
                )}
              </div>

              <h2>
                Type <span style={{ color: "red" }}>*</span>
              </h2>
              <div style={{ position: "relative" }}>
                <select
                  {...register("type")}
                  type="text"
                  required={true}
                  name="type"
                  className="hospital-admin-add-doctor-select"
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

                {errors.type && (
                  <p className="error-message error-p">{errors.type.message}</p>
                )}
              </div>

              <h2>
                Specialization <span style={{ color: "red" }}>*</span>
              </h2>
              <div style={{ position: "relative" }}>
                <select
                  {...register("specialization")}
                  type="text"
                  name="specialization"
                  className="hospital-admin-add-doctor-select"
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
                {errors.specialization && (
                  <p className="error-message error-p">
                    {errors.specialization.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="adddoctor_button">
            <button
              className="adddoctor_button_cancel"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
            <button className="adddoctor_button_submit" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <ToastContainer />
    </div>
  );
}
