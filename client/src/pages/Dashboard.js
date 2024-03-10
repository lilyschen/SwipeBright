import React, { useState } from 'react';
import ChatContainer from "../components/ChatContainer";

const Dashboard = () => {
    const [characters, setCharacters] = useState([
        {id: 1, name: "Saharah Bains", url: ".images/icon.jpeg", swiped: false },
        { id: 2, name: "Michelle Lei", url: ".images/icon.jpeg", swiped: false },
        { id: 3, name: "Allison F", url: ".images/icon.jpeg", swiped: false },
        { id: 4, name: "Lily Chen", url: ".images/icon.jpeg", swiped: false }
    ]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSwipeLeft = () => {
        const updatedCharacters = [...characters];
        updatedCharacters.splice(currentIndex, 1);
        setCharacters(updatedCharacters);
    };

    const handleSwipeRight = () => {
        const updatedCharacters = [...characters];
        updatedCharacters[currentIndex].swiped = true;
        setCharacters(updatedCharacters);
    };

    return (
        <div className="dashboard">
            <ChatContainer/>
            <div className="swipe-container">
            <div className="card-container">
                {characters.length > 0 && (
                    <div key={characters[currentIndex].id} className="card">
                        <h3>{characters[currentIndex].name}</h3>
                        <img src={characters[currentIndex].url} alt={characters[currentIndex].name} />
                        <div className="swipe-options">
                            <button onClick={handleSwipeLeft}>Swipe Left</button>
                            <button onClick={handleSwipeRight}>Swipe Right</button>
                        </div>
                    </div>
                )}
                {characters.length === 0 && (
                    <div>No more characters to swipe!</div>
                )}
            </div>
            </div>
        </div>
    );
};

export default Dashboard;
