import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { Category } from './pages/Category';
import Footer from './components/Footer/Footer';
import { HeaderWhole } from './components/Header/HeaderWhole';
import { Outlet } from 'react-router-dom';
import { Error } from './pages/Error';

function PageLayout() {
	return (
		<>
			<HeaderWhole />
			<Outlet />
			<Footer />
		</>
	);
}

function App() {
	return (
		<div className='font-nunito'>
			<BrowserRouter>
				<Routes>
					<Route element={<PageLayout />}>
						<Route path='/' element={<LandingPage />} />
						<Route path='/category/:slug' element={<Category />} />
					</Route>
					<Route path='/error' element={<Error />} />
					<Route path='/*' element={<Error />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
