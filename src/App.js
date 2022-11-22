import React from "react";
import "./App.css";
import DayWeather from "./Weather/DayWeather";
import Forecast from "./Weather/Forecast";
import Weather from "./Weather/Weather";

function App() {
	return (
		<div className="App">
			<h1>How Feel You?</h1>
			<DayWeather />

			<Forecast />
		</div>
	);
}

export default App;
