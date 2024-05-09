import React from 'react'
import "./WebMobile.css"
import { LabFiltering } from '../WebMobile/LabFiltering'
import { MobileLabFilter } from '../MobileLab/MobileLabFilter'
export const WebMobile = () => {
    return (
        <>
            <div className='WebFilter'>
                <LabFiltering />
            </div>
            <div className='MobileFilter'>
                <MobileLabFilter />
            </div>
        </>
    )
}
