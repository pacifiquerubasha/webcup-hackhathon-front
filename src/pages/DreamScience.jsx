import React, { useState } from 'react';
import Header from '../components/Header';

function DreamScience(props) {

    const [isDreamResults, setIsDreamResults] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmitDream = (e)=>{
        e.preventDefault();
        
    }

    

    return (
        <>
            <Header isUser={true}/>

            <div className="dream_science">
                <div className="container">

                    {!isDreamResults? 

                    <>
                        <h1>Explain Dreams</h1>
                        <h5>Provide information to help us provide you with an explanation for you dream</h5>

                        <form action="" onSubmit={handleSubmitDream} className='flex flex-col'>
                            <div className="form-group">
                                <label htmlFor="dream_date">Date</label>
                                <input type="date" name="dream_date" id="dream_date"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="sleep_time">Sleep Time</label>
                                <input type="time" name="sleep_time" id="sleep_time"  required/>
                                
                            </div>
                            <div className="form-group">
                                <label htmlFor="wake_up_time">Wake Up Time</label>
                                <input type="time" name="wake_up_time" id="wake_up_time"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="dream_desc">Dream Description</label>
                                <textarea name="dream_desc" id="dream_desc" cols="30" rows="10" required></textarea>
                            </div>

                            <input aria-label='Predict' type="submit" value="Predict" className='submit_predict' />

                        </form>
                    
                    </>

                    :

                    <>

                        {isLoading ? 

                            <div class="loader"></div>

                        :

                        <>
                            <h2 className='dream_results--title text-gradient'>Your Dream Results are out</h2>
                            <div className="dream_results">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Ut hic autem quos explicabo facilis rem cum deleniti sapiente eum, 
                                quidem doloribus quisquam incidunt sunt sit corporis aliquam accusantium. 
                                Perferendis adipisci totam porro earum, eveniet deleniti nostrum incidunt 
                                accusamus delectus perspiciatis recusandae molestiae autem quod, natus velit. 
                                Nam cupiditate quibusdam a!
                            </div>
                            
                            <div className="more__dreams">
                                <p className='another__dream'>Remember another dream ?</p>
                                <button className='' onClick={()=>setIsDreamResults(false)}>
                                    <span>Ask again</span>
                                </button>
                            </div>

                        </>                      


                        }

                    
                    
                    </>



                    }

                    


                    

                </div>
            </div>            
           
        </>
    );
}

export default DreamScience;