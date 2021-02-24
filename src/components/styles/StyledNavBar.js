import styled from 'styled-components';

export const StyledNavBar = styled.nav`
	background-color: #66b199;
	padding: 1.5em 0;
	font-weight: 600;

	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 90%;
		max-width: 1200px;
		margin: 0 auto;
		font-size: 20px;

		& > div {
			cursor: pointer;
		}
	}

	img {
		transition: all 3s ease-in-out;
		transform: rotate(0);
		width: 3em;
		&:hover {
			transform: rotate(1080deg);
		}
	}
`;
