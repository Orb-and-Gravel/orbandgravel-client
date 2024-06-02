import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { Category } from './pages/Category';
import Footer from './components/Footer/Footer';
import { HeaderWhole } from './components/Header/HeaderWhole';
import { Outlet } from 'react-router-dom';
import { Error } from './pages/Error';
import { SingleProductPage } from './pages/SingleProductPage';
import { Wishlist } from './pages/Wishlist';
import { Checkout } from './pages/Checkout';
import { Account } from './pages/Account';
import { OrderHistory } from './pages/OrderHistory';
import { Order } from './pages/Order';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';

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
						<Route path='/product/:slug' element={<SingleProductPage />} />
						<Route path='/order/:slug' element={<Order />} />
						<Route path='/wishlist' element={<Wishlist />} />
						<Route path='/checkout' element={<Checkout />} />
						<Route path='/account' element={<Account />} />
						<Route path='/orderhistory' element={<OrderHistory />} />
					</Route>
					<Route path='/sign-in' element={<SignIn />} />
					<Route path='/sign-up' element={<SignUp />} />
					<Route path='/error' element={<Error />} />
					<Route path='/*' element={<Error />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
