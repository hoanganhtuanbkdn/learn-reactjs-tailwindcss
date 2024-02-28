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
import Admin from './pages/Admin';
import Posts from './pages/Posts';
import PostCreate from './pages/PostCreate';
import PostEdit from './pages/PostEdit';
import { Provider } from 'react-redux';
import { store, persistor } from './stores/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route index element={<Home />} />
							<Route path="contact" element={<Contact />} />
							<Route path="product" element={<Product />} />
							<Route
								path="product/:productName"
								element={<ProductDetail />}
							/>
							<Route path="about-us" element={<AboutUs />} />
							<Route path="admin" element={<Admin />}>
								<Route path="posts" element={<Posts />} />
								<Route
									path="posts/create"
									element={<PostCreate />}
								/>
								<Route
									path="posts/edit/:postId"
									element={<PostEdit />}
								/>
							</Route>

							<Route element={<AuthLayout />}>
								<Route path="login" element={<Login />} />
								<Route path="register" element={<Register />} />
							</Route>
						</Route>
					</Routes>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	);
}
