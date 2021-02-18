import React from 'react'

function Divider({cy}) {
    return (
        <div className="divider d-flex align-items-center justify-content-center">
            <svg width="50px" height="120px" fill="none">
                <g>
                    <path d="M25 0 V100" stroke="#000" strokeWidth="2px"></path>
                    {/* cy >> if circle position top = 7 or bottom = 100? */}
                    <circle cx="25" cy={cy} r="7" stroke="#000" fill="#000"></circle>
                </g>
            </svg>
        </div>
    )
}

export default Divider
