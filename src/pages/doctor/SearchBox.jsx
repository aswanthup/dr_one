import axios from "axios";
import { React, useState, useEffect, useRef } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";

export default function SearchBox({ updateDocs, docNames }) {
  const [showSearchList, setShowSearchList] = useState(false);
  const [placeLists, setplaceLists] = useState([]);
  const [searchPlace, setSearchPlace] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");

  const boxRef = useRef();

  useEffect(() => {
    const handleSearch = setTimeout(() => {
      const fetchData = async () => {
        try {
          const response = await axios.post(
            "http://192.168.1.2:3003/doctor/suggest",
            {
              searchitem: searchPlace,
            }
          );
          const placeLists = response.data.data;
          setplaceLists(placeLists);
        } catch (err) {
          console.error("Error fetching data:", err);
        }
        setShowSearchList(true);
      };
      if (searchPlace) {
        fetchData();
      }
    }, 400);

    return () => clearTimeout(handleSearch);
  }, [searchPlace]);
  console.log(placeLists);

  const handleClickPlace = async (data) => {
    const placeName = `${data.postname}, ${data.district}`;
    setSelectedPlace(placeName);
    setShowSearchList(false);
    try {
      const response = await axios.post(
        "http://192.168.1.2:3003/doctor/get_pincode",
        {
          selectedArea_id: data.id,
        }
      );
      const docData = response.data.data;
      console.log({ docData });

      updateDocs(docData);//run function on searchdoc
    } catch (err) {
      console.log(err);
    }
  };
  const searchNames = (event) => {
    const { value } = event.target;
    docNames(value);
  };

  useOutsideClick(() => {
    setShowSearchList(false);
  }, boxRef);
  return (
    <div  className="Doctor-search-box flex" style={{paddingTop:0}}>
      <div className="Doctor-container-search flex">
        <div className="Doctor-Search-box flex">
          <div className="Doctor-location-section flex">
            <i className="ri-map-pin-2-line" />
            < input ref={boxRef}
              onChange={(event) => {
                setSelectedPlace("");
                setSearchPlace(event.target.value);
              }}
              value={selectedPlace || searchPlace}
              className="Doctor-Location-input"
              type="text"
              placeholder="Select location"
            />
          </div>
          <div className="Doctor-search-input flex">
            <input
              onChange={searchNames}
              type="text"
              placeholder="Search Doctor"
            />
          </div>
          <div className="Doctor-search-section flex">
            <i className="ri-search-2-line" />
          </div>
        </div>
      </div>
      {showSearchList && (
        <div className="searchBox_rslt_mainContainer">
          <div className="searchBox_rslt_container">
            {placeLists.map((data, index) => (
              <div
                key={index}
                onClick={() => handleClickPlace(data)}
                className="searchBox_rslt_items"
              >
                {data?.postname}, {data?.district}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
