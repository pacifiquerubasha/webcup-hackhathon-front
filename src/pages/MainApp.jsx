import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import empty from "../assets/empty.png";
import { get_dreams } from "../services/apis";

function MainApp(props) {
  const [isEmptyDreamList, setIsEmptyDreamList] = useState(false);

  const [dreams, setDreams] = useState([]);

  useEffect(() => {
    get_dreams().then((response) => {
      console.log("data", response);
      if (response.length === 0) {
        setIsEmptyDreamList(true);
      }
      setDreams(response);
    });
  }, []);

  return (
    <>
      <Header isUser={true} />

      <div className="dream_gallery">
        {isEmptyDreamList ? (
          <div className="empty__box--container">
            <img src={empty} alt="empty" className="empty_gallery" />
            <p>You haven't created any dreams yet.</p>
            <button>
              <span>Predict Dreams</span>
            </button>
            dreams
          </div>
        ) : (
          <div className="my__dreams">
            <div className="container">
              <h1 className="text-gradient">My Dreams</h1>

              <div className="dreams_list flex ">
                {dreams.map((dream, i) => {
                  return (
                    <div className="dream flex flex-col">
                      <div className="dream__date">{dream.dream_date}</div>
                      <div className="dream__duration">
                        {dream.sleep_time} - {dream.wake_time}
                      </div>
                      <p>
                        {dream.dream}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MainApp;
