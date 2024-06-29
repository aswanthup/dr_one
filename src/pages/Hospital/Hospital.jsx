import React, { useContext, useEffect, useState } from "react";
import "../Hospital/hospital.css";
import Headroom from "react-headroom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { port } from "../../config";
import { MyContext } from "../../contexts/Contexts";
export default function Hospital() {
  const navigate = useNavigate();
  const [SpecialisationBatch, setSpecialisationBatch] = useState([]);
  const [position, setPosition] = useState({});
  const [ayurvedic, setayruvedic] = useState([]);
  const [FullSpecialisation, setFullSpecialisation] = useState([]);
  const [Homeo, setHomeo] = useState([]);
  const { Categories, setCategories } = useContext(MyContext)
  const SearchHostpital = () => {
    navigate("/hospitalfilter");
  };

  const renderHosFilteringBYType = (Value) => {
    navigate("/hospitalfilter", { state: { type: Value } });
  };
  const renderHosFilteringBYSpeciality = (Value) => {
    if (speacializationNames.includes(Value?.speciality)) {
      handleSearchData("Allopathy", Value?.speciality)
      navigate("/hospitalfilter", {
        state: { speciality: Value?.speciality, type: "Allopathy" },
      });
    } else if (ayurSpec.includes(Value?.speciality)) {
      handleSearchData("Ayurvedic", Value?.speciality)
      navigate("/hospitalfilter", {
        state: { speciality: Value?.speciality, type: "Ayurvedic" },
      });
    } else if (homeoDept.includes(Value?.speciality)) {
      handleSearchData("Homeopathy", Value?.speciality)
      navigate("/hospitalfilter", {
        state: { speciality: Value?.speciality, type: "Homeopathy" },
      });
    }
  };
  const speacializationNames = Categories?.allopathySpecs
  const homeoDept = Categories?.homeopathySpecs
  const ayurSpec = Categories?.ayurvedicSpecs

  useEffect(() => {
    const Data = [...speacializationNames || [],
    ...homeoDept || [],
    ...ayurSpec || []]
    let settingAllopathy = 0;
    let AllopathyUpdatingBatch = [];
    Data.forEach((ele, index) => {
      if (
        !AllopathyUpdatingBatch[settingAllopathy] ||
        AllopathyUpdatingBatch[settingAllopathy].length < 12
      ) {
        AllopathyUpdatingBatch[settingAllopathy] = [
          ...(AllopathyUpdatingBatch[settingAllopathy] || []),
          ele,
        ];
      } else {
        settingAllopathy += 1;
        AllopathyUpdatingBatch[settingAllopathy] = [ele];
      }
      setSpecialisationBatch(AllopathyUpdatingBatch);
    });
    setFullSpecialisation(Data)
  }, [Categories])


  useEffect(() => {
    const array = [1, 1];
    let Check = [];
    let finalRe = [];
    let FinishData = "";
    array?.map((ele) => {
      if (!Check?.includes(ele)) {
        Check.push(ele);
      } else if (Check?.includes(ele)) {
        finalRe.push(ele);
      }
      if (!finalRe.includes(ele)) {
        FinishData = ele;
      }
    });
    console.log(FinishData);
  }, []);
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting geolocation: ", error);
        }
      );
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }, []);

  const handleSearchData = async (type, speciality) => {
    try {
      const { id } = JSON.parse(localStorage.getItem("loginData")) || {};
      const data = {
        user_id: 15 || "",
        speciality: speciality || "",
        type: type || "",
      };
      const response = await axios.post(`${port}/hospital/hospital_searchdata`, data);
      console.log(response)
    } catch (err) {
      console.error(err)

    }
  };

  const SearchSpeciality = (e) => {
    const query = e?.target?.value.toLowerCase();
    let settingAllopathy = 0;
    let AllopathyUpdatingBatch = [];
    const queryLowerCase = query.toLowerCase();

    const filteredData = FullSpecialisation.filter((data) =>
      data.toLowerCase().startsWith(queryLowerCase)
    );

    const remainingData = FullSpecialisation.filter(
      (data) => !data.toLowerCase().startsWith(queryLowerCase)
    );
    const finalFilter = [...filteredData, ...remainingData];
    finalFilter.forEach((ele, index) => {
      if (
        !AllopathyUpdatingBatch[settingAllopathy] ||
        AllopathyUpdatingBatch[settingAllopathy].length < 12
      ) {
        AllopathyUpdatingBatch[settingAllopathy] = [
          ...(AllopathyUpdatingBatch[settingAllopathy] || []),
          ele,
        ];
      } else {
        settingAllopathy += 1;
        AllopathyUpdatingBatch[settingAllopathy] = [ele];
      }
      setSpecialisationBatch(AllopathyUpdatingBatch);
    });
    // console.log("SearchData>>>>", SearchData);
  };

  return (
    <>
      {/* <Headroom>
        <Navbar />
      </Headroom> */}
      <div className="hospital_web">
        <Headroom>
          <Navbar />
        </Headroom>
        <div className="container hospital_web">
          <div className="hospital-head-section flex">
            <div className="hospital-heading flex">
              <h1>
                Find <span className="color-blue">Hospitals </span>From
              </h1>
              <h1>Your Location</h1>
            </div>

            {/*Hospital Search Box */}

            <div className="hospital-search-box flex">
              <div
                onClick={SearchHostpital}
                className="Hospital-container-search flex"
              >
                <div className="Hospital-Search-box flex">
                  <div className="Hospital-location-section flex">
                    <i className="ri-map-pin-2-line" />

                    <input
                      className="Hospital-Location-input"
                      type="text"
                      placeholder="Select your location"
                    />
                  </div>
                  <input
                    className="Hospital-search-input"
                    type="text"
                    placeholder="Search Hospitals"
                  />
                  <div className="Hospital-search-section flex">
                    <i className="ri-search-2-line" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hospital-banner-section">
            <img src="images/hos.jpeg" alt="" />
          </div>

          {/* Medical field */}

          <div className="medical_field flex">
            <div className="medical_left flex">
              <div>
                <h1>Find Hospital by</h1>
                <h1>
                  <span className="color-blue">Medical Field</span>
                </h1>
              </div>

              <div>
                <div className="medical_images_1"></div>

                <a
                  href=""
                  onClick={() => {
                    renderHosFilteringBYType("Allopathy");
                    handleSearchData("Allopathy")
                  }}
                  className="medical_data_1 flex"
                >
                  <div className="flex new">
                    <h4>Allopathy</h4>
                    <i class="ri-arrow-right-circle-line"></i>
                  </div>
                </a>
              </div>

              <div>
                <div className="medical_images_1 medical_images_2"></div>
                <a href="" className="medical_data_1 flex">
                  <div
                    onClick={() => {
                      renderHosFilteringBYType("Homeopathy");
                      handleSearchData("Homeopathy")
                    }}
                    className="flex new"
                  >
                    <h4>Homeopathy</h4>
                    <i class="ri-arrow-right-circle-line"></i>
                  </div>
                </a>
              </div>
            </div>

            <div className="medical_image flex">
              <img src="images/do.jpg" alt="" />
            </div>

            <div className="medical_right flex">
              <div style={{ visibility: "hidden" }} className="new2">
                <div className="medical_images_1 medical_images_3"></div>

                <a
                  href=""
                  onClick={() => {
                    renderHosFilteringBYType("Unani");
                    handleSearchData("Unani")
                  }}
                  className="medical_data_1 flex"
                >
                  <div className="flex new">
                    <h4>Unani</h4>
                    <i class="ri-arrow-right-circle-line"></i>
                  </div>
                </a>
              </div>

              <div>
                <div className="medical_images_1 medical_images_4"></div>

                <a
                  href=""
                  onClick={() => {
                    renderHosFilteringBYType("Ayurvedic");
                    handleSearchData("Ayurvedic")
                  }}
                  className="medical_data_1 flex"
                >
                  <div className="flex new">
                    <h4>Ayurvedic</h4>
                    <i class="ri-arrow-right-circle-line"></i>
                  </div>
                </a>
              </div>

              <div>
                <div className="medical_images_1 medical_images_5"></div>

                <a
                  href=""
                  onClick={() => {
                    renderHosFilteringBYType("Others");
                    handleSearchData("Others")
                  }}
                  className="medical_data_1 flex"
                >
                  <div className="flex new">
                    <h4>Other</h4>
                    <i class="ri-arrow-right-circle-line"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/*End Medical field */}

          <div className="second-main-head">
            <h1>
              Find Hospital by <span className="color-blue">Specialties </span>
            </h1>
          </div>

          <div className="doctor_spe"></div>

          <div className="doctor_spec flex">
            <div className="doctor_spec_card">
              <div className="spec_main_cards_SearchBox">
                <div className="spec_main_cards_SearchBox">
                  <div className="search-input-wrapper">
                    <span className="search-icon">
                      <SearchIcon />
                    </span>
                    <input
                      onChange={SearchSpeciality}
                      type="text"
                      placeholder="Search your specialities"
                    />
                  </div>
                </div>
              </div>
              <div className="doctor_spec_SectionSetting">
                {SpecialisationBatch?.map((ele) => (
                  <div className="spec_main_cards_align flex">
                    {ele?.map((speciality) => (
                      <div
                        onClick={() => {
                          renderHosFilteringBYSpeciality({
                            speciality: speciality,
                          });
                        }}
                        className="spec_main_card flex"
                      >
                        <h4>{speciality}</h4>
                        <div className="spec_main_card_button flex">
                          <i class="ri-arrow-right-line"></i>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Partner */}
          <div className="second-main-head">
            <h1>
              Our <span className="color-blue ">Featured</span> Partner
            </h1>
          </div>

          {/* End Featured Partner */}
        </div>
      </div>

      {/* Mobile Screen */}

      <div className="container hospital_mobile_screen">
        <div className="mobile-second-heading">
          <h1>
            Find <span className="color-blue ">Hospitals </span>From
          </h1>
          <h1>Your Location</h1>
        </div>

        {/*Hospital Search Box */}

        <div className="hospital-search-box flex">
          <div
            onClick={() => {
              navigate("/hospitalfilter");
            }}
            className="Hospital-container-search flex"
          >
            <div className="Hospital-Search-box flex">
              <div className="Hospital-location-section flex">
                <i className="ri-map-pin-2-line" />

                <input
                  className="Hospital-Location-input"
                  type="text"
                  placeholder="Select your location"
                />
              </div>
              <input
                className="Hospital-search-input"
                type="text"
                placeholder="Search Hospitals"
              />
              <div className="Hospital-search-section flex">
                <i className="ri-search-2-line" />
              </div>
            </div>
          </div>
        </div>

        {/*End Hospital Search Box */}
        <div className="hospital-banner-section_mobile hospital-banner-section">
          <img src="images/hos.jpeg" alt="" />
        </div>

        <div className="mobile-second-heading">
          <h1>Find Hospitals by </h1>
          <h1>
            <span className="color-blue ">Medical Field</span>
          </h1>
        </div>

        <div className="medical_img flex">
          <img src="images/do.jpg" alt="" />
        </div>

        <div className="medical_field_mobile flex">
          <div>
            <div className="medical_images_mobile">
              <img src="images/do.jpg" alt="" />
            </div>

            <a href="" className="medical_data_1_mobile flex">
              <div className="flex new">
                <h4>Homeopathy</h4>
                <i class="ri-arrow-right-circle-line"></i>
              </div>
            </a>
          </div>

          <div>
            <div className="medical_images_mobile">
              <img src="images/do.jpg" alt="" />
            </div>

            <a href="" className="medical_data_1_mobile flex">
              <div className="flex new">
                <h4>Homeopathy</h4>
                <i class="ri-arrow-right-circle-line"></i>
              </div>
            </a>
          </div>
        </div>

        <div className="medical_field_mobile flex">
          <div>
            <div className="medical_images_mobile">
              <img src="images/do.jpg" alt="" />
            </div>

            <a href="" className="medical_data_1_mobile flex">
              <div className="flex new">
                <h4>Homeopathy</h4>
                <i class="ri-arrow-right-circle-line"></i>
              </div>
            </a>
          </div>

          <div>
            <div className="medical_images_mobile">
              <img src="images/do.jpg" alt="" />
            </div>

            <a href="" className="medical_data_1_mobile flex">
              <div className="flex new">
                <h4>Homeopathy</h4>
                <i class="ri-arrow-right-circle-line"></i>
              </div>
            </a>
          </div>
        </div>

        <div className="mobile-second-heading">
          <h1>Find Hospitals by </h1>
          <h1>
            <span className="color-blue ">Specialities</span>
          </h1>
        </div>

        <div className="spec_main_card flex">
          <h4>Neurology</h4>

          <div className="spec_main_card_button flex">
            <i class="ri-arrow-right-line"></i>
          </div>
        </div>

        <div className="spec_main_card flex">
          <h4>Neurology</h4>

          <div className="spec_main_card_button flex">
            <i class="ri-arrow-right-line"></i>
          </div>
        </div>

        <div className="spec_main_card flex">
          <h4>Neurology</h4>

          <div className="spec_main_card_button flex">
            <i class="ri-arrow-right-line"></i>
          </div>
        </div>

        <div className="mobile-second-heading">
          <h1>
            Our<span className="color-blue ">Featured</span>Partner
          </h1>
        </div>
      </div>

      {/*End Mobile Screen */}

      <Footer />
    </>
  );
}
