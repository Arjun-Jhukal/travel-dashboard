import { BrowserRouter } from "react-router-dom";
import RouteHandler from "./routes/Routes";
import RootLayout from "./pages/Layout";

function App() {
	return (
		<BrowserRouter>
			<RootLayout>
				<RouteHandler />
			</RootLayout>
		</BrowserRouter>
	);
}

export default App;
