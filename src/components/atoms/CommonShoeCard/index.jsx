// libs
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

// constants
import { CONSTANTS } from '../../../shared/Constants'

// styles
import "./style.css"

const CommonShoeCard = (props) => {
    const {data} = props
    return (
        <>
            <div className="card my-card rounded shadoww shoe-cart">
                <img src={data?.image_url} className="card-img-top mx-auto" />
                <div className="card-body">
                    <h5 className="fw-bolder">{data?.heading}</h5>
                    <p className="card-text text-start">{data?.desc}.</p>
                     <FontAwesomeIcon icon={faStar} color='#dc3545'/>
                     <FontAwesomeIcon icon={faStar} color='#dc3545' />
                     <FontAwesomeIcon icon={faStar} color='#dc3545' />
                     <FontAwesomeIcon icon={faStar} />
                     <FontAwesomeIcon icon={faStar} />
                    <div className="d-flex justify-content-between py-2">
                        <div>
                            <h6 className="text-dark pt-1">{CONSTANTS.COLORS?.toUpperCase()}</h6>
                            <span className="me-2 rounded-circle px-2 bg-warning"></span>
                            <span className="me-2 rounded-circle px-2 bg-danger"></span>
                            <span className="me-2 rounded-circle px-2 bg-primary"></span>
                        </div>
                        <h6 className="text-dark fw-bolder h4">{data?.amount}</h6>
                    </div>
                    <div className="py-2 text-center">
                        <button className="btn btn-gradient back w-100 text-white">{CONSTANTS.ADD_TO_CART}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommonShoeCard