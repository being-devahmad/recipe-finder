import React from 'react'
import { Menu, MenuItem } from 'semantic-ui-react'
import { logo } from '../constants/constant'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <Menu borderless fixed='top'>
                <img src={logo} alt="" style={{ width: "120px", height: "80px" }} />
                <MenuItem name='Home' as={Link} to='/' />
                <MenuItem name='Recipes' as={Link} to="/recipes" />
            </Menu>
        </>
    )
}

export default Navbar
