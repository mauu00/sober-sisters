import React from 'react';
import { SearchBar } from '../../components/Search';


const Search = () => {
	return (
		<div className='search-wrap'>
			<h3>김치가 될만한 과일, 채소를 입력하세요</h3>
			<SearchBar />
		</div>
	);
};

export default Search;