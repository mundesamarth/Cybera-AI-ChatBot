import { Link } from 'react-router-dom'
import './homepage.css'

const Homepage = () => {
  return (
    <div className='homepage'>
      <img src="/dbBackGround.png" alt="" className="dbgb" />
      <div className="left">
        <h1>Cybera AI</h1>
        <h2>Unleashing the Power of AI: Smarter, Faster, Limitless.</h2>
        <h3>Cybera is more than just a platform—it's a gateway to the future of AI. Join us as we shape a smarter, faster, and more connected world driven by Artificial Intelligence. </h3>
        <Link to="/dashboard"> Get Started </Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/chillguy.png" alt="" className='chillguy'/>
        </div>
      </div>

      <div className="terms">
        <img src="/logo.png" alt="" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  )
}

export default Homepage