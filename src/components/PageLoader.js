import React from 'react'

export default function PageLoader() {
    return (
        <div className="page-loader">
            <img
                src={process.env.PUBLIC_URL + "/assets/images/pageLoader.gif"}
                alt="loading"
            />
        </div>
    )
}
