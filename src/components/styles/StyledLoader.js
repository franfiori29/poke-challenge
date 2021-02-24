import styled from 'styled-components';

export const StyledLoader = styled.div`
	position: relative;
	height: 50px;
	width: 50px;
	background: linear-gradient(to bottom, rgb(254, 0, 1) 50%, white 50%);
	border-radius: 50%;
	border: 4px solid black;
	animation: spin 1s linear infinite;
	margin: 100px auto;

	&::before {
		content: '';
		position: absolute;
		height: 4px;
		width: 50px;
		background: black;
		top: 25px;
		transform: translatey(-50%);
	}

	&::after {
		content: '';
		position: absolute;
		height: 19px;
		width: 19px;
		border-radius: 50%;
		background: white;
		top: 25px;
		left: 25px;
		transform: translate(-50%, -50%);
		box-shadow: inset 0 0 0 4px black, inset 0 0 0 5px white,
			inset 0 0 0 6px black;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	} ;
`;
