import React from 'react';
import "../assets/styles/components/CarouselItem.scss";

const CarouselItem = () => (
    <div className="carousel-item">
        <img className="carousel-item__img" src="https://images.pexels.com/photos/5202030/pexels-photo-5202030.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="1" />
        <div className="carousel-item__details">
            <div>
                <img className="carousel-item__details--icon" src="assets/icons8-play-64.png" alt="Play" />
                <img className="carousel-item__details--icon" src="assets/icons8-plus-64.png" alt="Plus" />
            </div>
            <p className="carousel-item__details--title">Título descriptivo</p>
            <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
        </div>
    </div>
)


export default CarouselItem;
