//Ajout des import

import "./Carrousel.scss";
import { Component } from "react";
import { ReactComponent as ChevronLeft } from "./chevron-left.svg";
import { ReactComponent as ChevronRight } from "./chevron-right.svg";

// Export class "Carrousel"
export default class Carrousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentSlide: 0,
		};
	}

	componentDidMount() {
		setInterval(() => {
			if (this.state.paused === false) {
				let newSlide =
					this.state.currentSlide === this.props.pictures.length - 1 ? 0 : this.state.currentSlide + 1;
				this.setState({ currentSlide: newSlide });
			}
		}, 4000);
	}
// Configuration du slide suivant
	nextSlide() {
		let newSlide =
			this.state.currentSlide === this.props.pictures.length - 1 ? 0 : this.state.currentSlide + 1;
		this.setState({ currentSlide: newSlide });
	}
// Configuration du slide précédent 
	prevSlide() {
		let newSlide =
			this.state.currentSlide === 0 ? this.props.pictures.length - 1 : this.state.currentSlide - 1;
		this.setState({ currentSlide: newSlide });
	}
// Definition de l'êtat (state) du slide actuel
	setCurrentSlide = (index) => {
		this.setState({ currentSlide: index });
	};

// Et on retourne le HTML du carrousel ( création des chevrons précédent/suivant, ajout de l'image et des légendes)
	render() {
		return (
			<div className="container">
				<div className="carrousel">
					<div className="carrousel__navigation">
						<ChevronLeft
							className="chevron"
							onClick={() => {
								this.prevSlide();
							}}
						/>

						<ChevronRight
							className="chevron"
							onClick={() => {
								this.nextSlide();
							}}
						/>
					</div>

					{this.props.pictures.map((picture, index) => {
						return (
							<img
								alt=""
								src={picture}
								key={index}
								className={index === this.state.currentSlide ? "carrousel__img" : "hide-img"}
							></img>
						);
					})}

					<span className="carrousel__legend">
						{this.state.currentSlide + 1}/{this.props.pictures.length}
					</span>
				</div>
			</div>
		);
	}
}