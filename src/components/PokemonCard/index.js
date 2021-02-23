import React from 'react';
import { Link } from 'react-router-dom';

function PokemonCard({ pokemon }) {
	return (
		<Link to={`/pokemon/${pokemon.id}`}>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					margin: '20px',
					border: '',
				}}
			>
				<img
					style={{ width: 300 }}
					src={pokemon.sprites.other['official-artwork'].front_default}
					alt={pokemon.name}
				/>
				<span>{pokemon.name.toUpperCase()}</span>
			</div>
		</Link>
	);
}

export default PokemonCard;
