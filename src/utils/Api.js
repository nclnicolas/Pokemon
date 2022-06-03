import { useEffect, useState, ChangeEvent } from "react";
import CardPokemon from '../components/CardPokemon';

const Api = () => {
  //1- Creamos un estado con valor inicial vacio y un estado para nuestra API 
  const [allPokemon, setAllPokemon] = useState([]);
  const [load, setLoad] = useState('https://pokeapi.co/api/v2/pokemon');
  const [search, setSearch] = useState('');

  

  //2- Creamos una funcion para recibir datos de una API o de un backend, capturar los datos con async await
  const getAllPokemon = async () => {
      const res = await fetch(load);
      const data = await res.json();

      setLoad(data.next);//Cuando hacemos click al boton ver mas, nos muestra mas pokemons

      //Funcion para poder mostrar datos de cada Pokemon
      function createPokemonObjetct (result){
          result.forEach(async (pokemon) =>{
              const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
              const data = await res.json();

              //3- Guardamos pokemones en el estado
              setAllPokemon(currentList => [...currentList, data]);
            

          })
      }
      createPokemonObjetct(data.results);
      await console.log('Aca los vemos', allPokemon);
  }

  //4- Ejecutamos la funcion para guardar los datos obtenidos de la API mediante el useEffect
  useEffect(() => {
    getAllPokemon();
  }, []);



  //5- Pintamos HTML con los datos obtenidos
  return (
    <>
    <input 
      type='text'
      className="input-busqueda"
      placeholder="Buscar Pokemon"
      value={search}
      
    />

      <div className="api-container">
        {allPokemon.map((elem, index) =>
            <CardPokemon 
            id = {elem.id}
            name = {elem.name}
            image = {elem.sprites.other.dream_world.front_default}
            types = {elem.types[0].type.name}
            key = {index}
            />
          )}
           {console.log(allPokemon)}
          <button onClick={() => getAllPokemon()}> Ver Mas </button>
      </div>
      
            
        
    </>
  );
};
export default Api;
