import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from "./pages/About";
import Works from "./pages/Works"
import Techs from './pages/Techs';
import Experiences from './pages/Experiences';

const router = createBrowserRouter([
	{
		path: "/",
		element: <About />
	},
	{
		path: "/works",
		element: <Works />
	},
	{
		path: "/techs",
		element: <Techs />
	},
	{
		path: "/experiences",
		element: <Experiences />
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router}/>
		</>
	);
}

export default App;
