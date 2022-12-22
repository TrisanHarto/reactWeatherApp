import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DayWeather() {
	const [data, setData] = useState({});
	const [location, setLocation] = useState("");
	const navigate = useNavigate();

	const navigateToForecast = () => {
		// 👇️ navigate to home
		navigate("/forecast");
	};

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=18b4965d98e86492de87fc8ab0ed7e3d`;

	const searchLocation = (event) => {
		if (event.key === "Enter") {
			axios.get(url).then((response) => {
				setData(response.data);
				console.log(response.data);
			});
			setLocation("");
		}
	};

	return (
		<div className="app">
			<div className="search">
				<input
					value={location}
					onChange={(event) => setLocation(event.target.value)}
					onKeyPress={searchLocation}
					placeholder="Current weather, it is"
					type="text"
				/>
			</div>
			<button onClick={navigateToForecast}>Forecast</button>
			<br></br>
			<div className="container1">
				<div className="top">
					<div className="location">
						<p>{data.name}</p>
					</div>
					<div className="temp">
						{data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
					</div>
				</div>

				{data.name !== undefined && (
					<div className="bottom">
						<div className="feels">
							{data.main ? (
								<p className="bold">{data.main.feels_like.toFixed()}°F</p>
							) : null}
							<p>Feels Like</p>
						</div>
						<div className="humidity">
							{data.main ? <p className="bold">{data.main.humidity}%</p> : null}
							<p>Humidity</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default DayWeather;
