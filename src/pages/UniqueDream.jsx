import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import { get_dream } from "../services/apis";

function UniqueDream(props) {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [dream, setDream] = useState({});
  const params = useParams();

  useEffect(() => {
    const hasToken = localStorage.getItem("token");

    if (!hasToken) {
      navigate("/login");
    }

    const dreamId = params.id;
    get_dream(dreamId).then((response) => {
      console.log("data", response[0]);
      setDream(response[0]);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <Header isUser={true} />

      {isLoading ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="unique__dream">
          <div className="container">
            <p className="dream__intro">
              As I drifted off to sleep on {dream.dream_date}, little did I know
              that my dreams would take me on a journey that felt like hours.
              When I finally woke up on at {dream.wake_time}, I was amazed by
              the vividness and clarity of the images that filled my mind.
            </p>

            <h5 className="text-gradient">Here is my dream!</h5>
            <div className="dream__context">
              {dream?.dream?.split("\n").map((paragraph) => {
                return <p className="dream__context">{paragraph}</p>;
              })}
            </div>

            <h5 className="text-gradient">And Here Is What It Means</h5>

            <div className="dream__assessment">
            {dream?.assessment?.split("\n").map((paragraph) => {
                return <p className="dream__context">{paragraph}</p>;
              })}
              </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UniqueDream;
