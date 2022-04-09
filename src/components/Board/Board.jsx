import { useEffect, useState } from "react";

// Components
import Cell from "../Cell/Cell";

// Data
import cellsData from "../../data/cells.json";

// Audio
import applauseAudio from "../../audio/applause.mp3";

// CSS
import "./Board.scss";

const Board = (props) => {
	const applauseSound = new Audio(applauseAudio);
	const [win, setWin] = useState(false);
	const [cells, setCells] = useState(cellsData);

	// componentDidMount
	useEffect(() => {}, []);

	// Toggle Cells Around a Cell
	const findCellById = (id) => {
		return cells.find((cell) => cell.id === id);
	};
	const findCellByXY = (x, y) => {
		return cells.find((cell) => cell.x === x && cell.y === y);
	};
	const findCellIndexById = (id) => {
		return cells.findIndex((cell) => cell.id === id);
	};
	const toggleCellsAround = (id, x, y, on) => {
		let cellsAroundTheCellIds = [
			findCellByXY(x, y - 1) ? findCellByXY(x, y - 1).id : undefined,
			findCellByXY(x - 1, y) ? findCellByXY(x - 1, y).id : undefined,
			findCellByXY(x + 1, y) ? findCellByXY(x + 1, y).id : undefined,
			findCellByXY(x, y + 1) ? findCellByXY(x, y + 1).id : undefined,
		].filter((element) => element !== undefined);

		let newCellsData = [...cells];
		newCellsData[findCellIndexById(id)].on = !newCellsData[findCellIndexById(id)].on;
		for (let cellId of cellsAroundTheCellIds) {
			newCellsData[findCellIndexById(cellId)].on = !newCellsData[findCellIndexById(cellId)].on;
		}
		setCells(newCellsData);
	};

	// to check if all cells are OFF
	useEffect(() => {
		if (cells.find((cell) => cell.on === true) === undefined) {
			applauseSound.play();
			setWin(true);
		}
	}, [cells]);

	return (
		<>
			{!win && (
				<div className="board">
					{cells.map(({ id, x, y, on }) => {
						return <Cell key={id} on={on} onClick={() => toggleCellsAround(id, x, y, on)} />;
					})}
				</div>
			)}
			{win && <h2 className="youWin uppercase text-center">You Win!</h2>}
		</>
	);
};

export default Board;
