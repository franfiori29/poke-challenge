import React from 'react';
import { StyledPagination } from '../styles/StyledPagination';

function Pagination({
	currentPage,
	goToPage,
	setCurrentPage,
	getPageNumberFromUrl,
}) {
	const pageNumber = getPageNumberFromUrl(currentPage);
	return (
		<StyledPagination>
			<span>
				{pageNumber <= 6 ? (
					<span onClick={() => setCurrentPage(goToPage(1))}>1</span>
				) : (
					<span onClick={() => setCurrentPage(goToPage(pageNumber - 5))}>
						{pageNumber - 5}
					</span>
				)}
			</span>
			<span>{pageNumber}</span>
			<span onClick={() => setCurrentPage(goToPage(pageNumber + 5))}>
				{pageNumber + 5}
			</span>
		</StyledPagination>
	);
}

export default Pagination;
