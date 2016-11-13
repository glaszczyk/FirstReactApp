import React from 'react';
import TableRowStyles from '../styles/styles.scss';

class TableRow extends React.Component {
	render() {
		return (
			<tr className="table-row">
				<td className="table-row__name">Name</td>
				<td className="table-row__age">Age</td>
			</tr>
		);
	}
}

export default TableRow;