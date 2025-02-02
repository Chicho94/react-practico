import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecovryPassword from '../containers/RecovryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.css';

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="/login" element={<Login />}/>
					<Route path="/recovery-password" element={<RecovryPassword />}/>
					<Route path="/send-email" element={<SendEmail />}/>
					<Route path="/new-password" element={<NewPassword />}/>
					<Route path="/account" element={<MyAccount />}/>
					<Route path="/signup" element={<CreateAccount />}/>
					<Route path="/checkout" element={<Checkout />}/>
					<Route path="/orders" element={<Ordes />}/>
					<Route path='*' element={<NotFound />}/>
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
