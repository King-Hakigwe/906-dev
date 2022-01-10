import React from 'react'

const Content = ({head, paragraph}) => {
    return (
        <div className="nine__content">
            <div className="container">
                <div className="nine__content-container">
                    <h2>{head}</h2>
                    <p>{paragraph}</p>
                </div>
            </div>
        </div>
    )
}

export default Content
