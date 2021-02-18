import React from 'react'

function PagesHeader({pageName}) {
    return (
        <div className="pages-header d-flex align-items-end justify-content-center" >
            <div className="content">
                <h2>{pageName}</h2>
            </div>
        </div>
    )
}

export default PagesHeader;
