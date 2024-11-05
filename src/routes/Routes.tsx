import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

function RouteHandler() {
	return (
		<Routes>
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/" element={<Navigate to={"/dashboard"} />} />
		</Routes>
	);
}

export default RouteHandler;
