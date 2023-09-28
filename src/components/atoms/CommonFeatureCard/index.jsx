// libs
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

// constants
import { CONSTANTS } from '../../../shared/Constants'

// styles
import "./style.css"

const CommonFeatureCard = (props) => {
    const { data } = props
    return (
        <>
            <div className="card mb-3 my-card-featured h-100 feature-card">
                <div className="row g-0">
                    <div className="col-md-4 ">
                        <img src={data?.image_url} className="img-fluid  rounded-start w-100 h-100" alt="test-image" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body d-flex justify-content-center flex-column">
                            <h5 className="fw-bolder">{data?.heading}</h5>
                            <p className="card-text text-start">{data?.desc}</p>
                            <div>
                                <FontAwesomeIcon icon={faStar} color='#dc3545' />
                                <FontAwesomeIcon icon={faStar} color='#dc3545' />
                                <FontAwesomeIcon icon={faStar} color='#dc3545' />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <div className="d-flex justify-content-between py-2">
                                <div>
                                    <h6 className="text-dark pt-1">{CONSTANTS.COLORS}</h6>
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
                </div>
            </div>
        </>
    )
}

export default CommonFeatureCard