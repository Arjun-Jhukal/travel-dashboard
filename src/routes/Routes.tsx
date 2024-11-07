import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import AllTours from "../pages/Tours/All-Tours";
import AddTour from "../pages/Tours/Add-Tour";

function RouteHandler() {
	return (
		<Routes>
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/" element={<Navigate to={"/dashboard"} />} />
			{/* <Route path="/tour"> */}
			<Route path="/tour/all-tours" element={<AllTours />} />
			<Route path="/tour/add-tour" element={<AddTour />} />
			{/* </Route> */}
		</Routes>
	);
}

export default RouteHandler;
