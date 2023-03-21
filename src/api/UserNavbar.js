import React from 'react'
import { Link } from 'react-router-dom'

export const UserNavbar = () => {
    return (
        <div>
            <Link to="/userApi">user api</Link>
            <Link to="/userreg">user reg</Link>
        </div>
    )
}
