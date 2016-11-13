import React from 'react';
import HeaderStyles from '../styles/styles.scss';

class Header extends React.Component {
	render() {
		return (
			<tr className="header">
				<th className="header__name">Name
					<select name="SortName">
						<option value="Asc">&uarr;</option>
						<option value="Desc">&darr;</option>
					</select>
				</th>
				<th className="header__age">Age
					<select name="SortAge">
						<option value="Asc">&uarr;</option>
						<option value="Desc">&darr;</option>
					</select>
				</th>
			</tr>
		);
	}
}

export default Header;