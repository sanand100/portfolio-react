import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import AboutMe from './Components/AboutMe';
import ContactMe from './Components/ContactMe';
import Projects from './Components/Projects';
import Homepage from './Components/Homepage';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

function App() {
	const [expanded, setExpanded] = useState(false);
	return (
		<>
			<header>
				<nav>
					<Navigation expanded={expanded} setExpanded={setExpanded} />
				</nav>
			</header>
			<main>
				{/* <h1>Shraddha Anand</h1> */}
				<Routes>
					<Route path='/home' element={<Homepage />} />
					<Route path='/AboutMe' element={<AboutMe />} />
					{/* <Route path='/ContactMe' element={<ContactMe />} /> */}
					<Route path='/Projects' element={<Projects />} />
					<Route path='*' element={<Navigate to='/home' />} />
				</Routes>
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default App;
