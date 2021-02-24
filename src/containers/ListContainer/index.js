import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import List from '../../components/List';
import { useAppContext } from '../../context/Context';
import { StyledListContainer } from '../../components/styles/StyledListContainer';
import { getPageNumberFromUrl, goToPage } from '../../constants';
import Pagination from '../../components/Pagination';
import { StyledLoader } from '../../components/styles/StyledLoader';

function ListContainer() {
	const { currentPage, setCurrentPage } = useAppContext();
	const [loading, setLoading] = useState(true);
	const [nextPage, setNextPage] = useState(null);
	const [previousPage, setPreviousPage] = useState(null);
	const [pokemonList, setPokemonList] = useState([]);

	const fetchPokemon = useCallback(
		(url) => {
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
					setCurrentPage(url);
					setLoading(false);
				});
		},
		[setCurrentPage]
	);

	useEffect(() => {
		fetchPokemon(currentPage);
	}, [currentPage, fetchPokemon]);

	if (loading) return <StyledLoader />;
	return (
		<StyledListContainer>
			<List pokemons={pokemonList} />
			<div className='buttonsContainer'>
				{previousPage ? (
					<span onClick={() => setCurrentPage(previousPage)}>{'<'}</span>
				) : (
					<span className='invisible'></span>
				)}
				<Pagination
					currentPage={currentPage}
					goToPage={goToPage}
					setCurrentPage={setCurrentPage}
					getPageNumberFromUrl={getPageNumberFromUrl}
				/>
				<span onClick={() => setCurrentPage(nextPage)}>{'>'}</span>
			</div>
			{/* <div
				onClick={() => {
					fetchPokemon(goToPage(3));
				}}
			>
				3
			</div> */}
		</StyledListContainer>
	);
}

export default ListContainer;
