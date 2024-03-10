import {useState} from "react";
import Nav from '../components/Nav'


const Onboarding = () => {

    const [formData] = useState({
        first_name: "",
        school: "",
        about: "",
        strength_class: "man",
        weak_class: "woman",
        url: "",
        matches: []
    })

    const handleChange = () => {
        console.log('change')
    }

    const handleSubmit = () => {
        console.log('submitted.')
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
                        value={""}
                        onChange={handleChange}
                    />
                    <label htmlFor="school">School</label>
                    <input
                        id="school"
                        type="text"
                        name="school"
                        placeholder="School"
                        required={true}
                        value={""}
                        onChange={handleChange}
                    />

                    <label htmlFor="about">About Me</label>
                    <input
                        id="about"
                        type="text"
                        name="about"
                        placeholder="I am currently studying... "
                        required={true}
                        value={""}
                        onChange={handleChange}
                    />
                    <label>Classes you are willing to Teach:</label>
                    <div className="multiple-input-container">
                        <input
                            id="strength_class"
                            type="checkbox"
                            name="strength_class"
                            value="CPSC_110"
                            onChange={handleChange}
                            checked={formData.strength_class === "CPSC_110"}
                        />
                        <label htmlFor="strength_class">CPSC 110</label>
                        <input
                            id="strength_class"
                            type="checkbox"
                            name="strength_class"
                            value="CPSC_121"
                            onChange={handleChange}
                            checked={formData.strength_class === "CPSC_121"}
                        />
                        <label htmlFor="strength_class">CPSC 121</label>
                        <input
                            id="strength_class"
                            type="checkbox"
                            name="strength_class"
                            value="CPSC_210"
                            onChange={handleChange}
                            checked={formData.strength_class === "CPSC_210"}
                        />
                        <label htmlFor="strength_class">CPSC 210</label>
                    </div>

                    <label>Classes you want to help with:</label>
                    <div className="multiple-input-container">
                        <input
                            id="weak_class"
                            type="checkbox"
                            name="weak_class"
                            value="CPSC_110"
                            onChange={handleChange}
                            checked={formData.weak_class === "CPSC_110"}
                        />
                        <label htmlFor="weak_class">CPSC 110</label>
                        <input
                            id="weak_class"
                            type="checkbox"
                            name="weak_class"
                            value="CPSC_121"
                            onChange={handleChange}
                            checked={formData.weak_class === "CPSC_121"}
                        />
                        <label htmlFor="weak_class">CPSC 121</label>
                        <input
                            id="weak_class"
                            type="checkbox"
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
                    </div>
                </section>

            </form>

        </div>
        </>
    )
}
export default Onboarding