import React, { useState } from "react";
import axios from "axios";

function Forecast() {
	const [data, setData] = useState({});
	const [location, setLocation] = useState("");

	const url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&cnt=7&&units=imperial&appid=18b4965d98e86492de87fc8ab0ed7e3d`;

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
					placeholder="6 days, it shall be"
					type="text"
				/>
			</div>
			<br></br>
			<div className="location"> </div>
			<div className="container">
				<div className="day">
					<div className="location">
						{data.city ? <h3>{data.city.name}</h3> : null}
					</div>
					<div className=".temp-high">
						{data.list ? <p>max {data.list[0].temp.max.toFixed()}°F</p> : null}
					</div>
					<div className=".temp-low">
						{data.list ? <p>min {data.list[0].temp.min.toFixed()}°F</p> : null}
					</div>
					<div className="description">
						{data.list ? <p>{data.list[0].weather[0].main}</p> : null}
					</div>
				</div>
				<div className="day">
					<div className="location">
						{data.city ? <h3>{data.city.name}</h3> : null}
					</div>
					<div className="temp">
						{data.list ? <p>{data.list[1].temp.max.toFixed()}°F</p> : null}
					</div>
					<div className="description">
						{data.list ? <p>{data.list[1].temp.min.toFixed()}°F</p> : null}
					</div>
					<div className="description">
						{data.list ? <p>{data.list[1].weather[0].description}</p> : null}
					</div>
				</div>
				<div className="day">
					<div className="location">
						{data.city ? <h3>{data.city.name}</h3> : null}
					</div>
					<div className="temp">
						{data.list ? <p>{data.list[2].temp.max.toFixed()}°F</p> : null}
					</div>
					<div className="description">
						{data.list ? <p>{data.list[2].temp.min.toFixed()}°F</p> : null}
					</div>
					<div className="description">
						{data.list ? <p>{data.list[2].weather[0].description}</p> : null}
					</div>
				</div>
				<div className="day">
					<div className="location">
						{data.city ? <h3>{data.city.name}</h3> : null}
					</div>
					<div className="temp">
						{data.list ? <p>{data.list[3].temp.max.toFixed()}°F</p> : null}
					</div>
					<div className="description">
						{data.list ? <p>{data.list[3].temp.min.toFixed()}°F</p> : null}
					</div>
					<div className="description">
						{data.list ? <p>{data.list[3].weather[0].description}</p> : null}
					</div>
				</div>
				<div className="day">
					<div className="location">
						{data.city ? <h3>{data.city.name}</h3> : null}
					</div>
					<div className="temp">
						{data.list ? <p>{data.list[4].temp.max.toFixed()}°F</p> : null}
					</div>
					<div className="description">
						{data.list ? <p>{data.list[4].temp.min.toFixed()}°F</p> : null}
					</div>
					<div className="description">
						{data.list ? <p>{data.list[4].weather[0].description}</p> : null}
					</div>
				</div>
				<div className="day">
					<div className="location">
						{data.city ? <h3>{data.city.name}</h3> : null}
					</div>
					<div className="temp">
						{data.list ? <p>{data.list[5].temp.max.toFixed()}°F</p> : null}
					</div>
					<div className="description">
						{data.list ? <p>{data.list[5].temp.min.toFixed()}°F</p> : null}
					</div>
					<div className="description">
						{data.list ? <p>{data.list[5].weather[0].description}</p> : null}
					</div>
				</div>
				<div className="day">
					<div className="location">
						{data.city ? <h3>{data.city.name}</h3> : null}
					</div>
					<div className="temp">
						{data.list ? <p>{data.list[6].temp.max.toFixed()}°F</p> : null}
					</div>
					<div className="description">
						{data.list ? <p>{data.list[6].temp.min.toFixed()}°F</p> : null}
					</div>
					<div className="description">
						{data.list ? <p>{data.list[6].weather[0].description}</p> : null}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Forecast;
