import React from 'react';
import TableRow from './TableRow';
import Header from './Header';
import TableStyle from '../styles/styles.scss';

class Table extends React.Component {
	render() {
		return (
			<table className="main-table">
				<thead>
					<Header />
				</thead>
				<tbody>
					<TableRow />
				</tbody>
			</table>
		);
	}
}

export default Table;