import React from "react";
import styles from "./index.module.css";
const Box = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
     
          <i className="ri-map-pin-2-line" />
    
        <span>Search location</span>
      </div>
      <div className={styles.center}>
        <input placeholder="Search doctor" type="text" />
      </div>
      <div className={styles.right}>
        <div>

      <i className="ri-search-2-line" />
        </div>
      </div>
    </div>
  );
};

export default Box;
