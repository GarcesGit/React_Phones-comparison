import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Catalog from './pages/catalog/Catalog';
import Comparison from './pages/comparison/Comparison';
import Account from './pages/account/Account';

function App() {

	return (
		<BrowserRouter>
				<Navbar />
				<main>
					<Routes>
						<Route path='*' element={<Navigate to='/comparison' />} />
						<Route path='/catalog' element={<Catalog />} />
						<Route path='/comparison' element={<Comparison />} />
						<Route path='/account' element={<Account />} />
					</Routes>
				</main>
		</BrowserRouter>
	);
}

export default App;