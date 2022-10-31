import React, { useEffect, useState } from "react";
import "../styles/App.css";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store";

const API_KEY = "972b62433e774aaeaa9d393e3d7c3e76";   //Get your own api key from newsapi

const App = () => {
  const [newsCount , setNewsCount] = useState(1);
  const dispatch = useDispatch();

  //useSelector allow use to access the state of store
  const newsObj = useSelector((state)=> state.news);

  //fetching data and dispatching result to store
  useEffect(() => {
   async function fetchdata(){
      const data = await fetch(` https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}&pageSize=${newsCount}`)
      const res = await data.json();
      dispatch(actions.setnews(res.articles))
      return res;

  }
  fetchdata();
  }, [newsCount]);

  const numChangeHandler = (e) => {
    if(e.target.value !== "")
    setNewsCount(e.target.value)
  };

  let articles = [...newsObj.articles];

  const filteredArticles = articles


  return (
    <div id="main">
      <h2>Top News Articles</h2>
      <div>
        <label htmlFor="num">Enter Number of articles</label>
        <input
          type="number"
          id="num"
          onChange={numChangeHandler}
          min={1}
        ></input>
      </div>
      {newsObj.articlesNum !== 0 ? (
        <div>
          <h3>Top {newsObj.articlesNum} articles</h3>
          <ul id="articles">
            {filteredArticles.map((item,index) => {
              return (
                <li key={index}>
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
