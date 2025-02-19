import { Link } from 'react-router-dom'
import './chatList.css'

const ChatList = () => {
  return (
    <div className='chatList'>
      <span className="title">DASHBOARD</span>
      <Link to="/dashboard">New Chat</Link>
      <Link to="/">Explore Cybera</Link>
      <Link to="/">Contact Us</Link>
      <hr />
      <span className="title">RECENT CHATS</span>
      <div className="list">
        <Link>My Chat Title</Link>
        <Link>My Chat Title</Link>
        <Link>My Chat Title</Link>
        <Link>My Chat Title</Link>
        <Link>My Chat Title</Link>
        <Link>My Chat Title</Link>
        <Link>My Chat Title</Link>
        <Link>My Chat Title</Link>
        <Link>My Chat Title</Link>
        <Link>My Chat Title</Link>
        <Link>My Chat Title</Link>


      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo.png" alt=""/>
        <div className="texts">
          <span>Upgrade to Cybra Pro</span>
          <span>Unlimited Access to All Features</span>
        </div>
      </div>
    </div>
  )
}

export default ChatList