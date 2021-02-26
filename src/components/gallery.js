import React from "react"
import pizzaGalleryImg from "../images/gallery-img.png"


function Gallery(){
    return(
        <div className="main-gallery-container">
            <h1 className="gallery-heading">Gallery</h1>
            <img className="gallery-img" src={pizzaGalleryImg} alt="pizza king gallery" /> 
        </div>
    )
}
export default Gallery