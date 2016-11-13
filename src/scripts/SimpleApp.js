import React from 'react';
import Search from './Search';
import Table from './Table';
import AddRecord from './AddRecord';

var DATA = [
	{
		name: "John",
		age: 20
	},
	{
		name: "Alice",
		age: 18
	},
	{
		name: "Zak",
		age: 33
	},
	{
		name: "Bill",
		age: 45
	}
];
// MyAppStructure

// SimpleApp
// 		Search
// 		AddRecord
// 		Table
// 			Header
// 			TableRow

class SimpleApp extends React.Component {
	render() {
		return (
			<main>
				<AddRecord />
				<Search />
				<Table />
			</main>
		);
	}
}

export default SimpleApp;