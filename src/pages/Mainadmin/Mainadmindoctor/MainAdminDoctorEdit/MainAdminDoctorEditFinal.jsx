import React, { useContext } from "react";
import "../../../Doctoradmin/doctoradminregistration2.css";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../../../contexts/Contexts";
import {
    ayurSpec,
    homeoDept,
    speacializationNames,
    types,
} from "../../../../pages/doctor/constants/filter.js";
import { port } from "../../../../config.js";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
export const MainAdminDoctorEditFinal = () => {
    const navigate = useNavigate();
    const { editDoc, seteditDoc } = useContext(MyContext);
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
        if (names.some((ele) => !editDoc[ele])) {
            // navigate('/doctoradminregistration1')
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
        seteditDoc({
            ...editDoc,
            [name]: value,
        });
    };
    const handleTypeChanges = (e) => {
        const { name, value } = e.target;
        seteditDoc({
            ...editDoc,
            [name]: value,
        });
    };
    const handleYearChange = (e) => {
        console.log(e);
        seteditDoc({
            ...editDoc,
            selectedYear: e.$d,
            experience: e.$y,
        });
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
                    editDoc[ele] === null ||
                    editDoc[ele] === undefined ||
                    editDoc[ele] === "" ||
                    !(ele in editDoc)
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
        formData.append("image", editDoc.docImage);
        formData.append("data", JSON.stringify(editDoc));
        axios
            .post(`${port}/doctor/dr_registration`, formData)
            .then((res) => {
                if (res.data.success === true) {
                    toast.success(res.data.message);
                    setloader(false);
                    setTimeout(() => {
                        seteditDoc({});
                        navigate("/");
                    }, 2500);
                } else {
                    toast.error(res.data.message);
                    setloader(false);
                }
            })
            .catch((err) => {
                toast.info(err?.response?.data?.message);
            })
            .finally(() => {
                setloader(false);
            });
    };
    const updatePosts = (pinCode) => {
        if (pinCode?.length === 6) {
            seteditDoc({
                ...editDoc,
                pincode: pinCode,
                selectedPlace: "",
            });
            axios
                .get(`https://api.postalpincode.in/pincode/${pinCode}`)
                .then((res) => {
                    const { PostOffice } = res?.data[0];
                    seteditDoc({
                        ...editDoc,
                        Postoffice: PostOffice,
                        pincode: pinCode,
                        selectedPlace: "",
                    });
                    if (PostOffice === null) {
                        toast.info("Pincode not found");
                    } else {
                        setPostalError("");
                        const postData = PostOffice[0];
                        setAddressdata({
                            ...addressdata,
                            district: postData.District,
                            state: postData.State,
                            Name: postData.Name,
                            Block: postData.Block,
                            pincode: parseInt(editDoc?.pincode),
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
            seteditDoc((prevData) => ({
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

    // return specializations based on the selected type//
    const getSpecializationOptions = () => {
        if (!editDoc) return null;

        switch (editDoc.type) {
            case "Allopathy":
                return speacializationNames.map((value, index) => (
                    <option
                        key={index}
                        value={value}
                        className="doctoradminregistration_gender_font"
                    >
                        {value}
                    </option>
                ));
            case "Ayurvedic":
                return ayurSpec.map((value, index) => (
                    <option
                        key={index}
                        value={value}
                        className="doctoradminregistration_gender_font"
                    >
                        {value}
                    </option>
                ));
            case "Homeopathy":
                return homeoDept.map((value, index) => (
                    <option
                        key={index}
                        value={value}
                        className="doctoradminregistration_gender_font"
                    >
                        {value}
                    </option>
                ));
            default:
                return null;
        }
    };

    console.log({ editDoc });

    return (
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
                            value={editDoc?.qualification}
                            onChange={handleChange}
                            name="qualification"
                        />
                    </div>
                    <div>
                        <h4>Additional qualification</h4>
                        <input
                            className="doctoradminregistration_inputs"
                            maxLength={50}
                            type="text"
                            autoComplete="off"
                            value={editDoc?.additionalQualification}
                            onChange={handleChange}
                            name="additionalQualification"
                        />
                    </div>
                    <div>
                        <h4>Gender</h4>
                        <select
                            type="text"
                            name="gender"
                            className="doctoradminregistration_gender"
                            value={editDoc?.gender}
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
                            value={editDoc?.type}
                            onChange={handleTypeChanges}
                            className="doctoradminregistration_gender"
                        >
                            <option
                                disabled
                                selected
                                value=""
                                className="doctoradminregistration_gender_font"
                            >
                                Select type
                            </option>
                            {types.map((data, index) => (
                                <option
                                    key={index}
                                    value={data}
                                    className="doctoradminregistration_gender_font"
                                >
                                    {data}
                                </option>
                            ))}
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
                                    width: "22vw",
                                    background: "#f6f6f966",
                                    // border: "1px solid white",
                                    boxSizing: "border-box",
                                    borderRadius: "0.5vw",
                                }}
                                value={editDoc?.selectedYear ? dayjs(editDoc?.selectedYear) : null}
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
                            value={editDoc?.registration_no}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <h4>Department</h4>
                        <select
                            type="text"
                            name="specialization"
                            autoComplete="off"
                            value={editDoc?.specialization}
                            onChange={handleChange}
                            className="doctoradminregistration_gender"
                        >
                            <option
                                value=""
                                className="doctoradminregistration_gender_font"
                            ></option>
                            {getSpecializationOptions()}
                        </select>
                    </div>

                    <div>
                        <h4>Additional speciality</h4>
                        <input
                            className="doctoradminregistration_inputs"
                            maxLength={50}
                            type="text"
                            autoComplete="off"
                            value={editDoc?.additionalSpeciality}
                            onChange={handleChange}
                            name="additionalSpeciality"
                        />
                    </div>
                </div>

                <div className="text_area_section flex">
                    <div className="doctoradminregistration_input4 flex">
                        <h4 className="">About</h4>

                        <div className="doctoradminregistration_input7 flex">
                            <textarea
                                name="about"
                                value={editDoc?.about}
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
                                    value={editDoc?.phone_office ?? ""}
                                    placeholder="Office Number"
                                    maxLength={10}
                                    autoComplete="off"
                                    name="phone_office"
                                    onChange={handleChange}
                                />

                                <select
                                    type="text"
                                    onChange={handleChange}
                                    value={editDoc.sector}
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
                                value={editDoc?.address}
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
                                        value={editDoc?.pincode ?? ""}
                                        placeholder="Pincode"
                                        maxLength={6}
                                        onChange={handlePostChange}
                                        style={{ border: postalError && "2px solid red" }}
                                    />
                                    <p
                                        style={{
                                            position: "absolute",
                                            fontSize: "12px",
                                            color: "#ffffffb8",
                                            letterSpacing: "1px",
                                            padding: "5px 00px",
                                        }}
                                    >
                                        {postalError}
                                    </p>
                                </div>

                                <select
                                    type="text"
                                    disabled={editDoc?.Postoffice?.length > 0 ? false : true}
                                    onChange={handleChange}
                                    value={editDoc.selectedPlace ?? ""}
                                    name="selectedPlace"
                                    className="doctoradminregistration_gender"
                                >
                                    <option selected disabled>
                                        {" "}
                                        select place{" "}
                                    </option>
                                    {editDoc?.Postoffice &&
                                        editDoc?.Postoffice.map((postData, index) => (
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
    )
}