import logo from '../images/tinder logo.png'
import colorLogo from '../images/Tinder-logo.png'
const Nav = ({ minimal, setShowModal, showModal, setIsSignUp }) => {

    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(false)
    }

    const authToken = false
    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={minimal ? colorLogo : logo} alt="image."/>
            </div>

            {!authToken && !minimal && <button
                className="nav-button"
                onClick={handleClick}
                disabled={showModal}
            >Log in</button>}
        </nav>
    )
}
export default Nav