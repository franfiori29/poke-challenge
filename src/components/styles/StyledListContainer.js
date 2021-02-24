import styled from 'styled-components';

export const StyledListContainer = styled.div`
	margin: 1em;
	.buttonsContainer {
		display: flex;
		justify-content: space-around;
		margin-top: 20px;
		font-size: 40px;

		& > span {
			cursor: pointer;
		}

		.invisible {
			visibility: hidden;
		}
	}
	.buttonsContainer > span {
		padding: 0 0.5em;
		border-radius: 1em;
		transition: all 0.1s linear;

		&:hover {
			background-color: #66b199;
		}
	}
`;
