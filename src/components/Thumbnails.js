import React from 'react'

const Thumbnails = ({title, imgs}) => {
    return (
        <div className="thumbnail-container">
            <h5>{title}</h5>
            <div className="thumbnails">
                <figure className="thumbnail-img-container">
                    <img className="thumbnail-img" src={`../assets/images/${imgs}1.jpg`} />
                </figure>
                <figure className="thumbnail-img-container">
                    <img className="thumbnail-img" src={`../assets/images/${imgs}2.jpg`} />
                </figure>
                <figure className="thumbnail-img-container">
                    <img className="thumbnail-img" src={`../assets/images/${imgs}3.jpg`} />
                </figure>
                <figure className="thumbnail-img-container">
                    <img className="thumbnail-img" src={`../assets/images/${imgs}4.jpg`} />
                </figure>
            </div>
        </div>
    )
}

export default Thumbnails