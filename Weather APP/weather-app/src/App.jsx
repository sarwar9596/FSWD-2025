import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Suspense, lazy } from 'react';
import './App.css';
import Forecast from './components/Forecast';
import NavLinks from './components/Navlinks';
import Dashboard from './components/WeatherDashboard';
import Input from './components/Input';
import HeadBodyGrid from './components/HomepageSkeleton';
const LazyDashboard = React.lazy(() => {
	return import('./components/WeatherDashboard');
});

//Current:		'http://api.weatherapi.com/v1/current.json?key=ae145746676e410590d163823253012&q=Mumbai'
//Forecast:   'http://api.weatherapi.com/v1/forecast.json?key=ae145746676e410590d163823253012&q=Mumbai'

function App() {
	const [weather, setWeather] = useState(null);
	const [inputValue, setInputValue] = useState('mumbai');
	const LazyDashboard = React.lazy(() => {
		return import('./components/WeatherDashboard');
	});
	useEffect(() => {
		async function fetchData() {
			try {
				const res = await fetch(
					`https://api.weatherapi.com/v1/current.json?key=e1bd40b6ba294cc1b3e72354260101&q=${inputValue}`
				);
				console.log(res.status);
				const data = await res.json();
				console.log(data);
				// console.log(data.current.humidity);
				// console.log(data.location.name);
				// const cityName = data.location.name;
				setWeather(data);
			} catch (error) {
				console.error('Error in fetching', error);
			}
		}
		fetchData();
	}, [inputValue]);
	return (
		<>
			<div className=" bgImage flex flex-col gap-5 min-h-screen bg-[url('https://plus.unsplash.com/premium_photo-1733306531071-087c077e1502?q=80&w=1740&auto=format&fit=crop')] bg-cover bg-center  items-center justify-around">
				<Input
					inputValue={inputValue}
					setInputValue={setInputValue}
				/>
				<NavLinks />
				<Routes>
					<Route
						path='/'
						element={
							<React.Suspense fallback={<HeadBodyGrid />}>
								<LazyDashboard weather={weather} />
							</React.Suspense>
						}></Route>
					<Route path='forecast' element={<Forecast />}></Route>
				</Routes>
			</div>
		</>
	);
}

export default App;
