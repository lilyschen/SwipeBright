import logo from '../images/tinder logo.png'
import colorLogo from '../images/Tinder-logo.png'
const Nav = ({ minimal, authToken }) => {

    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={minimal ? colorLogo : logo}/>
            </div>

            {!authToken && !minimal && <button
                className={"nav-button"}>Log in</button>}
        </nav>
    )
}
export default Nav