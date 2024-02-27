import axios from "axios";
import { React, useState, useEffect } from "react";

export default function SearchBox({updateDocs}) {
  const [showSearchList, setShowSearchList] = useState(false);
  const [placeLists, setplaceLists] = useState([]);
  const [searchPlace, setSearchPlace] = useState("");

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
    }, 700);

    return () => clearTimeout(handleSearch);
  }, [searchPlace]);
  console.log(placeLists);

  const handleClickPlace = async (id) => {
    const response = await axios.post(
      "http://192.168.1.2:3003/doctor/get_pincode",
      {
        selectedArea_id: id,
      }
    );
    console.log(typeof(response.data.data))
    updateDocs(response.data.data)
    console.log(response);

    setShowSearchList(false);
  };
  return (
    <div className="Doctor-search-box flex">
      <div className="Doctor-container-search flex">
        <div className="Doctor-Search-box flex">
          <div className="Doctor-location-section flex">
            <i className="ri-map-pin-2-line" />
            <input
              onChange={(event) => {
                setSearchPlace(event.target.value);
              }}
              className="Doctor-Location-input"
              type="text"
              placeholder="Kozhikode"
            />
          </div>
          <div className="Doctor-search-input flex">
            <input type="text" placeholder="Search Doctor" />
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
                onClick={() => handleClickPlace(data.id)}
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
