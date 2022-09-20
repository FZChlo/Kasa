import "./Herobanner.scss";
import { Component } from "react";

export default class Herobanner extends Component {
	render() {
		if (this.props.origin === "homepage") {
			return (
				<div className="herobanner">
					<h1 className="herobanner__title">Chez vous, partout et ailleurs</h1>
				</div>
			);
		} else if (this.props.origin === "about") {
			return <div className="herobanner__about"></div>;
		}
	}
}