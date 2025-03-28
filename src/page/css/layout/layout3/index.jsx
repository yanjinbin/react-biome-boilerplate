const CenterLayout = () => {
	return (
		<>
			<div>
				<a href={"  https://sweet-kk.github.io/css-layout/#/"}>css常用布局</a>
			</div>
			<div>"水平居中"</div>
			<div
				style={{
					textAlign: "center",
				}}
			>
				center text
			</div>

			<div
				style={{
					width: "200px",
					boxSizing: "border-box",
				}}
			>
				<div style={{ width: "80px", margin: "0 auto" }}>son text</div>
			</div>

			<div
				id="parent"
				style={{
					textAlign: "center",
					border: " 1px solid #000",
				}}
			>
				<div className="son" style={{ display: "inline-block" }}>
					我是测试段落
				</div>
				<div className="son" style={{ display: "inline-block" }}>
					我是测试段落
				</div>
				<div className="son" style={{ display: "inline-block" }}>
					我是测试段落
				</div>
				<div>
					<a
						href={
							"https://sweet-kk.github.io/css-layout/#/?id=_4%e4%bd%bf%e7%94%a8position%e5%ae%9e%e7%8e%b0%e2%96%b2"
						}
					>
						麻烦 但是看一看 更能理解css 各种属性如何协作
					</a>
				</div>
			</div>

			<div id="parent" style={{ display: "flex", justifyContent: "center" }}>
				<div className="son">我是测试段落</div>
				<div className="son">我是测试段落</div>
				<div className="son">我是测试段落</div>
				<div className="son">我是测试段落</div>
				<div className="son">我是测试段落</div>
			</div>

			<div>"垂直居中"</div>

			<div
				id="parent"
				style={{
					height: "150px",
					lineHeight: "150px" /*与height等值*/,
				}}
			>
				<div className="son">我是测试段落</div>
			</div>

			<div
				id="parent"
				style={{
					height: "150px",
					lineHeight: "30px",
				}}
			>
				<span style={{ display: "block" }}>第一行文本</span>
				<span style={{ display: "block" }}>第二行文本</span>
				<span style={{ display: "block" }}>第三行文本</span>
				<span style={{ display: "block" }}>
					为什么 span 必须加 display: block？ 默认情况下，span 是行
				</span>
				<span style={{ display: "block" }}>第五行文本</span>
			</div>
			<div>
				<a
					href={
						"https://sweet-kk.github.io/css-layout/#/?id=_3%e5%9b%be%e7%89%87%e2%96%b2"
					}
				>
					图片居中 觉得不够优雅 不想用!
				</a>
			</div>

			<div>
				<a
					href={
						"https://sweet-kk.github.io/css-layout/#/?id=_3-%e4%bd%bf%e7%94%a8flex%e5%ae%9e%e7%8e%b0"
					}
				>
					使用flex实现 垂直居中
				</a>
			</div>

			<div
				id="parent"
				style={{
					height: "200px",
					width: "300px",
					display: "flex",
					alignItems: "center",
				}}
			>
				<div id="son">flex垂直居中</div>
			</div>

			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<div>son</div>
			</div>
			<div>两列布局</div>
			<div
				id="parent"
				style={{
					display: "flex",
					width: "100%",
					height: "500px",
				}}
			>
				<div id="left" style={{ width: "100px", backgroundColor: "#fee" }}>
					左列定宽
				</div>
				<div id="right" style={{ flex: "1", backgroundColor: "#00f" }}>
					右列自适应
				</div>
			</div>

			<div
				id="parent"
				style={{
					display: "grid",
					width: "100%",
					height: "500px",
					gridTemplateColumns: "100px auto", ///*设定2列就ok了,auto换成1fr也行*/
				}}
			>
				<div
					id="left"
					style={{
						backgroundColor: "#f00",
					}}
				>
					左列定宽
				</div>
				<div
					id="right"
					style={{
						backgroundColor: "#Ef0",
					}}
				>
					右列自适应
				</div>
			</div>

			<div id="parent" style={{ height: "500px", display: "flex" }}>
				<div id="left" style={{ width: "100px", backgroundColor: "#0ff" }}>
					左列定宽
				</div>
				<div id="center" style={{ flex: 1, backgroundColor: "#eeff2b" }}>
					中间自适应
				</div>
				<div id="right" style={{ width: "100px", backgroundColor: "#eff" }}>
					右列定宽
				</div>
			</div>

			<div
				id="parent"
				style={{
					height: "500px",
					display: "grid",
					gridTemplateColumns: "100px auto 200px" /* 设定3列 */,
					gridTemplateRows: "60px auto 60px" /* 设定3行 */,
					gridTemplateAreas:
						'"header header header" "leftside main rightside" "footer footer footer"',
				}}
			>
				<div
					id="header"
					style={{
						gridArea: "header",
						backgroundColor: "#ccc",
					}}
				>
					header区域
				</div>

				{/* #center 需要放在前面 */}
				<div
					id="center"
					style={{
						gridArea: "main",
						margin: "0 15px" /* 设置间隔 */,
						border: "1px solid #000",
						backgroundColor: "#eeff2b",
					}}
				>
					中间自适应
					<hr />
				</div>
				<div
					id="left"
					style={{
						gridArea: "leftside",
						backgroundColor: "#f00",
						opacity: 0.5,
					}}
				>
					左列定宽
				</div>
				<div
					id="right"
					style={{
						gridArea: "rightside",
						backgroundColor: "#0f0",
						opacity: 0.5,
					}}
				>
					右列定宽
				</div>
				<div
					id="footer"
					style={{
						gridArea: "footer",
						backgroundColor: "#ccc",
					}}
				>
					footer区域
				</div>
			</div>

			<div style={{ height: "500px", display: "flex" }}>
				{Array.from({ length: 6 }, (_, index) => (
					<div
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={index}
						className="column"
						style={{
							flex: 1,
							backgroundColor: index % 2 === 0 ? "#f00" : "#0f0", // 奇偶列背景色
						}}
					>
						{index + 1} <p>我是文字我是文字我输文字我是文字我是文字</p>
					</div>
				))}
			</div>

			<div
				style={{
					height: "500px",
					display: "grid",
					gridTemplateColumns: "repeat(6, 1fr)",
				}}
			>
				{Array.from({ length: 6 }, (_, index) => (
					<div
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={index}
						className="column"
						style={{
							flex: 1,
							backgroundColor: index % 2 === 0 ? "#f00" : "#0f0", // 奇偶列背景色
						}}
					>
						{index + 1} <p>我是文字我是文字我输文字我是文字我是文字</p>
					</div>
				))}
			</div>

			<div
				id="parent"
				style={{
					width: "1200px",
					height: "500px",
					margin: "0 auto",
					display: "grid",
					gridTemplateColumns: "repeat(3, 1fr)", // 3列，每列宽度平分
					gridTemplateRows: "repeat(3, 1fr)", // 3行，每行高度平分
				}}
			>
				{Array.from({ length: 9 }, (_, index) => (
					<div
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={index}
						className="item"
						style={{
							border: "1px solid #000", // 边框样式
						}}
					>
						{index + 1}
					</div>
				))}
			</div>

			<div
				id="parent"
				style={{
					height: "100%",
					display: "flex",
					flexDirection: "column",
				}}
			>
				<div
					id="top"
					style={{
						height: "100px",
					}}
				>
					top
				</div>

				<div
					id="middle"
					style={{
						flex: 1,
						display: "flex",
					}}
				>
					<div
						id="left"
						style={{
							width: "200px",
						}}
					>
						left
					</div>

					<div
						id="right"
						style={{
							flex: 1,
							overflow: "auto",
						}}
					>
						right
					</div>
				</div>

				<div
					id="bottom"
					style={{
						height: "50px",
					}}
				>
					bottom
				</div>
			</div>

			<div
				style={{
					width: "100%",
					height: "100%",
					display: "grid",
					gridTemplateColumns: "200px 1fr",
					gridTemplateRows: "100px auto 50px",
					gridTemplateAreas: '"header header" "aside main" "footer footer"',
				}}
			>
				<div style={{ border: "1px solid #000", gridArea: "header" }}>top</div>
				<div style={{ border: "1px solid #000", gridArea: "aside" }}>left</div>
				<div style={{ border: "1px solid #000", gridArea: "main" }}>right</div>
				<div style={{ border: "1px solid #000", gridArea: "footer" }}>
					bottom
				</div>
			</div>
		</>
	);
};

export default CenterLayout;
