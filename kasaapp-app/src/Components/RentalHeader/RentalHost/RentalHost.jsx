import "./RentalHost.scss";
import { Component } from "react";

export default class RentalHost extends Component {
	render() {
		return (
			<div className="host">
				<p className="host__name">{this.props.host.name}</p>
				<img className="host__img" src={this.props.host.picture} alt=""></img>
			</div>
		);
	}
}