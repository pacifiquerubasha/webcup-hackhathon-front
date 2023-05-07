import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import blogImage from "../assets/about-hero.png";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useParams } from "react-router-dom";
import { get_post } from "../services/apis";

function UniqueBlog(props) {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [animationParent] = useAutoAnimate();
    
  useEffect(() => {
    get_post(id).then((currentBlog) => {
      console.log(currentBlog);
      setBlog(currentBlog);
    });
  }, []);

  return (
    <>
      <Header />

      <div
        className="blog-container"
        data-aos="zoom-in"
        data-aos-duration="100"
      >
        <div className="blog-hero">
          <h1 className="text-gradient">
            Chasing Our Dreams: A Blog for Dreamers
          </h1>
          <p>
            Our blog is dedicated to sharing inspiring stories of people who
            have chased their dreams and turned them into reality. We believe
            that dreams have the power to motivate and inspire us to achieve
            great things.
          </p>
        </div>

        <section className="blogs">
          <div className="container unique__blog flex flex-col">
            <h2 className="unique__blog--title text-gradient">{blog?.title}</h2>
            <p className="unique__blog--desc">
              {blog?.content?.split("\n").map((paragraph) => {
                return (
                  <p className="blog__paragraph">
                    {paragraph.replace("\\n", "")}
                  </p>
                );
              })}
            </p>

            <div className="flex unique__blog--footer">
              <span className="blog_author">{blog?.author}</span>&nbsp;—&nbsp;
              <span>{blog?.date}</span>
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

export default UniqueBlog;
