import React from 'react'

const ENUM = {
    RIGHTS_RESERVED: "2023 All rights reserved"
}

const Footer = () => {
    return (
        <>
            <footer className="text-center py-4 back">
                <span>&#169; {ENUM.RIGHTS_RESERVED}</span>
            </footer>
        </>
    )
}

export default Footer