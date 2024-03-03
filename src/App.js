import './App.css';
import Heading from './components/Heading/Heading';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

import { useState, createContext } from 'react';

import { data } from './data.js'

export const ThemeContext = createContext();

export default function App() {

	const [theme, setTheme] = useState('dark')

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

	const [datas, setDatas] = useState([...data])

	return (
		<ThemeContext.Provider value={{ theme, setTheme, toggleTheme, datas, setDatas }}>

			<Heading />

			<Content />

			<Footer />
		</ThemeContext.Provider>
	);
}