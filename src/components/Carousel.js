import { Link } from "react-router-dom";
import '../styles/styleHome.css';
import Cards from '../assets/images/cardsPokemon.png';
import Play from '../assets/images/playPokemon.png';
import Tv from '../assets/images/tvPokemon.png';

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide w-50"
        data-bs-ride="carousel"
      >
        <div className="bloque-indicators carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <a href="https://tcg.pokemon.com/es-mx/expansions/astral-radiance/"><img src={Cards} className="d-block" alt="Cartas Pokemon" /></a>
            <div className="bloque-1 carousel-caption d-none d-md-block">
            </div>
          </div>
          <div className="carousel-item">
            <a href="https://www.pokemon.com/el/play-pokemon/campeonatos-internacionales/2022/norteamerica/inscripcion/"><img src={Play} className="d-block" alt="Play Pokemon" /></a>
            <div className="bloque-1 carousel-caption d-none d-md-block">
            </div>
          </div>
          <div className="carousel-item">
          <a href="https://watch.pokemon.com/es-xl/#/"><img src={Tv} className="d-block" alt="Tv Pokemon" /></a>
            <div className="bloque-1 carousel-caption d-none d-md-block">
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="bloque-1 carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="bloque-1 carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
export default Carousel;
