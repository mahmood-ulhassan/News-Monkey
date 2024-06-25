import React, { useRef, useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";

const News = ({ category, apiKey, setProgress }) => {
  const [items, setItems] = useState(["a"]);
  const [rowsToShow, setRowsToShow] = useState(2);
  const [page, setPage] = useState(1);
  const [articlesLength, setArticlesLength] = useState(0);
  const [loading, setLoading] = useState(false);
  const latestRowRef = useRef(null);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleShowMoreClick = () => {
    // setRowsToShow((prevRowsToShow) => prevRowsToShow + 1);
    // if (latestRowRef.current) {
    //   latestRowRef.current.scrollIntoView({ behavior: "smooth" });
    // }
  };
  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
      // Call your function here when scrolled to the bottom
      setLoading(true);
      setRowsToShow(rowsToShow + 1);
      setLoading(false);
      // if (latestRowRef.current) {
      //   latestRowRef.current.scrollIntoView({ behavior: "smooth" });
      // }
    }
  };
  window.addEventListener('scroll', handleScroll);

  const updatenews = async () => {
    setProgress(5);
    let url = `https://newsapi.org/v2/top-headlines?category=${category}&country=in&apiKey=${apiKey}&page=${page}`;
    console.log(url);
    setLoading(true);
    let data = await fetch(url);
    setProgress(25);
    let parsedData = await data.json();
    setProgress(75);
    if (parsedData.articles) {
      setItems(parsedData.articles);
      setArticlesLength(parsedData.articles.length);
      setLoading(false);
      setProgress(100);
    } else {
      console.error("No articles found in the response:", parsedData);
    }
  };

  const previousPage = () => {
    setPage((prevPage) => prevPage - 1);
    setRowsToShow(2);
    updatenews();
  };

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
    setRowsToShow(2);
    updatenews();
  };

  useEffect(() => {
    updatenews();
  }, [page]); // Triggering the update whenever the page changes

  const numRows = Math.ceil(items.length / 4);
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(items.slice(i * 4, (i + 1) * 4));
  }

  return (
    <div className="container">
      <h1 className="text-center  mb-3" style={{ marginTop: '4rem' }}>
        Top {capitalizeFirstLetter(category)} Headlines for Today
      </h1>
      {loading ? <Loading /> : null}
      {!loading &&
        rows.slice(0, rowsToShow).map((row, index) => (
          <div
            key={index}
            ref={index === rowsToShow - 1 ? latestRowRef : null}
            className="row mb-4"
          >
            {row.map((item) => (
              <div key={item.id} className="col-md-3">
                <NewsItem
                  imgsrc={item.urlToImage}
                  title={item.title}
                  desc={item.description}
                  frwdlink={item.url}
                />
              </div>
            ))}
          </div>
        ))}
      <div className="container text-center">
      {loading ? <Loading /> : null}
        {/* {rowsToShow < numRows && (
          <button className="btn btn-secondary" onClick={handleShowMoreClick}>
            Show More
          </button>
        )} */}
      </div>
      <div className="container d-flex justify-content-between">
        <button
          type="button"
          disabled={page < 2}
          onClick={previousPage}
          className="btn btn-dark"
        >
          &#8592;Previous{" "}
        </button>
        <button
          type="button"
          disabled={articlesLength < 20}
          onClick={nextPage}
          className="btn btn-dark"
        >
          Next &#10140;
        </button>
      </div>
    </div>
  );
};

export default News;
