import React from 'react'
import { Link } from 'react-router-dom'

export const UserNavbar = () => {
    return (
        <div>
            <Link to="/userApi">user api</Link><br />
            <Link to="/userreg">user reg</Link><br />
            <Link to="/productApi">Product Api</Link><br />
            <Link to="/categoryApi">category Api</Link><br />
            <Link to="/BrandApi">Brand Api</Link>
        </div>
    )
}
