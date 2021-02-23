import React, { useEffect, useMemo, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { useAppContext } from '../../context/Context';

function PokemonDetail({ pokemon }) {
	const [abilities, setAbilities] = useState('');
	const { language } = useAppContext();

	console.log('pokemon :>> ', pokemon);

	useEffect(() => {
		setAbilities(
			pokemon.abilities.map((ability) => {
				let abilityName = ability.names.find(
					(abilityName) => abilityName.language.name === language
				);
				let abilityDescription = ability.flavor_text_entries.find(
					(description) => description.language.name === language
				);
				return (
					<div>
						<div>{abilityName.name}</div>
						{abilityDescription.flavor_text}
					</div>
				);
			})
		);
	}, [language, pokemon]);

	const data = useMemo(() => {
		return {
			labels: pokemon.stats.map((stat) => stat.stat.name.toUpperCase()),
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
	}, [pokemon]);

	return (
		<div>
			<h1>{pokemon.name.toUpperCase()}</h1>
			<div>{language === 'es' ? 'Habilidades' : 'Abilities'}</div>
			{abilities}

			<img
				src={pokemon.sprites.other['official-artwork'].front_default}
				alt=''
			/>
			<img
				src={pokemon.sprites.other.dream_world.front_default}
				alt=''
				style={{ width: '96px' }}
			/>
			{Object.keys(pokemon.sprites).map((key) => {
				if (key.includes('default'))
					return <img src={pokemon.sprites[key]} alt={key} />;
			})}

			<div style={{ width: '400px', padding: '0 30px' }}>
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
	);
}

export default PokemonDetail;
