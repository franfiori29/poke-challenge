import React, { useEffect, useMemo, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/Context';
import { StyledDetail } from '../styles/StyledDetail';
import { stats } from '../../constants';

function PokemonDetail({ pokemon }) {
	const [abilities, setAbilities] = useState('');
	const [mainImage, setMainImage] = useState(
		pokemon.sprites.other['official-artwork'].front_default
	);
	const { language } = useAppContext();

	useEffect(() => {
		setAbilities(
			pokemon.abilities.map((ability, i) => {
				let abilityName = ability.names.find(
					(abilityName) => abilityName.language.name === language
				);
				let abilityDescription = ability.flavor_text_entries.find(
					(description) => description.language.name === language
				);
				return (
					<div className='ability' key={i}>
						<h4>{abilityName.name}</h4>
						<p>{abilityDescription.flavor_text}</p>
					</div>
				);
			})
		);
	}, [language, pokemon]);

	const data = useMemo(() => {
		return {
			labels: stats[language],
			datasets: [
				{
					label: language === 'es' ? 'ESTADISTICAS' : 'STATS',
					data: pokemon.stats.map((stat) => stat.base_stat),
					backgroundColor: pokemon.stats.map(() => {
						const r = Math.round(Math.random() * 255);
						const g = Math.round(Math.random() * 255);
						const b = Math.round(Math.random() * 255);
						return `rgb(${r}, ${g}, ${b})`;
					}),
				},
			],
		};
	}, [pokemon, language]);

	return (
		<StyledDetail>
			<Link to='/' className='backButton'>
				{'<'}
			</Link>
			<div className='detailTitle'>
				<h1>{pokemon.name.toUpperCase()} </h1>
				<img src={pokemon.sprites.front_default} alt='' />
			</div>
			<div className='container'>
				<div className='imagesContainer'>
					<div className='mainImage'>
						<img src={mainImage} alt='' />
					</div>
					<div className='thumbnails'>
						<img
							src={pokemon.sprites.other['official-artwork'].front_default}
							alt=''
							onClick={() =>
								setMainImage(
									pokemon.sprites.other['official-artwork'].front_default
								)
							}
						/>
						<img
							src={pokemon.sprites.other.dream_world.front_default}
							alt=''
							onClick={() =>
								setMainImage(pokemon.sprites.other.dream_world.front_default)
							}
						/>
					</div>
				</div>

				<div className='abilities'>
					<h2>{language === 'es' ? 'Habilidades' : 'Abilities'}</h2>
					{abilities}
				</div>
				<div className='statsChart'>
					<Bar
						data={data}
						width={100}
						height={100}
						options={{
							scales: {
								yAxes: [
									{
										ticks: {
											max: 100,
											beginAtZero: true,
										},
									},
								],
							},
						}}
					/>
				</div>
			</div>
		</StyledDetail>
	);
}

export default PokemonDetail;
