import Pokemon from "./Pokemon.js";

const PokemonList = (props) => {
  const pokeComponents = props.pokemonList.map((pokemon) => {
    return (
      <Pokemon
        key={pokemon.id}
        id={pokemon.id}
        name={pokemon.name}
        img={pokemon.img}
        height={pokemon.height}
        weight={pokemon.weight}
        type={pokemon.type}
      />
    );
  });
  return (
    <ul className="collection">
      {pokeComponents}
    </ul>
  );
};


export default PokemonList;
