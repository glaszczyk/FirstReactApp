import React from 'react';
import HeaderStyles from '../styles/styles.scss';

class Header extends React.Component {
/*	constructor(props) {
		super(props);
		this.state = {
			sortNameOrder: "true",
			sortAgeOrder: "true"
		}
		this.sortName = this.sortName.bind(this);
		this.sortAge = this.sortAge.bind(this);
	}
	sortName(event) {
		this.setState( { sortNameOrder: event.target.value }, () => {
			console.log( this.state.sortNameOrder );
		} )
	}
	sortAge(event) {
		this.setState( { sortAgeOrder: event.target.value }, () => {
			console.log( this.state.sortAgeOrder );
		} )
	}*/

	render() {
		return (
			<tr className="header">	
				<th className="header__name">Name
					<select value={ this.props.sortNameOrder } onChange={ (event) =>  this.props.sortN(event) }>
						<option value="asc">&uarr;</option>
						<option value="desc">&darr;</option>
						<option value="none">&ndash;</option>
					</select>
				</th>
				<th className="header__age">Age
					<select value={ this.props.sortAgeOrder } onChange={ (event) =>  this.props.sortA(event) }>
						<option value="asc">&uarr;</option>
						<option value="desc">&darr;</option>
						<option value="none">&ndash;</option>
					</select>
				</th>
			</tr>
		);
	}
}

export default Header;