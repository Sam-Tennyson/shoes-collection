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
import ToggleTheme from '../components/atoms/ToggleTheme'

const Home = () => {
	const { theme } = useTheme()
	return (
		<>
			<main id="main" className={`p-3 ${theme === THEME_COLOR.LIGHT ? "light-class" : "dark-class"} `} >
				<ToggleTheme />
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