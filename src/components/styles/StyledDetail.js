import styled from 'styled-components';

export const StyledDetail = styled.div`
	position: relative;

	.backButton {
		position: absolute;
		left: 1em;
		top: 0.8em;
		font-size: 3em;
		padding: 0.1em 0.6em 0 0.5em;
		border-radius: 1em;
		transition: all 0.1s linear;

		&:hover {
			background-color: #66b199;
		}

		@media (max-width: 700px) {
			left: 0.1em;
			top: 0.1em;

			font-size: 2em;
		}
	}

	h1 {
		font-size: 3em;
	}

	.detailTitle {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: 2em;

		img {
			width: 90px;
		}

		@media (max-width: 500px) {
			font-size: 0.6em;
		}
	}

	.container {
		display: flex;
		width: 90%;
		max-width: 1600px;
		justify-content: space-around;
		margin: 0 auto;
		flex-wrap: wrap;

		.ability {
			h4 {
				margin-bottom: 0.3em;
			}

			p {
				margin-top: 0;
			}
		}
		@media (max-width: 960px) {
			flex-direction: column;
			align-items: center;
			& > div {
				margin-bottom: 2em;
			}
		}
		.statsChart {
			width: 400px;
			@media (max-width: 450px) {
				width: 300px;
			}
		}
	}
	.imagesContainer {
		order: 2;

		.mainImage {
			width: 400px;
			height: 400px;

			img {
				width: 100%;
				height: 100%;
			}

			@media (max-width: 450px) {
				width: 300px;
				height: 300px;
			}
		}

		& > img {
			width: 100%;
		}
		.thumbnails {
			display: flex;
			justify-content: center;

			img {
				width: 60px;
				margin: 0 0.8em;
				cursor: pointer;
				transition: all 0.2s linear;
				&:hover {
					background-color: #eee;
				}
			}
		}
	}
`;
