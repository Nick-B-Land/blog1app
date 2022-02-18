import React, { Component } from "react";

class ClassCounter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
		};
	}

	handleIncrement = () => {
		this.setState({ counter: this.state.counter + 1 });
	};

	handleDecrement = () => {
		this.setState({ counter: this.state.counter - 1 });
	};

	render() {
		return (
			<>
				<div className="row mt-5">
					<div className="col text-center">
						<h1>I'm a class based counter!</h1>
					</div>
				</div>
				<div className="row">
					<div className="col text-center">
						<h3>Counter Value: {this.state.counter}</h3>
					</div>
				</div>
				<div className="row mt-3">
					<div className="col d-flex justify-content-center">
						<button
							className="btn btn-lg btn-dark mx-2"
							onClick={this.handleIncrement}
						>
							+
						</button>
						<button
							className="btn btn-lg btn-dark mx-2"
							onClick={this.handleDecrement}
						>
							-
						</button>
					</div>
				</div>
			</>
		);
	}
}

export default ClassCounter;
