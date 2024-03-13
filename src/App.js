import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import Home from './pages/Home';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Layout from './components/Layout';
import AuthLayout from './components/AuthLayout';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context';

export default function App() {
	return (
		<AuthContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="product" element={<Product />} />
						<Route
							path="product/:productName"
							element={<ProductDetail />}
						/>
						<Route element={<AuthLayout />}>
							<Route path="login" element={<Login />} />
							<Route path="register" element={<Register />} />
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</AuthContextProvider>
	);
}
