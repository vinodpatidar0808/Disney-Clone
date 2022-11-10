import React from 'react';
import Thumbnails from "./Thumbnails";
import Slider from "./Slider";
import Brands from "./Brands";

const MainPage = () => {
    return (
        <div className="main-container">
        {/* slider */}
        <Slider />
        {/* Brands */}
        <Brands />
        {/* Recommended for you */}
            <Thumbnails title="Recommended For You" imgs="rec" />
        {/* New to Disney+ */}
            <Thumbnails title="New to Disney+" imgs="new" />

        {/* Originals */}
            <Thumbnails title="Originals" imgs="originals" />
        {/* Trending */}
            <Thumbnails title="Trending" imgs="trending" />
        </div>
    )
}

export default MainPage