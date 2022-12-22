import React from "react";
import "./App.css";
import DayWeather from "./Weather/DayWeather";
import Forecast from "./Weather/Forecast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<h1>How Feel You?</h1>
				<Routes>
					<Route path="/" element={<DayWeather />} />
					<Route path="/forecast" element={<Forecast />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
