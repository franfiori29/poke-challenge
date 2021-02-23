import React, { useContext, useState } from 'react';

export const AppContext = React.createContext({});

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
	const [language, setLanguage] = useState('es');
	const [pokemonDetail, setPokemonDetail] = useState(null);

	return (
		<AppContext.Provider
			value={{ language, setLanguage, pokemonDetail, setPokemonDetail }}
		>
			{children}
		</AppContext.Provider>
	);
};
