import { React, useContext } from "react";
import Navbar from "../../../../components/Navbar";
import SearchBox from "../MobileView/SearchBox/Index";
import styles from "./searchdoc.module.css";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  Radio,
  RadioGroup,
  Slider,
  Stack,
} from "@mui/material";
import {
  speacializationNames,
  types,
  genderData,
  ayurSpec,
} from "../../constants/filter";
import Footer from "../../../../components/Footer";
import DocCard from "./DocCard/DocCard";
import { Add, Remove } from "@mui/icons-material";
import { Loader } from "../../../../components/Loader/Loader";
import { SearchDocContext } from "../../../../contexts/Doctor/SearchDoctorProvider";

export default function SearchDoc() {
  const {
    loading,
    filteredDoctors,
    docsBySearch,
    emptyResults,
    passedSpecialization,
    filters,
    selectedFilter,
    // functions---------------------------------------
    handleTypeChanges,
    handleSpecializationChanges,
    handleGenderChanges,
    handleExpChange,
    handleExpChangeBtn,
    updateDocByPlace,
    handleDocNameSearch,
  } = useContext(SearchDocContext);



  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.section1}>
          <div className={styles.box}>
          <SearchBox
            updateDocs={updateDocByPlace}
            docNames={handleDocNameSearch}
          />
          </div>
        </div>
        <div className={styles.section2}></div>
        <div className={styles.section3}>
          <div className={styles.leftSide}>
            <div className={styles.types}>
              <div>
                <span className={styles.leftHeadings}>Type</span>
              </div>
              <div>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue=""
                  name="radio-buttons-group"
                  value={selectedFilter?.type ?? ""}
                >
                  {types.map((type, index) => (
                    <FormControlLabel
                      disabled={passedSpecialization ? true : false}
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
                <span className={styles.leftHeadings}>
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
                            filters?.specializations?.length !== 0 &&
                            filters.specializations.includes(name.toLowerCase())
                          }
                          disabled={
                            filters.type === "Homeopathy" ||
                            filters.type === "Unani" ||
                            !filters.type
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
                <span className={styles.leftHeadings}>Gender</span>
              </div>
              <div>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue=""
                  name="radio-buttons-group"
                  value={selectedFilter?.gender ?? ""}
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
                <span className={styles.leftHeadings}>Experience </span>
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
                  shiftstep={30}
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
            </div>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.cardMainContainer}>
              {loading ? (
                <Loader />
              ) : emptyResults ? (
                <h4> No Doctors found</h4>
              ) : docsBySearch.length > 0 ? (
                docsBySearch.map((details, index) => (
                  <DocCard key={index} data={{ details: details }} />
                ))
              ) : (
                filteredDoctors.map((details, index) => (
                  <DocCard key={index} data={{ details: details }} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
