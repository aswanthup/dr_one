import React, { useContext, useState } from "react";
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
import { SearchDocContext } from "../../../../contexts/Doctor/SearchDoctorProvider";
import { Loader } from "../../../../components/Loader/Loader";
import {
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Modal,
} from "@mui/material";

const SearchDocMobileScreen = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const {
    loading,
    allDocData,
    filteredDoctors,
    docsBySearch,
    emptyResults,
    passedSpecialization,
    filters,
    selectedFilter,
    setSelectedFilter,
    // functions
    handleTypeChanges,
    handleSpecializationChanges,
    handleGenderChanges,
    handleExpChange,
    handleExpChangeBtn,
    updateDocByPlace,
    handleDocNameSearch,
    handleSelectFilter,
  } = useContext(SearchDocContext);

  return (
    <>
      {/* <Navbar /> */}
      <div className={styles.mainContainer}>
        <div className={styles.searchBox}>
          <SearchBox
            updateDocs={updateDocByPlace}
            docNames={handleDocNameSearch}
          />
        </div>
        <div className={styles.filterSection}>
          <select
            disabled={passedSpecialization ? true : false}
            onChange={handleTypeChanges}
            name=""
            value={selectedFilter.type ?? ""}
            id=""
          >
            <option value="" disabled selected>
              Type
            </option>
            {types.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>

          <select
            onClick={() => setIsShowModal(!isShowModal)}
            disabled={
              filters.type === "Homeopathy" || filters.type === "Unani"
                ? true
                : false
            }
          >
            <option value="" disabled selected>
              Specializations
            </option>
          </select>
          <Modal open={isShowModal} onClose={() => setIsShowModal(false)}>
            <div className={styles.modalContainer}>
              <FormControl className={styles.formControl} component="fieldset">
                <FormGroup>
                  {filters.type === "Ayurvedic"
                    ? ayurSpec.map((specialization, index) => (
                        <>
                          <FormControlLabel
                            key={index}
                            name={specialization}
                            checked={
                              filters.specializations.length !== 0 &&
                              filters.specializations.includes(
                                specialization.toLowerCase()
                              )
                            }
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontSize: "16px", // Set font size for the label
                              },
                              "& .MuiSvgIcon-root": {
                                width: "1.7em", // Set checkbox size
                                height: "2em", // Set checkbox size
                              },
                            }}
                            control={
                              <Checkbox
                                disabled={
                                  filters.type === "Homeopathy" ||
                                  filters.type === "Unani"
                                }
                                onChange={handleSpecializationChanges}
                              />
                            }
                            label={specialization}
                            value={specialization}
                          />
                          <Divider />
                        </>
                      ))
                    : speacializationNames.map((specialization, index) => (
                        <>
                          <FormControlLabel
                            key={index}
                            name={specialization}
                            checked={
                              filters?.specializations?.length !== 0 &&
                              filters.specializations.includes(
                                specialization.toLowerCase()
                              )
                            }
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontSize: "16px", // Set font size for the label
                              },
                              "& .MuiSvgIcon-root": {
                                width: "1.7em", // Set checkbox size
                                height: "2em", // Set checkbox size
                              },
                            }}
                            control={
                              <Checkbox
                                disabled={
                                  filters.type === "Homeopathy" ||
                                  filters.type === "Unani"
                                }
                                onChange={handleSpecializationChanges}
                              />
                            }
                            label={specialization}
                            value={specialization}
                          />
                          <Divider />
                        </>
                      ))}
                </FormGroup>
              </FormControl>
            </div>
          </Modal>
          <select name="" id="" onChange={handleGenderChanges}>
            <option value="" disabled selected>
              Gender
            </option>
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
    </>
  );
};

export default SearchDocMobileScreen;
