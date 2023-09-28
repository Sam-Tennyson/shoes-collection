import React from 'react'
import { FEATURE_DATA } from '../../data/featureData'
import CommonFeatureCard from '../../components/atoms/CommonFeatureCard'
import { CONSTANTS } from '../../shared/Constants'

const ENUM = {
    image_url: "https://shoestreet.pk/cdn/shop/collections/Sale_Banner_09e237eb-411e-4ce7-a8a1-d0635ef81242_1200x1200.jpg?v=1690200785",
    TRENDING_TEXT: "Trending from mens and womens style collection"
}

const FeaturesShoes = () => {
    return (
        <>
            <div className="w-100  rounded shadoww">
                <img src={ENUM.image_url} className="img-fluid rounded w-100" />
            </div>
            <div>
                <h2 className="text-center pt-5 font-weight-800">{CONSTANTS.FEATURED.toUpperCase()}</h2>
                <p className="text-center pb-5">{ENUM.TRENDING_TEXT}</p>
            </div>
            <div className="d-flex flex-wrap justify-content-center gap-5 pb-5">
                {FEATURE_DATA.map((item) => (
                    <CommonFeatureCard
                        key={item?._id}
                        data={item}
                    />
                ))}
            </div>
        </>
    )
}

export default FeaturesShoes