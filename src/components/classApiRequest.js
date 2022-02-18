import React, { Component } from "react";
import axios from "axios";
import ClassBookContainer from "./classBookContainer";

class ClassApiRequest extends Component {
	constructor(props) {
		super(props);
		this.state = { authorWorks: [], dataLoaded: false };
	}

	componentDidMount = () => {
		axios
			.get(
				"https://reststop.randomhouse.com/resources/works/?start=0&max=10&expandLevel=1&search=Grisham"
			)
			.then((e) => {
				this.setState({ authorWorks: e.data.work, dataLoaded: true });
			});
	};

	render() {
		return (
			<>
				<div className="row text-center">
					<div className="col">
						<h1>Class based API request!</h1>
					</div>
				</div>
				<div className="row text-center">
					<div className="col">
						<h1>A list of 10 John Grisham books</h1>
					</div>
				</div>
				<div className="row">
					<div className="col">
						{this.state.dataLoaded
							? this.state.authorWorks.map((e) => (
									<ClassBookContainer
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
	}
}

export default ClassApiRequest;
