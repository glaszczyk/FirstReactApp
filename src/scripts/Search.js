import React from 'react';
import SearchStyles from '../styles/styles.scss';

class Search extends React.Component {
	render() {
		return (
			<form className="search">
				<label className="search__label">Search</label>
				<input className="search__input" type="text" placeholder="Type to search"/><br />
			</form>
		);
	}
}

export default Search;