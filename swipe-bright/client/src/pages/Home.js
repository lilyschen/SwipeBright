import Nav from '../components/Nav'
import AuthModal from "../components/AuthModal";
import logo from '../images/logo.png'
import {useState} from "react";

const Home = () => {
    const authToken = false;

    const [showModal, setShowModal] = useState(false)
    const [isSignUp, setIsSignUp] = useState(true)

    const handleClick = () => {
        console.log("clicked");
        setShowModal(true)
        setIsSignUp(true)
    }

    return (
        <div className="overlay">
            <Nav
                minimal={false}
                setShowModal={setShowModal}
                showModal={showModal}
                setIsSignUp={setIsSignUp}/>
            <div className="home">
                {/* <h1 className="primary-title">Swipe Bright</h1> */}
                <img src={logo} alt="Swipe Bright Logo" className="primary-logo" />
                <button className="primary-button" onClick={handleClick}>
                    {authToken ? 'Signout' : 'Create Account'}
                </button>

                {showModal && (
                    <AuthModal setShowModal={setShowModal} isSignUp={isSignUp}/>
                )}
            </div>
        </div>
    )
}
export default Home