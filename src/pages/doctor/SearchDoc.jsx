import { React, useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import SearchBox from "./SearchBox";
import styles from "./searchdoc.module.css";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
} from "@mui/material";
import { speacializationNames, types, genderData } from "./constants/filter";
import Footer from "../../components/Footer";
import DocCard from "./DocCard";
import axios from "axios";

export default function SearchDoc() {
  const [allDocData, setAllDocData] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [filters, setFilters] = useState({
    type: "",
    specializations: [],
    gender: "",
  });

  const handleTypeChanges = (event) => {
    const { value } = event.target;
    console.log(value);
    setFilters({ ...filters, type: value });
  };
  const handleSpecializationChanges = (event) => {
    const { checked } = event.target;
    const specialization = event.target.name.toLowerCase();
    // alert(`${specialization} is ${checked}`);
    if (checked && !filters.specializations.includes(specialization)) {
      const updatedSpecializations = [
        ...filters.specializations,
        specialization,
      ];
      setFilters({ ...filters, specializations: updatedSpecializations });
    } else if (!checked) {
      setFilters((prev) => ({
        ...prev,
        specializations: prev.specializations.filter(
          (spec) => spec !== specialization
        ),
      }));
    }
  };

  const handleGenderChanges = (event) => {
    const { value } = event.target;
    console.log(value);
    setFilters({ ...filters, gender: value });
  };

  useEffect(() => {
    const filteredDocs = allDocData.filter((doctor) => {
      const typeMatch =
        !filters.type ||
        doctor.type.toLowerCase() === filters.type.toLowerCase();
      const specializationsMatch =
        filters.specializations.length === 0 ||
        filters.specializations.includes(doctor.specialization.toLowerCase());
      const genderMatch =
        !filters.gender ||
        doctor.gender.toLowerCase() === filters.gender.toLowerCase();
      return typeMatch && genderMatch &&specializationsMatch;
    });
    setFilteredDoctors(filteredDocs);
  }, [filters]);

  const getAllDoctorsData = async () => {
    try {
      const response = await axios.get(
        "http://192.168.1.2:3003/doctor/complete_data"
      );
      // console.log({ response });
      setAllDocData(response.data.data);
      setFilteredDoctors(response.data.data);
    } catch (err) {
      alert("server error");
    } finally {
    }
  };
  useEffect(() => {
    getAllDoctorsData();
  }, []);

  console.log({ allDocData });
  // console.log({ filteredDoctors });
  console.log({ filters });

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.section1}>
          <SearchBox />
        </div>
        <div className={styles.section2}></div>
        <div className={styles.section3}>
          <div className={styles.leftSide}>
            <div className={styles.types}>
              <div>
                <span>Type</span>
              </div>
              <div>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue=""
                  name="radio-buttons-group"
                >
                  {types.map((type, index) => (
                    <FormControlLabel
                      key={index}
                      value={type}
                      onChange={handleTypeChanges}
                      control={
                        <Radio
                          sx={{ "& .MuiSvgIcon-root": { fontSize: 22 } }}
                        />
                      }
                      label={<span style={{ fontSize: 16 }}>{type}</span>}
                    />
                  ))}
                </RadioGroup>
              </div>
            </div>
            <div className={styles.specialization}>
              <div>
                <span>Specialization</span>
              </div>
              <div>
                <FormGroup>
                  {speacializationNames.map((name, index) => (
                    <FormControlLabel
                      name={name}
                      onChange={handleSpecializationChanges}
                      key={index}
                      control={
                        <Checkbox
                          sx={{ "& .MuiSvgIcon-root": { fontSize: 22 } }}
                        />
                      }
                      label={<span style={{ fontSize: 16 }}>{name}</span>}
                    />
                  ))}
                </FormGroup>
              </div>
            </div>
            <div className={styles.gender}>
              <div>
                <span>Gender</span>
              </div>
              <div>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue=""
                  name="radio-buttons-group"
                >
                  {genderData.map((gender, index) => (
                    <FormControlLabel
                      onChange={handleGenderChanges}
                      key={index}
                      value={gender}
                      control={
                        <Radio
                          sx={{ "& .MuiSvgIcon-root": { fontSize: 22 } }}
                        />
                      }
                      label={<span style={{ fontSize: 16 }}>{gender}</span>}
                    />
                  ))}
                </RadioGroup>
              </div>
            </div>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.cardMainContainer}>
              {filteredDoctors &&
                filteredDoctors.map((details, index) => (
                  <DocCard key={index} details={details} />
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
