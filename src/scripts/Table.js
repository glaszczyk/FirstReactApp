import React from 'react';
import TableRow from './TableRow';
import Header from './Header';
import TableStyle from '../styles/styles.scss';

var sort = function sort(table, property, order) {
	if (property === "name") {
		if (order === "asc") {
			return table.sort( (el1, el2) => el1[property].localeCompare(el2[property]) )
		} else if (order === "desc") {
			return table.sort( (el1, el2) => el2[property].localeCompare(el1[property]) );
		} else {
			return table;
		}
	} else {
		if (order === "asc") {
			return table.sort( (el1, el2) => el1[property]-el2[property] );
		} else if (order === "desc") {
			return table.sort( (el1, el2) => el2[property]-el1[property] );
		} else {
			return table;
		}
	}
}

class Table extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sortNameOrder: "none",
			sortAgeOrder: "none"
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
	}
	render() {
		let allRows = [];
		let myTable = this.props.rows;
		let resultTable = [];
		let search = this.props.search;

		if (search !== "") {
			resultTable = ( myTable.filter( (row) => {
				let testRow = row.name.toLowerCase(),
					testSearch = search.toLowerCase();
				if ( testRow.indexOf(testSearch) != -1 ) {
					return row;
				}
			} ) );
		} else {
			resultTable = myTable;
		}
		/*	Zmodyfikować sortowanie: Oprócz sortowania góra/dół musi być jeszcze dla każdej kolumny wyłączenie sortowania.
			Zmienić warunki: jeśli jedna kolumna dostaje sortowanie (góra/dół) to druga kolumna powinna otrzymać status wyłączenia sortowania
			Funkcja sort potrzebuje sprawdzenia warunków dla góra, dół, brak
			sortNameOrder, sortNameAge: potrzebują wartości góra/dół/brak
			funkcje sortName, sortAge muszą sprawdzać jaki stan został ustawiony i jeśli góra/dół to muszą jednocześnie wyłączać stan dla drugiej kolumny na brak
		*/
		var resultTable1 = sort( sort( resultTable, "name", this.state.sortNameOrder), "age", this.state.sortAgeOrder); //sort function by age or name

		resultTable1.map( (item) => {
			allRows.push(<TableRow key={ item.id } row={ item } user={ this.props.user } />);
		});

		return (
			<div>
				<table className="main-table">
					<thead>
						<Header sortNameOrder={ this.state.sortNameOrder } sortAgeOrder={ this.state.sortAgeOrder } sortN={this.sortName} sortA={this.sortAge} />
					</thead>
					<tbody>
						{ allRows }
					</tbody>
				</table>
			</div>
		);
	}
}

export default Table;