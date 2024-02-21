import { React, useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import SearchBox from "./SearchBox";
import styles from "./searchdoc.module.css";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  Radio,
  RadioGroup,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import {
  speacializationNames,
  types,
  genderData,
  ayurSpec,
} from "./constants/filter";
import Footer from "../../components/Footer";
import DocCard from "./DocCard";
import axios from "axios";
import { Add, Remove } from "@mui/icons-material";

export default function SearchDoc() {
  const [allDocData, setAllDocData] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [filters, setFilters] = useState({
    type: "",
    specializations: [],
    gender: "",
    experience: 0,
  });

  const handleTypeChanges = (event) => {
    const { value } = event.target;

    // clearSpecializations();

    setFilters({ ...filters, specializations: [], type: value });
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
      const doctorExperince =
        new Date().getFullYear() - parseInt(doctor?.experience);

      const experienceMatch =
        !filters.experience || doctorExperince >= filters.experience;
      return (
        typeMatch && genderMatch && specializationsMatch && experienceMatch
      );
    });
    setFilteredDoctors(filteredDocs);
  }, [filters]);

  const clearSpecializations = () => {
    setFilters((prev) => ({
      ...prev,
      specializations: [],
    }));
  };

  const getAllDoctorsData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3003/doctor/complete_data"
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
  //

  const handleExpChange = (event) => {
    const experience = event.target.value;

    setFilters({ ...filters, experience });
  };

  const handleExpChangeBtn = (clickedBtn) => {
    if (clickedBtn === "add" && filters?.experience < 75) {
      setFilters((prev) => ({
        ...prev,
        experience: prev.experience + 1,
      }));
    } else if (clickedBtn === "minus" && filters?.experience > 0) {
      setFilters((prev) => ({
        ...prev,
        experience: prev.experience - 1,
      }));
    }
  };

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
                      checked={filters.type === type}
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
                <span>
                  Specialization{" "}
                  {(filters.type === "Unani" ||
                    filters.type === "Homeopathy") && (
                    <span style={{ fontSize: "14px", fontWeight: 300 }}>
                      (Not Applicable)
                    </span>
                  )}
                </span>
              </div>
              <div>
                <FormGroup>
                  {filters.type === "Ayurvedic"
                    ? ayurSpec.map((name, index) => (
                        <FormControlLabel
                          name={name}
                          checked={
                            filters.specializations.length !== 0 &&
                            filters.specializations.includes(name.toLowerCase())
                          }
                          disabled={
                            filters.type === "Homeopathy" ||
                            filters.type === "Unani"
                              ? true
                              : false
                          }
                          onChange={handleSpecializationChanges}
                          key={index}
                          control={
                            <Checkbox
                              sx={{ "& .MuiSvgIcon-root": { fontSize: 22 } }}
                            />
                          }
                          label={<span style={{ fontSize: 16 }}>{name}</span>}
                        />
                      ))
                    : speacializationNames.map((name, index) => (
                        <FormControlLabel
                          name={name}
                          checked={
                            filters.specializations.length !== 0 &&
                            filters.specializations.includes(name.toLowerCase())
                          }
                          disabled={
                            filters.type === "Homeopathy" ||
                            filters.type === "Unani"
                              ? true
                              : false
                          }
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
            <div className={styles.exp}>
              <div>
                <span>Experience </span>
              </div>
              <Stack
                spacing={2}
                direction="row"
                sx={{ mb: 1 }}
                alignItems="center"
              >
                <IconButton onClick={() => handleExpChangeBtn("minus")}>
                  <Remove />
                </IconButton>

                <Slider
                  aria-label="experience"
                  defaultValue={0}
                  // getAriaValueText={filters?.experience ?? "" }
                  shiftStep={30}
                  valueLabelDisplay="on"
                  step={1}
                  value={filters?.experience}
                  onChange={handleExpChange}
                  min={0}
                  max={10}
                />
                <IconButton onClick={() => handleExpChangeBtn("add")}>
                  <Add />
                </IconButton>
              </Stack>
              {/* 
              <Box sx={{ width: 240 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <IconButton onClick={() => handleExpChangeBtn("minus")}>
                    <Remove />
                  </IconButton>
                  <Slider
                    aria-label="experience"
                    defaultValue={0}
                    // getAriaValueText={filters?.experience ?? "" }
                    shiftStep={30}
                    valueLabelDisplay="on"
                    step={1}
                    value={filters?.experience}
                    onChange={handleExpChange}
                    min={0}
                    max={10}
                  />
                  <IconButton onClick={() => handleExpChangeBtn("add")}>
                    <Add />
                  </IconButton>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    variant="body2"
                    // onClick={() => setVal(MIN)}
                    sx={{ cursor: "pointer" }}
                  >
                    0
                  </Typography>
                  <Typography
                    variant="body2"
                    // onClick={() => setVal(MAX)}
                    sx={{ cursor: "pointer" }}
                  >
                    20
                  </Typography>
                </Box>
              </Box> */}
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
