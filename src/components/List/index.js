import React from 'react';
import PokemonCard from '../PokemonCard';

function List({ pokemons }) {
	return (
		<div
			style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
		>
			{pokemons.map((pokemon) => (
				<PokemonCard key={pokemon.id} pokemon={pokemon} />
			))}
		</div>
	);
}

export default List;
