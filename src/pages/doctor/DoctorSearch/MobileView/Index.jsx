import React, { useState } from "react";
import styles from "./index.module.css";
import Navbar from "../../../../components/Navbar";
import SearchBox from "./SearchBox/Index";
import {
  speacializationNames,
  types,
  genderData,
  ayurSpec,
} from "../../constants/filter";
import DocCard from "./DocCard/Index";

const SearchDocMobileScreen = () => {
  const [docData, setDocData] = useState([
    {
      about: " 0820824",
      address: " p29",
      datetime: "2024-04-23T12:33:29.610Z",
      education_qualification: "mbbs",
      email: "aswinkasaas@gmail.com",
      experience: 2018,
      featured_partner: null,
      gender: "male",
      id: 140,
      image:
        "https://dr1-storage.s3.ap-south-1.amazonaws.com/1713875609357-hospital.jpg",
      name: "Dr.Ash",
      password: "$2b$10$5VY./b7k5NqJlRCeCpQIAu4O2zAUht9rWUNWzW4vVdGzd2v9kwJRm",
      phone_no: "9304028408",
      phone_office: "67060422",
      pincode: 670604,
      rating: null,
      registration_no:
        "$2b$10$QKCdUevSZ5H7n2XHXVdQdORkgSnGWsBOW0QM0B/mlz3NWlT8uNQV6",
      sector: "government",
      specialization: "General medicine",
      status: null,
      type: "Ayurvedic",
    },
    {
      about: " 0820824",
      address: " p29",
      datetime: "2024-04-23T12:33:29.610Z",
      education_qualification: "mbbs",
      email: "aswinkasaas@gmail.com",
      experience: 2018,
      featured_partner: null,
      gender: "male",
      id: 140,
      image:
        "https://dr1-storage.s3.ap-south-1.amazonaws.com/1713875609357-hospital.jpg",
      name: "Dr.Ash",
      password: "$2b$10$5VY./b7k5NqJlRCeCpQIAu4O2zAUht9rWUNWzW4vVdGzd2v9kwJRm",
      phone_no: "9304028408",
      phone_office: "67060422",
      pincode: 670604,
      rating: null,
      registration_no:
        "$2b$10$QKCdUevSZ5H7n2XHXVdQdORkgSnGWsBOW0QM0B/mlz3NWlT8uNQV6",
      sector: "government",
      specialization: "General medicine",
      status: null,
      type: "Ayurvedic",
    },
    {
      about: " 0820824",
      address: " p29",
      datetime: "2024-04-23T12:33:29.610Z",
      education_qualification: "mbbs",
      email: "aswinkasaas@gmail.com",
      experience: 2018,
      featured_partner: null,
      gender: "male",
      id: 140,
      image:
        "https://dr1-storage.s3.ap-south-1.amazonaws.com/1713875609357-hospital.jpg",
      name: "Dr.Ash",
      password: "$2b$10$5VY./b7k5NqJlRCeCpQIAu4O2zAUht9rWUNWzW4vVdGzd2v9kwJRm",
      phone_no: "9304028408",
      phone_office: "67060422",
      pincode: 670604,
      rating: null,
      registration_no:
        "$2b$10$QKCdUevSZ5H7n2XHXVdQdORkgSnGWsBOW0QM0B/mlz3NWlT8uNQV6",
      sector: "government",
      specialization: "General medicine",
      status: null,
      type: "Ayurvedic",
    },
    {
      about: " 0820824",
      address: " p29",
      datetime: "2024-04-23T12:33:29.610Z",
      education_qualification: "mbbs",
      email: "aswinkasaas@gmail.com",
      experience: 2018,
      featured_partner: null,
      gender: "male",
      id: 140,
      image:
        "https://dr1-storage.s3.ap-south-1.amazonaws.com/1713875609357-hospital.jpg",
      name: "Dr.Ash",
      password: "$2b$10$5VY./b7k5NqJlRCeCpQIAu4O2zAUht9rWUNWzW4vVdGzd2v9kwJRm",
      phone_no: "9304028408",
      phone_office: "67060422",
      pincode: 670604,
      rating: null,
      registration_no:
        "$2b$10$QKCdUevSZ5H7n2XHXVdQdORkgSnGWsBOW0QM0B/mlz3NWlT8uNQV6",
      sector: "government",
      specialization: "General medicine",
      status: null,
      type: "Ayurvedic",
    },
    {
      about: " 0820824",
      address: " p29",
      datetime: "2024-04-23T12:33:29.610Z",
      education_qualification: "mbbs",
      email: "aswinkasaas@gmail.com",
      experience: 2018,
      featured_partner: null,
      gender: "male",
      id: 140,
      image:
        "https://dr1-storage.s3.ap-south-1.amazonaws.com/1713875609357-hospital.jpg",
      name: "Dr.Ash",
      password: "$2b$10$5VY./b7k5NqJlRCeCpQIAu4O2zAUht9rWUNWzW4vVdGzd2v9kwJRm",
      phone_no: "9304028408",
      phone_office: "67060422",
      pincode: 670604,
      rating: null,
      registration_no:
        "$2b$10$QKCdUevSZ5H7n2XHXVdQdORkgSnGWsBOW0QM0B/mlz3NWlT8uNQV6",
      sector: "government",
      specialization: "General medicine",
      status: null,
      type: "Ayurvedic",
    },
  ]);
  return (
    <>
      {/* <Navbar /> */}
      <div className={styles.mainContainer}>
        <div className={styles.searchBox}>
          <SearchBox />
        </div>
        <div className={styles.filterSection}>
          <select name="" id="">
            <option value="">Type</option>
            {types.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
          <select name="" id="">
            <option value="">Specializations</option>
            {speacializationNames.map((specialization, index) => (
              <option key={index} value={specialization}>
                {specialization}
              </option>
            ))}
          </select>
          <select name="" id="">
            <option value="">Gender</option>
            {genderData.map((gender, index) => (
              <option key={index} value={gender}>
                {gender}
              </option>
            ))}
          </select>
          <select name="" id="">
            <option value="">Experience</option>
          </select>
        </div>
        <div className={styles.cardSection}>
          {docData.map((doc,index)=>(
          <DocCard key={index} data={doc}  />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchDocMobileScreen;
