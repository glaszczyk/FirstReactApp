import React from 'react';
import AddRecordStyles from '../styles/styles.scss';

class AddRecord extends React.Component {
	render() {
		return (
			<form className="add-record">
				<label className="add-record__label">Name </label>
				<input className="add-record__input" type="text" placeholder="Name"/>				
				<label className="add-record__label"> Age </label>
				<input className="add-record__input" type="number" placeholder="Age"/>
				<button className="add-record__button" type="submit">Add Person</button>
			</form>
		);
	}
}

export default AddRecord;