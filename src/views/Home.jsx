// libs
import React from 'react'

// components
import Footer from '../components/atoms/Footer'
import MainBanner from '../components/atoms/MainBanner'
import FeaturesShoes from './components/FeaturesShoes'
import ShoesListing from './components/ShoesListing'
import AboutUs from '../components/cells/AboutUs'

const Home = () => {
	return (
		<>
			<main id="main" className='p-3' style={{ backgroundColor: "#fff" }}>
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