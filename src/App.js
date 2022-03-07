import MoviesList from "./views/MoviesList";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from "./views/Blog";

function App() {

  return (
    <Router>
			<Routes>
				<Route path="/" element={<MoviesList/>}/>
				<Route path="/blog" element={<Blog />}/>
			</Routes>
			{/* Switch fue reemplazado por Routes */}
		</Router>
  );

}

export default App;
