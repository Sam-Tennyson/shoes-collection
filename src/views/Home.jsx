// libs
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons'

// components
import Footer from '../components/atoms/Footer'
import MainBanner from '../components/atoms/MainBanner'
import FeaturesShoes from './components/FeaturesShoes'
import ShoesListing from './components/ShoesListing'
import AboutUs from '../components/cells/AboutUs'

import { THEME_COLOR, useTheme } from '../contexts/ThemeContext'

const Home = () => {
	const { theme, toggleTheme } = useTheme()
	console.log(theme);
	return (
		<>
			<main id="main" className={`p-3 ${theme === THEME_COLOR.LIGHT ? "light-class" : "dark-class"} `} >
				<div className='text-end'>
					{theme === THEME_COLOR.DARK ? (
						<i onClick={() => toggleTheme(THEME_COLOR.DARK)}>
						<FontAwesomeIcon icon={faToggleOn} size='2xl' />
					</i>
				) : (
					<i onClick={() => toggleTheme(THEME_COLOR.LIGHT)}>
						<FontAwesomeIcon icon={faToggleOff} size='2xl' />
					</i>
				)}
				</div>
				<MainBanner />
				<ShoesListing />
				<FeaturesShoes />
				<AboutUs />
				<Footer />
			</main>
		</>
	)
}

export default Home