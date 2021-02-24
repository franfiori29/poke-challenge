import styled from 'styled-components';

export const StyledPagination = styled.div`
	& > span {
		margin: 0 1em;
		cursor: pointer;
		padding: 0 0.5em;
		border-radius: 1em;
		transition: all 0.1s linear;
		&:hover {
			background-color: #66b199;
		}
		@media (max-width: 450px) {
			margin: 0 0.3em;
		}
	}
`;
