import React from 'react'
import "./MobileLabFilter.css"
export const MobileLabFilter = () => {
    return (
        <div className='MobileLabAlign'>
            <div className='MobileLabAlignFilter'>
                <SearchBox
                    updateDocs={updateDocByPlace}
                    docNames={handleDocNameSearch}
                />
            </div>

        </div>
    )
}

