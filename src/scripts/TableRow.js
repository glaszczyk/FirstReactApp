import React from 'react';
import TableRowStyles from '../styles/styles.scss';

class TableRow extends React.Component {
	render() {
		let tableRow = "";
		if (this.props.user === this.props.row.name) {
			tableRow = "table-row--user";
		} else {
			tableRow = "table-row";
		}

		return (
			<tr className={ tableRow }>
				<td className="table-row__name">{ this.props.row.name }</td>
				<td className="table-row__age">{ this.props.row.age }</td>
			</tr>
		);
	}
}

export default TableRow;