import styled from 'styled-components';

export const StyledPokemonCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 1.5em;
	font-weight: 600;
	padding: 1em;
	transition: all 0.2s linear;
	border-radius: 1em;

	&:hover {
		transform: translateY(-5px);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
	}

	img {
		width: 280px;
	}
`;
