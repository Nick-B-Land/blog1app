import React, { useState } from "react";

const FCCounter = () => {
	const [counter, setCounter] = useState(0);

	return (
		<>
			<div className="row mt-5">
				<div className="col text-center">
					<h1>I'm a functional component!</h1>
				</div>
			</div>
			<div className="row">
				<div className="col text-center">
					<h3>Counter Value: {counter}</h3>
				</div>
			</div>
			<div className="row mt-3">
				<div className="col d-flex justify-content-center">
					<button
						className="btn btn-lg btn-dark mx-2"
						onClick={() => setCounter(counter + 1)}
					>
						+
					</button>
					<button
						className="btn btn-lg btn-dark mx-2"
						onClick={() => setCounter(counter - 1)}
					>
						-
					</button>
				</div>
			</div>
		</>
	);
};

export default FCCounter;
