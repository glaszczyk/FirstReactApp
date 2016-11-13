import React from 'react';
import TableRow from './TableRow';
import Header from './Header';
import TableStyle from '../styles/styles.scss';


class Table extends React.Component {
	render() {
		var allRows = [];
		var myTable = this.props.rows;
		myTable.map( (item) => {
			allRows.push(<TableRow key={ item.id } row={ item } user={ this.props.user }/>);
		});
		return (
			<div>
				<table className="main-table">
					<thead>
						<Header />
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