import React from 'react';
import { Link } from 'react-router-dom';
import { StyledPokemonCard } from '../styles/StyledPokemonCard';

function PokemonCard({ pokemon }) {
	return (
		<Link to={`/pokemon/${pokemon.id}`}>
			<StyledPokemonCard>
				<img
					src={pokemon.sprites.other['official-artwork'].front_default}
					alt={pokemon.name}
				/>
				<span>{pokemon.name.toUpperCase()}</span>
			</StyledPokemonCard>
		</Link>
	);
}

export default PokemonCard;
