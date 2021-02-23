import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/Context';

const NavBar = ({}) => {
	const { language, setLanguage } = useAppContext();

	return (
		<header
			style={{
				backgroundColor: 'coral',
				height: '8vh',
				display: 'flex',
				padding: '0 40px',
				alignItems: 'center',
				justifyContent: 'space-between',
			}}
		>
			<Link to='/'>HOME</Link>
			<div
				style={{ cursor: 'pointer' }}
				onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
			>
				{language.toUpperCase()}
			</div>
		</header>
	);
};

export default NavBar;
