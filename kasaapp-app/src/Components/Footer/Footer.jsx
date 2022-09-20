import React, { Component } from "react";
import { ReactComponent as FooterLogo } from "./FooterLogo.svg";
import "./Footer.scss";

export default class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<FooterLogo className="footer__logo"></FooterLogo>
				<span className="footer__desc">© Kasa. All rights reserved</span>
			</footer>
		);
	}
}