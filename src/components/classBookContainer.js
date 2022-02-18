import React, { Component } from "react";

class ClassBookContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isExpanded: false,
		};
	}

	handleClick = () => {
		this.setState({ isExpanded: !this.state.isExpanded });
	};

	render() {
		return (
			<div className="card my-3 " onClick={this.handleClick}>
				<h5 className="card-title text-center mousePointer">
					{this.props.titleAuth}
				</h5>
				{this.state.isExpanded ? (
					<div className="card-body">
						<p className="card-text">
							Date Released:{" "}
							{new Date(this.props.saleDate).toLocaleDateString()}{" "}
						</p>
					</div>
				) : null}
			</div>
		);
	}
}

export default ClassBookContainer;
