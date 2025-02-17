import { Link, Outlet } from 'react-router-dom'
import './rootLayout.css'

const RootLayout = () => {
  return (
    <div className='rootLayout'>
        <header>
            <Link to="/" className="logo"> 
                <img src="/logo.png" alt="" />
                <span>Cybera AI</span>
            </Link>
            <div className="user">USER</div>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default RootLayout