//Componente que contendra la info del Pokemon que traemos de nuestra API
import React from "react";


const CardPokemon = ({ id, name, image, types}) => {
  return (
    <>
      <div className="card-pokemon">
        <div className="number-pokemon">
        <small>N.0{id}</small>
        </div>
        <img src={image} alt={name} />
        <div className="container-pokemon">
          <h3>{name}</h3>
          <small>{types}</small>
        </div>
      </div>
    </>
  );
};
export default CardPokemon;
