import React, { useState } from "react";

const FCBookContainer = (props) => {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div className="card my-3 " onClick={() => setIsExpanded(!isExpanded)}>
			<h5 className="card-title text-center mousePointer">{props.titleAuth}</h5>
			{isExpanded ? (
				<div className="card-body">
					<p className="card-text">
						Date Released: {new Date(props.saleDate).toLocaleDateString()}{" "}
					</p>
				</div>
			) : null}
		</div>
	);
};

export default FCBookContainer;
