import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ProjectCarousel.css';

const ProjectCarousel = ({ images, sliderRef }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const slideRight = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const slideLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    return (
        <div className='carousel-wrapper'>
            <div className="arrow-right" onClick={slideRight}>
                <span className="material-symbols-outlined">chevron_right</span>
            </div>

            <div className="arrow-left" onClick={slideLeft}>
                <span className="material-symbols-outlined">chevron_left</span>
            </div>
            <Slider {...settings} ref={sliderRef}>
                {images.map((image, index) => (
                    <div key={index} className="carousel-image-container">
                        <img
                            src={image}
                            alt={`Project ${index + 1}`}
                            className="carousel-image"
                        />
                    </div>
                ))}
            </Slider>
            <div className="arrow-right" onClick={slideRight}>
                <span className="material-symbols-outlined">chevron_right</span>
            </div>

            <div className="arrow-left" onClick={slideLeft}>
                <span className="material-symbols-outlined">chevron_left</span>
            </div>
        </div>
    );
};

export default ProjectCarousel;
