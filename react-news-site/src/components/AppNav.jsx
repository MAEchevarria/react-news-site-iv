import {Link} from 'react-router-dom'
import { useState } from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import Search from './Search'

import sections from '../data/sections.json' //data

function AppNav (){

    const[navItems, setNavItems] = useState(sections)  
    
    return(
        <Navbar> 
            <Navbar.Brand href='/'>
                <Navbar.Text>
                    <img src="https://www.codeplatoon.org/wp-content/uploads/2018/10/CP-logo-2018-abbrev-1.png" width="60" />
                    CP News
                </Navbar.Text>
            </Navbar.Brand>
            <Nav>
                {
                    navItems.map(((navItem, index) => {
                        return(
                            <Nav.Link key={index} href={`/#/sections/${navItem.value}`} onClick={() => console.log(navItem.value)}> 
                                {navItem.label}
                            </Nav.Link>
                        )
                    }))
                }
            </Nav>
        </Navbar>
    )
}
export default AppNav;