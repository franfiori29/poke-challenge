import React, { useContext, useEffect, useState } from 'react';
import { firstPage } from '../constants';

export const AppContext = React.createContext({});

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
	const [language, setLanguage] = useState(
		localStorage.getItem('language') ?? 'es'
	);
	const [currentPage, setCurrentPage] = useState(firstPage);
	const resetPage = () => setCurrentPage(firstPage);

	useEffect(() => {
		localStorage.setItem('language', language);
	}, [language]);

	return (
		<AppContext.Provider
			value={{
				language,
				setLanguage,
				currentPage,
				setCurrentPage,
				resetPage,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
