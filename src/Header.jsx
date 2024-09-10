import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify} from 'react-icons/bs'
import PropTypes from 'prop-types'


function Header({openSidebar}){
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={openSidebar}/>
        </div>
        <div className='header-left'>
            <BsSearch className='icon'/>
        </div>
        <div className='header header-right'>
            <BsFillBellFill className='icon'/>         
            <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className='icon'/>
        </div>
    </header>
  )
}

Header.propTypes = {
  openSidebar: PropTypes.func
}

export default Header