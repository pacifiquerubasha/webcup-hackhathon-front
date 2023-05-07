import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { save_dream } from "../services/apis";

function DreamScience(props) {
  const [isDreamResults, setIsDreamResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({});
  const [dreamResults, setDreamResults] = useState({});

  const handleChange = (event) => {
    console.log(event.target.name);
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    console.log(inputs);

    event.preventDefault();
    setIsLoading(true);
    save_dream(inputs).then((data) => {
      console.log("data", data);
      setDreamResults(data);
      setIsLoading(false);
      setIsDreamResults(true);
    });
  };

  const navigate = useNavigate();
  useEffect(()=>{
    const hasToken = localStorage.getItem("token");
    if(!hasToken){
        navigate("/login")
    }

}, [])

  return (
    <>
      <Header isUser={true} />

      <div className="dream_science">
        <div className="container">
          {!isDreamResults ? (
            <>
              <h1>Explain Dreams</h1>
              <h5>
                Provide information to help us provide you with an explanation
                for you dream
              </h5>

              <form action="" onSubmit={handleSubmit} className="flex flex-col">
                <div className="form-group">
                  <label htmlFor="dream_date">Date</label>
                  <input
                    type="date"
                    name="dream_date"
                    id="dream_date"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="sleep_time">Sleep Time</label>
                  <input
                    type="time"
                    name="sleep_time"
                    id="sleep_time"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="wake_time">Wake Up Time</label>
                  <input
                    type="time"
                    name="wake_time"
                    id="wake_time"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="dream_desc">Dream Description</label>
                  <textarea
                    name="dream"
                    id="dream_desc"
                    cols="30"
                    rows="10"
                    required
                    onChange={handleChange}
                  ></textarea>
                </div>

                <input
                  aria-label="Predict"
                  type="submit"
                  value="Predict"
                  className="submit_predict"
                />
              </form>
            </>
          ) : (
            <>
              {isLoading ? (
                <div className="loader"></div>
              ) : (
                <>
                  <h2 className="dream_results--title text-gradient">
                    Your Dream Results are out
                  </h2>
                  <div className="dream_results">{dreamResults.assessment}</div>

                  <div className="more__dreams">
                    <p className="another__dream">Remember another dream ?</p>
                    <button
                      className=""
                      onClick={() => setIsDreamResults(false)}
                    >
                      <span>Ask again</span>
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default DreamScience;
