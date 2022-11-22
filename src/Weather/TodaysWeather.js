import React from "react";

function TodaysWeather({ dateNum, dayIcon, tempHigh, tempLow }) {
	dateNum = new Date((dateNum = 1000));
	dateNum.getDay();
	let options = { weekday: "short" };
	dateNum = Intl.DateTimeFormat("en-US", options).format(dateNum);

	return (
		<div>
			<div>
				<h2>{dateNum}</h2>
				<img src={dayIcon} />
				<h2>{dateNum}</h2>
				<h2>{tempHigh.toString().slice(0, 2)} F</h2>
				<h2>{tempLow.toString().slice(0, 2)} F</h2>
			</div>
		</div>
	);
}

export default TodaysWeather;
