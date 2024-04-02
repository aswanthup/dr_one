import React, { useEffect, useState } from 'react'
import Footer from "../../../components/Footer";
import axios from "axios";
import styles from "../../doctor/searchdoc.module.css";
import {
    Checkbox,
    FormControlLabel,
    FormGroup,
    Radio,
    RadioGroup,
} from "@mui/material";
import Navbar from '../../../components/Navbar';
import { SearchBox } from '../LabFIltering/SearchComponent/SearchBox';
import { features, speciality, type } from '../LabFIltering/constatnts/Filter';
import DocCard from '../../doctor/DocCard';
import { port } from '../../../config';
export const LabFiltering = () => {
    const [filters, setFilters] = useState({
        speciality: "",
        type: "",
        features: ""
    });
    const [lab, setlab] = useState([])
    const [labFilter, setlabFilter] = useState([])

    const updateDocByPlace = (value) => {
        setlab(value)
    }
    useEffect(() => {
        let FinalData = [...lab] || [];
        let updatedArray = [];
        FinalData.forEach(ele => {
            let typeMatched = ele?.type?.toLowerCase() === filters?.type?.toLowerCase(); // Check if ele.type matches or if filters.type is not set
            let specialityMatched = true; // Assume speciality matches by default
            let featureMatched = true;

            if (typeMatched) {
                if (filters.speciality && filters.speciality.length > 0) {
                    specialityMatched = filters.speciality.every(spec => {
                        return ele.speciality && ele.speciality.includes(spec);
                    });
                }

                if (filters.features && filters.features.length > 0) {
                    featureMatched = filters.features.every(feature => {
                        return ele.feature && ele.feature.includes(feature);
                    });
                }

                if (specialityMatched && featureMatched) {
                    updatedArray.push(ele);
                }
            }
        });

        setlabFilter(updatedArray);
    }, [filters, lab]);

    console.log("Hopitals>>>>", labFilter.length > 0 ? labFilter : lab)
    const handleDocNameSearch = (value) => {
        const query = value.toLowerCase();
        if (labFilter.length > 0) {
            const filteredData = labFilter.filter((data) =>
                data.name.toLowerCase().includes(query)
            );
            const remainingData = labFilter.filter(
                (data) => !data.name.toLowerCase().includes(query)
            );
            setlabFilter([...filteredData, ...remainingData]);
        } else {
            const filteredData = lab.filter((data) =>
                data.name.toLowerCase().includes(query)
            );
            const remainingData = lab.filter(
                (data) => !data.name.toLowerCase().includes(query)
            );
            setlab([...filteredData, ...remainingData]);
        }

    }
    useEffect(() => {
        axios.get(`http://192.168.1.12:3003/lab/getlab`).then((res) => {
            console.log("res>>>", res)
            setlab(res.data.data)
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
                                                !filters.type || !labFilter.length > 0 && !filters.speciality.length > 0 ? true : false
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
                                                !filters.type || !labFilter.length > 0 && !filters.features.length > 0 ? true : false
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
                                {labFilter.length > 0 || filters.type || filters?.speciality?.length > 0 || filters?.features?.length > 0 ?
                                    labFilter.length > 0 ?
                                        labFilter.map((details, index) =>
                                            <DocCard key={index} data={{ details: details, lab: true }} />
                                        )
                                        :
                                        <div className='HospitalNotfound'>
                                            <h3>
                                                lab were not found.</h3>

                                        </div>

                                    :
                                    <>
                                        {lab.map((details, index) =>
                                            <DocCard key={index} data={{ details: details, lab: true }} />
                                        )
                                        }
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
