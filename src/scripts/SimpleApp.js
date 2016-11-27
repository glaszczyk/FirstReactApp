import React from 'react';
import Search from './Search';
import Table from './Table';
import AddRecord from './AddRecord';

let myId = function myId() {
	let time = Date.now();
	let rand = Math.random() * 1000;
	return Math.round( time * rand );
}

var DATA = [
	{
		id: myId(),
		name: "John",
		age: 20
	},
	{
		id: myId(),
		name: "Alice",
		age: 18
	},
	{
		id: myId(),
		name: "Zak",
		age: 33
	},
	{
		id: myId(),
		name: "Bill",
		age: 45
	},
	{
		id: myId(),
		name: "Ala",
		age: 18
	}
];

var user = "Alice";

// MyAppStructure

// SimpleApp
// 		Search
// 		AddRecord
// 		Table
// 			Header
// 			TableRow

class SimpleApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchInput: "",
			addNameInput: "",
			addAgeInput: ""
		}
	}
	render() {
		return (
			<main>
				<p>Current user: {user}</p>
				<AddRecord />
				<Search />
				<Table rows={ DATA } user={ user } search={ this.state.searchInput } />
			</main>
		);
	}
}

export default SimpleApp;