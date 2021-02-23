import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import PokemonDetail from '../../components/PokemonDetail';

function DetailContainer() {
	const { id } = useParams();
	const [pokemon, setPokemon] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(async (res) => {
			let abilitiesWithInfo = [];
			for (let ability of res.data.abilities) {
				abilitiesWithInfo.push((await axios.get(ability.ability.url)).data);
			}
			res.data.abilities = abilitiesWithInfo;
			setPokemon(res.data);
			setLoading(false);
		});
	}, []);

	if (loading) return <h1>Loading...</h1>;

	return <PokemonDetail pokemon={pokemon} />;
}

export default DetailContainer;
