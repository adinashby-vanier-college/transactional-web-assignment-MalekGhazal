import React, { useState, useEffect } from "react";

const TechNews = () => {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=${apiKey}`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result.articles);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);

  console.log(data);

  return (
    <section className="technews--section">
      <h1 className="technews--title">Latest News</h1>
      <div className="technews--divider"></div>
      <div className="technews-container">
        {data.map((item, index) => (
          <div key={index} className="card">
            <div className="content">
              <p className="heading">{item.source.name}</p>
              <p className="para">{item.title}</p>
              <p className="para">{item.publishedAt}</p>
              <a
                target="_blank"
                rel="noreferrer"
                href={item.url}
                className="btn"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechNews;
