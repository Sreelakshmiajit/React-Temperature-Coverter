import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { TbTemperatureCelsius } from "react-icons/tb";
function Header() {
    return (
        <div>
            <MDBNavbar light bgColor='danger'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='#'>
                   <span className='text-dark fs-2'> <TbTemperatureCelsius  className='fs-1'/>ThermoFlip</span>
                    </MDBNavbarBrand>
                </MDBContainer>
            </MDBNavbar>
        </div>
    )
}

export default Header