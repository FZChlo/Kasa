// Ajout des imports
import React, { Component } from "react";
import { ReactComponent as FooterLogo } from "./FooterLogo.svg";
import "./Footer.scss";

// Creation de l'export class " Footer"
export default class Footer extends Component {
	render() {
// Et on retourne le HTML avec le logo et le copyright
		return (
			<footer className="footer">
				<FooterLogo className="footer__logo"></FooterLogo>
				<span className="footer__desc">© Kasa. All rights reserved</span>
			</footer>
		);
	}
}