// CSS
import "./Cell.scss";

const Cell = ({ on, onClick }) => {
	let cellClass = "cell";
	if (on === true) {
		cellClass += " on";
	}

	return <div className={cellClass} onClick={onClick}></div>;
};

export default Cell;
