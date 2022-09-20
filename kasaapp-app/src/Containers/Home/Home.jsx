import "./Home.scss";
import { Component } from "react";
import getData from "../../Utils/getData";
import Herobanner from "../../Components/Herobanner/Herobanner";
import RentalCard from "../../Components/RentalCard/RentalCard";

export default class Home extends Component {
	state = {
		rentalList: [],
	};

	componentDidMount() {
		this.setState({ rentalList: [...getData()] });
	}

	render() {
		return (
			<main className="homepage">
				<Herobanner origin="homepage"></Herobanner>
				<section className="rental__section">
					{this.state.rentalList.map((item, index) => {
						return (
							<RentalCard title={item.title} cover={item.cover} key={index} id={item.id}></RentalCard>
						);
					})}
				</section>
			</main>
		);
	}
}