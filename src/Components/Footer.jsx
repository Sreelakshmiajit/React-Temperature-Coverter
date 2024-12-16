import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';
function Footer() {
  return (
    <div>
<MDBFooter bgColor='danger' className='text-center text-lg-left'>
      <div className='text-center p-3 text-dark' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://ThermoFlip.com/'>
          ThermoFlip.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer