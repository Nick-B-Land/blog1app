import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ClassCounter from "./components/classCounter";
import FCCounter from "./components/fcCounter";
import ClassApiRequest from "./components/classApiRequest";
import FCApiRequest from "./components/fcApiRequest";

function App() {
	return (
		<div className="container">
			<FCApiRequest />
		</div>
	);
}

export default App;

////https://reststop.randomhouse.com/resources/authors?lastName=Grisham
//https://reststop.randomhouse.com/resources/works/?start=0&max=3&expandLevel=1&search=Grisham
