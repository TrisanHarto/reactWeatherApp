import React, { useState, useEffect } from "react";

import DailyWeather from "./DailyWeather";

function Weather() {
	const [weatherData, setWeatherData] = useState();
	const lon = -95.358421;
	const lat = 29.749907;
	const APIKey = "bdde33e7eda3685b7fe1fc94736d6b66";

	useEffect(() => {
		const API = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${APIKey}`;
		fetch(API)
			.then((res) => res.json())
			.then((data) => {
				setWeatherData(data);
			})
			.catch((err) => console.log(err));
	}, []);

	if (weatherData) console.log(weatherData);
	return (
		<div className="container">
			{weatherData ? (
				weatherData.daily.slice(0, 6).map((day, i) => {
					return (
						<DailyWeather
							key={i}
							dateNum={day.dt}
							dayIcon={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
							tempHigh={day.temp.max}
							tempLow={day.temp.min}
						/>
					);
				})
			) : (
				<h2>May the weather be with you...</h2>
			)}
		</div>
	);
}

export default Weather;
