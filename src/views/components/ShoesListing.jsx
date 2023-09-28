// libs
import React from 'react'

// components
import CommonShoeCard from '../../components/atoms/CommonShoeCard'

// constants
import { SHOE_DATA } from '../../data/shoeData'
import { CONSTANTS } from '../../shared/Constants'

const ENUM = {
    TRENDING: "Trending from new and modern mens style collection"
}

const ShoesListing = () => {
    return (
        <>
            <div>
                <h1 className="text-center pt-5 fw-bolder">{CONSTANTS.NEW_ARRIVALS}</h1>
                <p className="text-center pb-5">{ENUM.TRENDING}</p>
                <div className="d-flex flex-wrap justify-content-around gap-5 pb-5">
                    {SHOE_DATA.map((item) => (
                        <CommonShoeCard
                            key={item?._id}
                            data={item}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ShoesListing