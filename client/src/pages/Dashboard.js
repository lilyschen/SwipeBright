import React, { useState } from 'react'
import TinderCard from "react-tinder-card";
import ChatContainer from "../components/ChatContainer";

const Dashboard = () => {

    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }


    const characters  = [
        {
            name: "Saharah Bains",
            url: './images/icon.jpg'
        },
        {
            name: "Michelle Lei",
            url: './images/icon.jpg'
        },
        {
            name: "Allison F",
            url: './images/icon.jpg'
        },
        {
            name: "Lily Chen",
            url: './images/icon.jpg'
        }
    ]

    return (
        <div className="dashboard">
            <ChatContainer/>
            <div className="swiper-container">
                <div className="card-container">

                    {characters.map((character) =>
                        <TinderCard
                            className='swipe'
                            key={character.name}
                            onSwipe={(dir) => swiped(dir, character.name)}
                            onCardLeftScreen={() => outOfFrame(character.name)}>
                            <div style={{ backgroundImage: 'url(' + character.url + ')' }}
                                 className='card'>
                                <h3>{character.name}</h3>
                            </div>
                        </TinderCard>
                    )}
                    <div className="swipe-info">
                        {lastDirection ? <p>You swiped {lastDirection}</p> : <p/>}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard