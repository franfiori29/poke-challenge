import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { firstPage } from '../constants';

export const AppContext = React.createContext({});

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
	const [language, setLanguage] = useState('es');
	const [currentPage, setCurrentPage] = useState(firstPage);
	const resetPage = () => setCurrentPage(firstPage);
	const [stats, setStats] = useState([]);

	return (
		<AppContext.Provider
			value={{
				language,
				setLanguage,
				currentPage,
				setCurrentPage,
				resetPage,
				stats,
				setStats,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
