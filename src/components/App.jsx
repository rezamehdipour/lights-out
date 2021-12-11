// Components
import Board from "./Board/Board";

// CSS
import "./App.scss";

const App = (props) => {
	// Generate Cells Data
	/*
	let data = [];
	function calX(i) {
		if (i <= 5) {
			return i;
		} else {
			if (i % 5 !== 0) {
				return i % 5;
			} else {
				return 5;
			}
		}
	}
	function calY(i) {
		if (i <= 5) {
			return 1;
		} else {
			if (i % 5 === 0) {
				return i / 5;
			} else {
				return Math.floor(i / 5) + 1;
			}
		}
	}
	for (let i = 1; i <= 25; i++) {
		let newObject = {
			id: i,
			x: calX(i),
			y: calY(i),
			on: false,
		};
		data.push(newObject);
	}
	console.log(data);
	*/

	return (
		<div className="wrapper">
			<h1 className="head uppercase">
				<span className="lights">Lights</span>
				<span className="out">Out</span>
			</h1>
			<Board />
		</div>
	);
};

export default App;
