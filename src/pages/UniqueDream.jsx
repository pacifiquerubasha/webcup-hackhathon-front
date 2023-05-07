import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

function UniqueDream(props) {

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        const hasToken = localStorage.getItem("token");
        if(!hasToken){
            navigate("/login")
        }

    }, [])

    return (
        <>

            <Header isUser={true}/>


            {isLoading ? 

            <div className='w-screen h-screen flex justify-center items-center'>
                <div className='loader'></div>
            </div>

            :

            <div className='unique__dream'>
                <div className="container">
                    <p className='dream__intro'>
                        As I drifted off to sleep on [date], little did I know that my dreams would take
                        me on a journey that felt like hours. When I finally woke up on [date] at [waking time],
                        I was amazed by the vividness and clarity of the images that filled my mind.
                    </p>

                    <h5 className='text-gradient'>Here is my dream!</h5>
                    <div className='dream__context'>
                        Dream
                    </div>

                    <h5 className='text-gradient'>And Here Is What It Means</h5> 

                    <div className='dream__assessment'>
                        Assessment
                    </div>

                </div>
            </div>

            }
            

            

            
        </>
    );
}

export default UniqueDream;