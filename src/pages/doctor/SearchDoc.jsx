import { React, useState } from "react";
import Navbar from "../../components/Navbar";
import SearchBox from "./SearchBox";
import styles from "./searchdoc.module.css";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { speacializationNames } from "./constants/specialization";
import Footer from "../../components/Footer";
import DocCard from "./DocCard";

export default function SearchDoc() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleCheckboxChange = (value) => {
    setSelectedOption(value === selectedOption ? null : value);
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
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                      />
                    }
                    label="Allopathy"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                      />
                    }
                    label="Homeopathy"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                      />
                    }
                    label="Unani"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                      />
                    }
                    label="Ayurvedic"
                  />
                </FormGroup>
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
                      control={
                        <Checkbox
                          sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                        />
                      }
                      label={name}
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
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                      />
                    }
                    label="Male"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                      />
                    }
                    label="Female"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                      />
                    }
                    label="Other"
                  />
                </FormGroup>
              </div>
            </div>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.cardMainContainer}>

            <DocCard/>
            <DocCard/>
            <DocCard/>
            <DocCard/>
            <DocCard/>
            <DocCard/>
            <DocCard/>
            <DocCard/>
            <DocCard/>
            <DocCard/>
            <DocCard/>
            <DocCard/>
            <DocCard/>
            <DocCard/>
            <DocCard/>
            <DocCard/>
            <DocCard/>
            <DocCard/>
            <DocCard/>
            <DocCard/>
           
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
