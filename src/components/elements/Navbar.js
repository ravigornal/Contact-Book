/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
            <div className="container">
            <Link to ="/" className="navbar-brand">
                    Contack Book <i class="material-icons" style={{"font-size":"35px","color":"white","margin-bottom":"-300px"}}>import_contacts</i>

             </Link>
                <div>
                <Link to ="/contacts/add" className="btn btn-light ml-auto">Create Contact</Link>
                </div>
            </div>

        </nav>
    )
}

export default Navbar
