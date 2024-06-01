import React from 'react'

export const DocProfileTopbar = () => {
    return (
        <>
            <div className="doctoradminnavbar">
                <div className="containeradmin doctoradminnavbar2 flex">
                    <div className="adminlogodiv flex">
                        <img src="/images/doc.jpg" alt="" />
                        <h2 style={{ marginLeft: "18px" }}>DOCONE</h2>
                    </div>

                    <div className="adminlogodiv flex">

                        <div style={{ marginLeft: "18px" }} className="adminnotification flex">
                            <i class="ri-notification-2-line"></i>
                        </div>
                        <img style={{ marginLeft: "18px" }} src="/images/doc.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
