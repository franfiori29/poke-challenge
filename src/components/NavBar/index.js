import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/Context';
import { StyledNavBar } from '../styles/StyledNavBar';

const NavBar = ({}) => {
	const { language, setLanguage, resetPage } = useAppContext();
	return (
		<StyledNavBar>
			<div className='container'>
				<Link to='/' onClick={resetPage}>
					<img
						src='/images/pokeball.png'
						alt='pokeball logo'
						style={{ width: '3em' }}
					/>
				</Link>
				<div
					style={{ cursor: 'pointer' }}
					onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
				>
					{language.toUpperCase()}
				</div>
			</div>
		</StyledNavBar>
	);
};

export default NavBar;
