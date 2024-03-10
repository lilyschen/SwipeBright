import logo from '../images/idea.png'

const Nav = ({ authToken, setShowModal, showModal, setIsSignUp }) => {
    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(false)
    }

    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={logo}/>
            </div>

            {!authToken && <button 
            className="nav-button"
            onClick={handleClick}
            disabled={showModal}
            >Log in</button>}
        </nav>
    )
}
export default Nav