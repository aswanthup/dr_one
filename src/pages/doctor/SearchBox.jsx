import React from 'react'

export default function SearchBox() {
  return (
    <div className="Doctor-search-box flex">
    <div className="Doctor-container-search flex">
      <div className="Doctor-Search-box flex">
        <div className="Doctor-location-section flex">
          <i className="ri-map-pin-2-line" />
          <input
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
  </div>
  )
}
