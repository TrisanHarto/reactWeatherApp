import React from "react";

function Daily(dateNum) {
	dateNum = new Date((dateNum = 1000));
	dateNum.getDay();
	let options = { weekday: "short" };
	dateNum = Intl.DateTimeFormat("en-US", options).format(dateNum);

	return (
		<div className="container">
			<div className="day">
				<h2>{dateNum}</h2>
			</div>
		</div>
	);
}

export default Daily;
