import './dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className="texts">
        <div className="logo">
          <img src="/logo.png" alt="" />  {/*here comes the logo add later */}
          <h1>CyberaAI</h1>
        </div>
        <div className="options">
          <div className="option">
            <img src="/chat.png" alt="" />
            <span>New Chat</span>
          </div>
          <div className="option">
            <img src="/image.png" alt="" />
            <span>Analyse Image</span>
          </div>
          <div className="option">
            <img src="/code.png" alt="" />
            <span>code Helper</span>
          </div>
        </div>
      </div>
      <div className="formContainer">
        <form action="">
          <input type="text" placeholder='ASK ME ANYTHING' />
          <button>
            <img src="/arrow.png" alt="" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Dashboard