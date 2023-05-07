import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import blogImage from "../assets/about-hero.png";
import { dreamArticles } from "./content";
import { get_posts } from "../services/apis";

function Blog(props) {
  const navigate = useNavigate();
  const [animationParent] = useAutoAnimate();
  const [iframeAnimate] = useAutoAnimate();
  const [isChatOpen, setIsChatOpen] = useState(false);

  const [currentFilter, setCurrentFilter] = useState("All");
  const articleCategories = Array.from(
    new Set(dreamArticles.map((article) => article.category))
  );

  const filters = [
    {
      id: 1,
      name: "All",
    },
    ...articleCategories.map((article, key) => {
      return {
        id: key + 2,
        name: article,
      };
    }),
  ];

  const [filteredDreams, setFilteredDreams] = useState([]);
  const [filteredDreamsTemp, setFilteredDreamsTemp] = useState([]);
  useEffect(() => {
    get_posts().then((data) => {
      console.log(data);
      setFilteredDreams(data);
    });
  }, []);

  const handleFilterArticles = (filter) => {
    setCurrentFilter(filter.name);
    const tempDreams = filteredDreams.filter((dream) =>
      dream.category_name.includes(filter.name)
    );
    if (filter.name === "All") {
        if (filteredDreamsTemp.length > 0) {
            setFilteredDreams(filteredDreamsTemp);}
        else {
            get_posts().then((data) => {
                console.log(data);
                setFilteredDreams(data);
              });
        }
    } else {
        setFilteredDreamsTemp(filteredDreams);
      setFilteredDreams(tempDreams);
    }
  };

  return (
    <>
      
        <Header/>

        <div className='blog-container' data-aos="zoom-in" data-aos-duration="100">
            
            <div className='blog-hero'>
                <h1 className='text-gradient'>Chasing Our Dreams: A Blog for Dreamers</h1>
                <p>
                Our blog is dedicated to sharing inspiring stories of people who have chased their dreams and turned them into reality.
                    We believe that dreams have the power to motivate and inspire us to achieve great things. 
                </p>                   
            </div>      
        

        <section className="blogs">
          <div className="container flex flex-col">
            <div className="filters flex justify-center w-full">
              {filters.map((filter, i) => {
                return (
                  <span
                    key={filter.id}
                    className={`${
                      currentFilter === filter.name && "selected-filter"
                    }`}
                    onClick={() => handleFilterArticles(filter)}
                  >
                    {filter.name}
                  </span>
                );
              })}
            </div>

            <div className="articles-list flex">
              <div ref={animationParent} className="list-left">
                {filteredDreams.map((article, i) => {
                  return (
                    <div
                      onClick={() => navigate(`/blog/${article.id}`)}
                      className="article flex flex-col"
                    >
                      <img src={blogImage} alt="" />

                      <div className="article-content flex flex-col">
                        <div className="author">
                          by&nbsp;
                          <span>{article.author_name}</span>
                        </div>
                        <h3 className="text-gradient">{article.title}</h3>
                        <p>{article.content}</p>
                        <div className="separator"></div>
                        <span>{article.created_at}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="list-right flex flex-col">
                <h3>Latest Articles</h3>
                <div className="recent__articles flex flex-col">
                  <div className="recent-article flex items-center">
                    <img src={blogImage} alt="" />
                    <div>
                      <h5>Emmanuel Murairi</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quasi, reiciendis!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div ref={iframeAnimate} className='chat-container'>

            {isChatOpen &&
                <iframe width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/43dc714d-6bc9-4601-88ce-6dc183ed7e72">
                </iframe>
            }
            
             <div className="chat-icon" onClick={()=>setIsChatOpen(!isChatOpen)}>
                <i className='fas fa-comment-dots text-5xl'></i>             
             </div>
        </div>

      <Footer />
    </>
  );
}

export default Blog;
