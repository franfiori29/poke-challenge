import React, { useEffect, useState } from 'react';
import axios from 'axios';
import List from '../../components/List';

function ListContainer() {
	const [loading, setLoading] = useState(true);
	const [nextPage, setNextPage] = useState(
		`https://pokeapi.co/api/v2/pokemon?offset=0&limit=5`
	);
	const [previousPage, setPreviousPage] = useState(null);
	const [pokemonList, setPokemonList] = useState([]);

	const fetchPokemon = (url) => {
		setLoading(true);
		axios
			.get(url)
			.then((res) => {
				setPreviousPage(res.data.previous);
				setNextPage(res.data.next);
				return res.data.results;
			})
			.then(async (res) => {
				let pokemonInfo = [];
				for (let pokemon of res) {
					pokemonInfo.push((await axios.get(pokemon.url)).data);
				}
				setPokemonList(pokemonInfo);
				setLoading(false);
			});
	};

	useEffect(() => {
		fetchPokemon(nextPage);
	}, []);

	if (loading) return <h1 style={{ textAlign: 'center' }}>Loading...</h1>;
	return (
		<>
			<List pokemons={pokemonList} />
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-around',
					marginTop: '20px',
					fontSize: '40px',
				}}
			>
				{previousPage ? (
					<span
						style={{
							cursor: 'pointer',
						}}
						onClick={() => fetchPokemon(previousPage)}
					>
						{' '}
						{'<'}{' '}
					</span>
				) : (
					<span></span>
				)}
				<span
					onClick={() => fetchPokemon(nextPage)}
					style={{
						cursor: 'pointer',
					}}
				>
					{'>'}
				</span>
			</div>
		</>
	);
}

export default ListContainer;
