import React from 'react';
import PokemonCard from '../PokemonCard';
import { StyledList } from '../styles/StyledList';

function List({ pokemons }) {
	return (
		<StyledList>
			{pokemons.map((pokemon) => (
				<PokemonCard key={pokemon.id} pokemon={pokemon} />
			))}
		</StyledList>
	);
}

export default List;
