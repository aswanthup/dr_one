import React, { useEffect, useState } from 'react'
import "./HospitalFiltering.css"
import Footer from "../../components/Footer";
import axios from "axios";
import styles from "../doctor/DoctorSearch/DesktopView/searchdoc.module.css";
import {
    Checkbox,
    FormControlLabel,
    FormGroup,
    Radio,
    RadioGroup,
} from "@mui/material";
import Navbar from '../../components/Navbar';
import { SearchBox } from './SearchComponent/SearchBox';
import { features, speciality, type } from './constants/Filter';
import { port } from '../../config';
import { Loader } from '../../components/Loader/Loader';
import { HospitalCard } from './HospitalCard/HospitalCard';
export const HospitalFiltering = () => {
    const [filters, setFilters] = useState({
        speciality: "",
        type: "",
        features: ""
    });
    const [hospitals, sethospitals] = useState([])
    const [hospitalsFilter, sethospitalsFilter] = useState([])
    const [loading, setloading] = useState(false)

    const updateDocByPlace = (value) => {
        if (value?.length > 0) {
            sethospitals(value)
        } else {
            sethospitals([])
        }
    }
    useEffect(() => {
        let FinalData = [...hospitals] || [];
        let updatedArray = [];
        FinalData.forEach(ele => {
            let typeMatched = ele?.type.toLowerCase() === filters?.type.toLowerCase(); // Check if ele.type matches or if filters.type is not set
            let specialityMatched = true; // Assume speciality matches by default
            let featureMatched = true;
            if (typeMatched) {
                if (filters.speciality && filters.speciality.length > 0) {
                    specialityMatched = filters?.speciality.every(spec => {
                        return ele.speciality && ele.speciality.includes(spec);
                    });
                }

                if (filters.features && filters.features.length > 0) {
                    featureMatched = filters?.features.every(feature => {
                        return ele.feature && ele.feature.includes(feature);
                    });
                }

                if (specialityMatched && featureMatched) {
                    updatedArray.push(ele);
                }
            }
        });

        sethospitalsFilter(updatedArray);
    }, [filters, hospitals]);

    console.log("Hopitals>>>>", hospitalsFilter.length > 0 ? hospitalsFilter : hospitals)
    const handleDocNameSearch = (value) => {
        const query = value.toLowerCase();
        if (hospitalsFilter.length > 0) {
            const filteredData = hospitalsFilter.filter((data) =>
                data.name.toLowerCase().includes(query)
            );
            const remainingData = hospitalsFilter.filter(
                (data) => !data.name.toLowerCase().includes(query)
            );
            sethospitalsFilter([...filteredData, ...remainingData]);
        } else {
            const filteredData = hospitals.filter((data) =>
                data.name.toLowerCase().includes(query)
            );
            const remainingData = hospitals.filter(
                (data) => !data.name.toLowerCase().includes(query)
            );
            sethospitals([...filteredData, ...remainingData]);
        }

    }
    useEffect(() => {
        setloading(true)
        axios.get(`${port}/hospital/list`).then((res) => {
            sethospitals(res.data.data)
            setloading(false)
        })
    }, [])

    const handleTypeChanges = (e) => {
        const { name, value } = e?.target;
        if (name === "speciality") {
            if (filters.speciality.includes(value)) {
                // If the value already exists, remove it
                setFilters({
                    ...filters,
                    speciality: filters.speciality.filter(item => item !== value)
                });
            } else {
                // If it doesn't exist, add it
                setFilters({
                    ...filters,
                    speciality: [...filters.speciality, value]
                });
            }
        } else if (name === "features") {
            if (filters.features.includes(value)) {
                setFilters({
                    ...filters,
                    features: filters.features.filter(item => item !== value)
                });
            } else {
                setFilters({
                    ...filters,
                    features: [...filters.features, value]
                });
            }
        } else if (name === "type") {
            setFilters({ ...filters, [name]: value });
        }
    }


    console.log("Filters>>>>>>", filters)

    return (
        <>
            <Navbar />

            <div className='HospitalFilteringAlign'>
                <div className='HospitalFilteringAlignSearch'>
                    <SearchBox
                        updateDocs={updateDocByPlace}
                        docNames={handleDocNameSearch}
                    />
                </div>


                <div className={styles.section2}></div>
                <div className={styles.section3}>
                    <div className={styles.leftSide}>
                        <div className={styles.gender}>
                            <div>
                                <span className={styles.leftHeadings}>Type</span>
                            </div>
                            <div>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue=""
                                    name="radio-buttons-group"
                                >
                                    {type.map((types, index) => (
                                        <FormControlLabel
                                            onChange={handleTypeChanges}
                                            key={index}
                                            value={types}
                                            name='type'
                                            control={
                                                <Radio
                                                    sx={{ "& .MuiSvgIcon-root": { fontSize: 22 } }}
                                                />
                                            }
                                            label={<span style={{ fontSize: 16 }}>{types}</span>}
                                        />
                                    ))}
                                </RadioGroup>
                            </div>
                        </div>
                        <div className={styles.types}>
                            <div>
                                <span className={styles.leftHeadings}>Specialties</span>
                            </div>
                            <div>
                                <FormGroup>
                                    {speciality.map((name, index) => (
                                        <FormControlLabel
                                            name="speciality"
                                            disabled={
                                                !filters.type || !hospitalsFilter.length > 0 && !filters.speciality.length > 0 ? true : false
                                            }
                                            value={name}
                                            onChange={handleTypeChanges}
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
                        <div className={styles.specialization}>
                            <div>
                                <span className={styles.leftHeadings}>Features</span>
                            </div>
                            <div>
                                <FormGroup>
                                    {features.map((name, index) => (
                                        <FormControlLabel
                                            name='features'
                                            // checked={
                                            //     filters.specializations.length !== 0 &&
                                            //     filters.specializations.includes(name.toLowerCase())
                                            // }
                                            disabled={
                                                !filters.type || !hospitalsFilter.length > 0 && !filters.features.length > 0 ? true : false
                                            }
                                            onChange={handleTypeChanges}
                                            key={index}
                                            value={name}
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


                    </div>
                    <div className='HospitalFilterHosSec'>

                        <div className={styles.rightSide}>
                            <div className={styles.cardMainContainer}>
                                {hospitalsFilter.length > 0 || filters.type || filters?.speciality?.length > 0 || filters?.features?.length > 0 ?
                                    hospitalsFilter.length > 0 ?
                                        hospitalsFilter.map((details, index) =>
                                            <HospitalCard key={index} data={{ details: details, hospitals: true }} />
                                        )
                                        :
                                        <div className='HospitalNotfound'>
                                            <h3>
                                                Hospitals were not found.</h3>

                                        </div>

                                    :
                                    <>
                                        {hospitals.length > 0 ?
                                            hospitals.map((details, index) =>
                                                <HospitalCard key={index} data={{ details: details, hospitals: true }} />
                                            )
                                            :
                                            <div className='HospitalNotfound'>
                                                <h3>
                                                    Hospitals were not found.</h3>
                                            </div>}
                                    </>
                                }
                            </div>
                        </div>
                        {loading
                            &&
                            < Loader />
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
