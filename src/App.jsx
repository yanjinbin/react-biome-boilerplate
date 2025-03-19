import { useEffect, useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";
import BaseRouter from "@/router/index.jsx";
import { BrowserRouter, Link, useLocation } from "react-router-dom";

function App() {
	// const [count, setCount] = useState(0);

	const location = useLocation();

	useEffect(() => {
		console.log("Current route:", location.pathname);
	}, [location]);

	return (
		<>
			<BaseRouter />
		</>
	);
}

export default App;
