// Ajout des imports
import { Routes, Route } from "react-router-dom";
import About from "./Containers/About/About";
import Error from "./Containers/Errors/Errors";
import Home from "./Containers/Home/Home";
import Rental from "./Containers/Rental/Rental";

// Création de la constent Router, qui renvoi vers les differentes routes  -> Error, About, Rental, Home
const Router = () => {
	return (
		<Routes>
			<Route path="*" element={<Error />}></Route>
			<Route path="/about" element={<About />}></Route>
			<Route path="/rental/:id" element={<Rental />}></Route>
			<Route path="/" element={<Home />}></Route>
		</Routes>
	);
};

// Création de l'export Router
export default Router