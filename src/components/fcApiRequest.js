import React, { useState, useEffect } from "react";
import FCBookContainer from "./fcBookContainer";
import axios from "axios";

const FCApiRequest = () => {
	const [authorWorks, setAuthorWorks] = useState([]);
	const [dataLoaded, setDataLoaded] = useState(false);

	useEffect(() => {
		axios
			.get(
				"https://reststop.randomhouse.com/resources/works/?start=0&max=10&expandLevel=1&search=Grisham"
			)
			.then((e) => {
				setAuthorWorks(e.data.work);
				setDataLoaded(true);
			});
	});

	return (
		<>
			<div className="row text-center">
				<div className="col">
					<h1>Functional Component based API request!</h1>
				</div>
			</div>
			<div className="row text-center">
				<div className="col">
					<h1>A list of 10 John Grisham books</h1>
				</div>
			</div>
			<div className="row">
				<div className="col">
					{dataLoaded
						? authorWorks.map((e) => (
								<FCBookContainer
									key={e.workid}
									titleAuth={e.titleAuth}
									saleDate={e.onsaledate}
								/>
						  ))
						: "Loading Data"}
				</div>
			</div>
		</>
	);
};

export default FCApiRequest;
