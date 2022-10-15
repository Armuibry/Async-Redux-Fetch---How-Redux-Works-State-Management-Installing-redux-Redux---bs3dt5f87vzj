import React, { useEffect } from "react";
import "../styles/App.css";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store";

const API_KEY = "";   //Get your own api key from newsapi

const App = () => {
  const dispatch = useDispatch();
  const newsObj = useSelector();
  useEffect(() => {
    
  }, []);

  const numChangeHandler = (e) => {
  };

  let articles = [];

  const filteredArticles = articles
    

  return (
    <div id="main">
      <h2>Top News Articles</h2>
      <div>
        <label htmlFor="num">Enter Number of articles</label>
        <input
          type="number"
          id="num"
          onChange={}
          min={}
        ></input>
      </div>
      {newsObj.articlesNum !== 0 ? (
        <div>
          <h3>Top {newsObj.articlesNum} articles</h3>
          <ul id="articles">
            {filteredArticles.map((item) => {
              return (
                <li>
                  <div className="article">
                    Author: {item.author}
                    <h2>{item.title}</h2>
                    <img src={item.urlToImage}></img>
                    <p>
                      {item.content === null
                        ? "No Content for this article"
                        : item.content}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <p>Please wait Loading...</p>
      )}
    </div>
  );
};

export default App;
