import "./index.css";
const FlexLayout = () => {
	return (
		<div className="wrapper">
			<div className="box1">One</div>
			<div className="box2">Two</div>
			<div className="box3">Three</div>
		</div>
	);
};
const GridLayout = () => {
	return (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "repeat(3, 1fr)", // 3 列，每列等宽
				gridTemplateRows: "repeat(2, auto)", // 2 行，每行高度自动调整
				gap: "8px", // 间隙为 8px
			}}
		>
			<div style={{ backgroundColor: "#90cdf4", padding: "10px" }}>One</div>
			<div style={{ backgroundColor: "#9ae6b4", padding: "10px" }}>Two</div>
			<div style={{ backgroundColor: "#faf089", padding: "10px" }}>Three</div>
			<div style={{ backgroundColor: "#fc8181", padding: "10px" }}>Four</div>
			<div style={{ backgroundColor: "#d6bcfa", padding: "10px" }}>Five</div>
			<div style={{ backgroundColor: "#feb2b2", padding: "10px" }}>Six</div>
		</div>
	);
};

export { FlexLayout, GridLayout };
