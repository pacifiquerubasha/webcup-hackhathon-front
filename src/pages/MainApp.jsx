import React, { useState } from 'react';
import Header from '../components/Header';
import empty from "../assets/empty.png";

function MainApp(props) {

    const [isEmptyDreamList, setIsEmptyDreamList] = useState(true);

    return (
        <>
            <Header isUser={true}/>
            
            <div className='dream_gallery'>
                {isEmptyDreamList ?

                <div>
                    <img src={empty} alt="empty" className='empty_gallery'/>
                    <p>You haven't created any dreams yet.</p>

                    <button>Predict Dreams</button>
                </div>

                :

                <div>
                </div>

                }

                
            </div>
        </>
    );
}

export default MainApp;