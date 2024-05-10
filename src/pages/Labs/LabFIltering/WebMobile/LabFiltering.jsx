import React, { useEffect, useState } from 'react'
import Footer from "../../../../components/Footer";
import axios from "axios";
import styles from "../../../doctor/DoctorSearch/DesktopView/searchdoc.module.css";
import {
    Checkbox,
    FormControlLabel,
    FormGroup,
} from "@mui/material";
import Navbar from '../../../../components/Navbar';
import { SearchBox } from '../SearchComponent/SearchBox';
import { features, services } from '../constatnts/Filter';
import { port } from '../../../../config';
import { Loader } from '../../../../components/Loader/Loader';
import { LabCard } from '../LabCard/LabCard';
export const LabFiltering = () => {
    const [filters, setFilters] = useState({
        services: "",
        type: "",
        features: ""
    });
    const [lab, setlab] = useState([])
    const [labFilter, setlabFilter] = useState([])
    const [loading, setloading] = useState(false)
    const [notFound, setnotFound] = useState(false)

    const updateDocByPlace = (value) => {
        if (value?.length > 0) {
            setlab(value)
        } else {
            setlab([])
            setlabFilter([])
        }
    }
    // useEffect(() => {
    //     let FinalData = lab || [];
    //     let updatedArray = [];
    //     FinalData?.forEach(ele => {
    //         let servicesMatched = true;
    //         let featureMatched = true;
    //         if (filters?.services && filters?.services?.length > 0) {
    //             servicesMatched = filters?.services?.every(spec => {
    //                 return ele.services && ele.services.includes(spec);
    //             });
    //         }
    //         if (filters.features && filters?.features?.length > 0) {
    //             featureMatched = filters.features.every(feature => {
    //                 return ele.features && ele.features.includes(feature);
    //             });
    //         }

    //         if (filters?.CheckingName && servicesMatched && featureMatched) {
    //             if (ele.name.toLowerCase().includes(filters?.CheckingName.toLowerCase())) { // Check if name includes CheckingName
    //                 updatedArray.push(ele);
    //             }
    //         } else if (servicesMatched && featureMatched) {
    //             updatedArray.push(ele);
    //         }
    //     });

    //     setlabFilter(updatedArray);
    // }, [filters, lab]);
    useEffect(() => {
        if (lab.length === 0) {
            return;
        }
        const targetArray = [...lab];
        const filteredDocs = targetArray.filter((hospital) => {
            const services =
                filters?.services?.length === 0 ||
                filters?.services?.every(spec => {
                    return hospital?.services && hospital?.services?.includes(spec);
                })
            const features =
                filters?.features?.length === 0 ||
                filters?.features?.every(spec => {
                    return hospital?.feature && hospital?.feature?.includes(spec);
                })
            const nameMatch =
                !filters.CheckingName ||
                hospital.name.toLowerCase().includes(filters.CheckingName.toLowerCase());
            return (
                services &&
                nameMatch &&
                features
            );
        });

        if (labFilter.length > 0) {
            if (filteredDocs.length === 0) {
                setnotFound(true);
            } else {
                console.log({ filteredDocs });
                setlabFilter(filteredDocs);
                setnotFound(false);
            }
        } else {
            if (filteredDocs.length === 0) {
                setnotFound(true);
            } else {
                console.log({ filteredDocs });
                setlabFilter(filteredDocs);
                setnotFound(false);
            }
        }
    }, [filters, lab]);
    console.log("Lab>>>>", labFilter.length > 0 ? labFilter : lab)


    useEffect(() => {
        setloading(true)
        axios.get(`${port}/lab/getlab`).then((res) => {
            console.log("res>>>", res)
            setlab(res.data.data)
            setloading(false)
        })
    }, [])

    const handleTypeChanges = (e) => {
        const { name, value } = e?.target;
        if (name === "services") {
            if (filters.services.includes(value)) {
                // If the value already exists, remove it
                setFilters({
                    ...filters,
                    services: filters.services.filter(item => item !== value)
                });
            } else {
                // If it doesn't exist, add it
                setFilters({
                    ...filters,
                    services: [...filters.services, value]
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
    const handleDocNameSearch = (value) => {
        const query = value.toLowerCase();
        setFilters({ ...filters, CheckingName: query })
        // if (labFilter?.length > 0) {
        //     const filteredData = labFilter.filter((data) => {
        //         const lowerCaseName = data?.name?.toLowerCase();
        //         return lowerCaseName?.startsWith(query[0]) &&
        //             lowerCaseName.includes(query);
        //     });
        //     if (filteredData?.length > 0) {
        //         setnotFound(false)
        //     } else {
        //         if (!query) {
        //             setlabFilter(lab);
        //         } else {
        //             setnotFound(true)
        //         }
        //     }
        //     setlabFilter(filteredData);
        // } else {
        //     const filteredData = lab?.filter((data) => {
        //         const lowerCaseName = data?.name?.toLowerCase();
        //         return lowerCaseName?.startsWith(query[0]) &&
        //             lowerCaseName?.includes(query);
        //     });
        //     if (filteredData?.length > 0) {
        //         setnotFound(false)
        //     } else {
        //         if (!query) {
        //             setlabFilter(lab);
        //         } else {
        //             setnotFound(true)
        //         }
        //     }
        //     setlabFilter(filteredData);
        // }
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
                        {/* <div className={styles.gender}>
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
                        </div> */}
                        <div className={styles.types}>
                            <div>
                                <span className={styles.leftHeadings}>Services</span>
                            </div>
                            <div>
                                <FormGroup>
                                    {services.map((name, index) => (
                                        <FormControlLabel
                                            name="services"
                                            // disabled={
                                            //     !filters.type || !labFilter.length > 0 && !filters.services.length > 0 ? true : false
                                            // }
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
                                            // disabled={
                                            //     !filters.type || !labFilter.length > 0 && !filters.features.length > 0 ? true : false
                                            // }
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
                                {labFilter?.length > 0 || filters?.services?.length > 0 || filters?.features?.length > 0 ?
                                    labFilter?.length > 0 && !notFound ?
                                        labFilter?.map((details, index) =>
                                            <LabCard key={index} data={{ details: details, lab: true }} />
                                        )
                                        : <div className='HospitalNotfound'>
                                            <h3>
                                                lab were not found.</h3>
                                        </div>
                                    :
                                    <>
                                        {lab?.length > 0 && !notFound ?
                                            lab?.map((details, index) =>
                                                <LabCard key={index} data={{ details: details, lab: true }} />
                                            )
                                            : <div className='HospitalNotfound'>
                                                <h3>
                                                    lab were not found.</h3>
                                            </div>
                                        }
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            {loading &&
                <Loader />
            }
            <Footer />
        </>
    )
}
