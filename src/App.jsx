import './app.css'
import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';

const App = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const openSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header openSidebar={openSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} openSidebar={openSidebar}/>
      <Home/>
    </div>
  )
}

export default App