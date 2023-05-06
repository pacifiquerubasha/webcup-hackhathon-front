import React, { useState } from 'react';
import Header from '../components/Header';
import empty from "../assets/empty.png";

function MainApp(props) {

    const [isEmptyDreamList, setIsEmptyDreamList] = useState(false);
    
    const sample_response = {
        "dream": "I had a dream last night that was so vivid and intense. It felt like I was transported to another world entirely. In the dream, I found myself in a vast, lush forest, the trees towering above me and casting a dappled shade on the ground. As I walked deeper into the forest, I could hear the rustling of leaves and the chirping of birds.\r\n\r\nSuddenly, I came across a small clearing, and in the center of it stood a beautiful, shimmering portal. It was unlike anything I had ever seen before, and I felt an overwhelming urge to step through it. Without hesitation, I walked through the portal, and everything changed.\r\n\r\nI found myself standing on a white, sandy beach, the crystal clear ocean stretching out before me. The sun was shining brightly, and I could feel its warm rays on my skin. As I looked around, I saw that there were other people on the beach, laughing and playing in the water.\r\n\r\nBut then, out of nowhere, a massive wave appeared on the horizon. It grew bigger and bigger as it approached the shore, until it towered over us like a giant wall. I remember feeling afraid, but also exhilarated, as the wave crashed down around me, pulling me under its powerful force.\r\n\r\nAnd then, just as suddenly as it had appeared, the wave receded, leaving me standing on the shore, drenched but unharmed. I looked out at the ocean again, and this time I saw something truly incredible: a pod of dolphins swimming in the distance, their sleek bodies gliding effortlessly through the water.\r\n\r\nIt was such an amazing dream, and even though I know it wasn't real, it felt like a magical experience that I'll never forget.",
        "dream_date": "2023-05-01",
        "sleep_time": "22:36:00",
        "wake_time": "23:36:00",
        "created_at": "05/06/2023 04:36pm",
        "assessment": "Based on your dream, it seems that you are on the cusp of stepping into a new and exciting phase of your life. The forest represents the unknown journey ahead of you, while the portal symbolizes the gateway to new experiences and opportunities. Your willingness to step through the portal without hesitation is a positive sign that you are ready for whatever lies ahead.\r\n\r\nThe beach represents a place of renewal and rejuvenation, and the wave symbolizes a powerful force of change and transformation. Although it may feel daunting to face this change, your dream suggests that you have the inner strength and resilience to weather any challenges that may come your way.\r\n\r\nThe appearance of the dolphins represents a positive message of joy, intelligence, and harmony. They symbolize a playful and free-spirited approach to life, and their presence indicates that you will find success and contentment on your new path.\r\n\r\nOverall, your dream suggests that you are ready to embrace change and step into a new adventure. The journey ahead may have its ups and downs, but ultimately, it will lead you to a place of joy, abundance, and fulfillment. Trust in your own intuition and the universe, and you will be able to navigate any obstacle along the way."
    }

    return (
        <>
            <Header isUser={true}/>
            
            <div className='dream_gallery'>
                {isEmptyDreamList ?

                <div className='empty__box--container'>
                    <img src={empty} alt="empty" className='empty_gallery'/>
                    <p>You haven't created any dreams yet.</p>

                    <button><span>Predict Dreams</span></button>
                </div>

                :

                <div className='my__dreams'>
                    <div className="container">
                        <h1 className='text-gradient'>My Dreams</h1>

                        <div className="dreams_list flex ">

                            {new Array(20).fill(0).map((dream, i)=>{
                                return (
                                <div className="dream flex flex-col">
                                    <div className="dream__date">{sample_response.dream_date}</div>
                                    <div className="dream__duration">
                                        {sample_response.sleep_time} - {sample_response.wake_time}
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos alias earum voluptas voluptatibus magnam, nam fugit. Ipsum necessitatibus mollitia eveniet.
                                    </p>                                
                                </div>
                                )
                            })

                            }


                        </div>

                    </div>
                </div>

                }

                
            </div>
        </>
    );
}

export default MainApp;