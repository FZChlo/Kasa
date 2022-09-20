import "./About.scss";
import { Component } from "react";
import Collapse from "../../Components/Collapse/Collapse";
import guidelines from "../../Data/guidelines.json";
import Herobanner from "../../Components/Herobanner/Herobanner";
export default class About extends Component {
	render() {
		return (
			<div className="about">
				<Herobanner origin="about"></Herobanner>
				<section className="about__guidelines">
					{guidelines.map((guideline) => {
						return (
							<Collapse title={guideline.title} key={guideline.id} content={guideline.description} />
						);
					})}
				</section>
			</div>
		);
	}
}