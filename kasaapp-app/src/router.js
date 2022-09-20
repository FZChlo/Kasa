import { Routes, Route } from "react-router-dom";
import About from "./Containers/About/About";
import Error from "./Containers/Errors/Errors";
import Home from "./Containers/Home/Home";
import Rental from "./Containers/Rental/Rental";

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

export default Router