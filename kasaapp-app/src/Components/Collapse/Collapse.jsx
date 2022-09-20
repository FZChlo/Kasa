import { Component } from "react";
import Chevron from "./chevron.svg";
import "./Collapse.scss";

export default class Collapse extends Component {
	constructor(props) {
		super(props);
		this.state = { isOpenned: false };
	}

	toggleCollapse() {
		this.setState({
			isOpenned: !this.state.isOpenned,
		});
	}

	collapseContent() {
		const content = this.props.content;

		if (typeof content === "string") {
			return <p>{content}</p>;
		} else {
			return (
				<ul>
					{content.map((item) => (
						<li className="collapse__list" key={item}>
							{item}
						</li>
					))}
				</ul>
			);
		}
	}

	render() {
		return (
			<div className="collapse">
				<div
					className="collapse__visible"
					onClick={() => {
						this.toggleCollapse();
					}}
				>
					<h2 className="collapse__visible__title">{this.props.title}</h2>
					<img
						src={Chevron}
						alt="chevron down"
						className={
							this.state.isOpenned ? "collapse__visible__chevron rotate" : "collapse__visible__chevron"
						}
					></img>
				</div>

				<div
					className={this.state.isOpenned ? "collapse__toggle animated" : "collapse__toggle"}
					style={{ height: this.state.isOpenned ? `auto` : "0px" }}
				>
					<div className="collapse__toggle__content">{this.collapseContent()}</div>
				</div>
			</div>
		);
	}
}