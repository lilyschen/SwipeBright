import {useState} from "react";
import Nav from '../components/Nav'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Onboarding = () => {
    const [ cookies, setCookie, removeCookie ] = useCookies(['user'])

    const [ formData, setFormData ] = useState({
        user_id: cookies.UserId,
        first_name: "",
        school: "",
        about: "",
        strength_class: "man",
        weak_class: "woman",
        url: "",
        matches: []
    })

    let navigate = useNavigate()

    const handleChange = (e) => {
        console.log('e', e)
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name] : value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.put('http://localhost:8000/user', { formData })
            const success = response.status === 200
            if (success) navigate('/dashboard')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <Nav
                minimal={true}
                setShowModal={() => {}}
                showModal={false}
            />
        <div className="onboarding">
            <h2> CREATE ACCOUNT</h2>

            <form onSubmit={handleSubmit}>
                <section>
                    <label htmlFor="first_name">First Name</label>
                    <input
                        id="first_name"
                        type="text"
                        name="first_name"
                        placeholder="First name"
                        required={true}
                        value={formData.first_name}
                        onChange={handleChange}
                    />
                    <label htmlFor="school">School</label>
                    <input
                        id="school"
                        type="text"
                        name="school"
                        placeholder="School"
                        required={true}
                        value={formData.school}
                        onChange={handleChange}
                    />

                    <label htmlFor="about">About Me</label>
                    <input
                        id="about"
                        type="text"
                        name="about"
                        placeholder="I am currently studying... "
                        required={true}
                        value={formData.about}
                        onChange={handleChange}
                    />
                    <label>Classes I can help with:</label>
                    <div className="multiple-input-container">
                        <input
                            id="strength_class"
                            type="radio"
                            name="strength_class"
                            value="CPSC_110"
                            onChange={handleChange}
                            checked={formData.strength_class === "CPSC_110"}
                        />
                        <label htmlFor="strength_class">CPSC 110</label>
                        <input
                            id="strength_class"
                            type="radio"
                            name="strength_class"
                            value="CPSC_121"
                            onChange={handleChange}
                            checked={formData.strength_class === "CPSC_121"}
                        />
                        <label htmlFor="strength_class">CPSC 121</label>
                        <input
                            id="strength_class"
                            type="radio"
                            name="strength_class"
                            value="CPSC_210"
                            onChange={handleChange}
                            checked={formData.strength_class === "CPSC_210"}
                        />
                        <label htmlFor="strength_class">CPSC 210</label>
                    </div>

                    <label>Classes I want to help with:</label>
                    <div className="multiple-input-container">
                        <input
                            id="weak_class"
                            type="radio"
                            name="weak_class"
                            value="CPSC_110"
                            onChange={handleChange}
                            checked={formData.weak_class === "CPSC_110"}
                        />
                        <label htmlFor="weak_class">CPSC 110</label>
                        <input
                            id="weak_class"
                            type="radio"
                            name="weak_class"
                            value="CPSC_121"
                            onChange={handleChange}
                            checked={formData.weak_class === "CPSC_121"}
                        />
                        <label htmlFor="weak_class">CPSC 121</label>
                        <input
                            id="weak_class"
                            type="radio"
                            name="weak_class"
                            value="CPSC_210"
                            onChange={handleChange}
                            checked={formData.weak_class === "CPSC_210"}
                        />
                        <label htmlFor="weak_class">CPSC 210</label>
                    </div>

                    <input type="submit"/>
                </section>

                <section>
                    <label htmlFor="about">Profile Photo</label>
                    <input
                        type="url"
                        name="url"
                        id="url"
                        onChange={handleChange}
                        required={true}
                    />
                    <div className="photo-container">
                        <img src={formData.url} alt="profile pic preview"/>
                    </div>
                </section>

            </form>
        </div>
        </>
    )
}
export default Onboarding