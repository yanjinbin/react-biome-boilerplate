const BFCLayout = () => {
	return (
		<>
			<div>
				<a href={"https://juejin.cn/post/7486405211810103350"}>
					当元素满足以下任一条件时，会创建一个新的BFC： 根元素（html）。
					浮动元素（float不为none）。
					绝对定位元素（position为absolute或fixed）。 行内块元素（display:
					inline-block）。 表格单元格（display: table-cell，默认特性）。
					表格标题（display: table-caption）。
					<span style={{ backgroundColor: "black" }}>
						overflow 不为 visible 的块元素（如overflow: hidden）
					</span>
					。 弹性盒子（display: flex或inline-flex）。 网格容器（display:
					grid或inline-grid）。 多列容器（column-count或column-width不为auto）。
					bfc作用 垂直排列：BFC内的块级元素会垂直排列，间距由margin决定。
					边距折叠：同一BFC内的相邻块级元素上下边距会发生折叠（合并为单个边距），但不同BFC之间的边距不会折叠。
					包含浮动元素：BFC会计算内部浮动元素的高度，避免父容器高度塌陷。
					隔离浮动：BFC的区域不会与浮动元素重叠。
					独立布局：BFC内部的布局规则不影响外部元素，反之亦然。
				</a>
			</div>
			<div>相邻块级元素的上下边距折叠</div>
			<div
				className="bfc-container"
				style={{ overflow: "auto", backgroundColor: "red" }}
			>
				<div style={{ margin: "20px", backgroundColor: "green" }}>
					Box A（BFC 内部)
				</div>
			</div>
			<div style={{ margin: "30px", backgroundColor: "yellow" }}>
				Box B（外部）
			</div>
			<div>清除浮动（父元素高度塌陷)</div>
			<div
				className="parent"
				style={{
					display: "flow-root",
					// overflow: "auto", //  overflow: "hidden", // 都可以
					border: "2px solid #333",
				}}
			>
				<div
					className="child"
					style={{
						float: "left",
						width: "100px",
						height: "100px",
						background: "#ff6b6b",
						margin: "10px",
					}}
				>
					child a
				</div>
				<div
					className="child"
					style={{
						float: "left",
						width: "100px",
						height: "100px",
						background: "#ff6b6b",
						margin: "10px",
					}}
				>
					child b
				</div>
			</div>
			<div>阻止元素被浮动元素覆盖</div>
			<div
				className="float-left"
				style={{
					float: "left",
					width: "200px",
					height: "100px",
					background: "#4ecdc4",
				}}
			>
				浮动元素
			</div>
			<div
				className="normal-element"
				style={{
					overflow: "auto" /* 触发 BFC */,
					height: "120px",
					background: "#ffe66d",
				}}
			>
				普通元素（触发 BFC，不与浮动重叠）
			</div>
			<div> 自适应两栏布局</div>
			<div
				className="left"
				style={{
					float: "left",
					width: "200px",
					// height: "300px",
					background: "#4ecdc4",
				}}
			>
				左侧浮动
			</div>
			<div
				className="right"
				style={{
					overflow: "hidden" /* 触发 BFC */,
					//height: "300px",
					background: "#ff6b6b",
				}}
			>
				右侧自适应宽度（BFC 触发）
			</div>
			<div>阻止文本环绕浮动元素</div>
			<div
				className="float-img"
				style={{
					float: "left",
					width: "100px",
					height: "100px",
					marginRight: "10px",
					backgroundColor: "#4ecdc4",
				}}
			>
				float img
			</div>
			<div
				className="text-container"
				style={{
					display: "flow-root", //BFC
				}}
			>
				这是一段不会被浮动元素环绕的文本。BFC
				使得文本容器独立布局，避免环绕效果。
			</div>
		</>
	);
};

export default BFCLayout;
