import "./App.css";
import "./Containers/Home/Home.scss";
import { Component } from "react";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Router from "./router.js";

export default class App extends Component {
	render() {
		return (
			<>
				<Navbar className="homepage"></Navbar>
				<Router></Router>
				<Footer className="footer" />
			</>
		);
	}
}
