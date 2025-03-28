// import "./index.css";
import { FlexLayout, GridLayout } from "@/page/css/layout/index.jsx";
import CenterLayout from "@/page/css/layout/layout3/index.jsx";
import React from "react";

const CSS3 = () => {
	return (
		<>
			<FlexLayout />
			<div>"下面是grid"</div>
			<GridLayout />
			<div>布局实现</div>
			<CenterLayout />
		</>
	);
};

export default CSS3;
