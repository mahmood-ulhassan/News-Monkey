import React from "react";
import myImage from "../samplenews.jpg"; // Import the image file

const NewsItem = ({ imgsrc, title, desc, frwdlink }) => {
  return (
    <div className="container">
      <div className="card" style={{ width: "18rem" }}>
        {imgsrc ? (
          <img
            src={imgsrc}
            style={{ width: "286px", height: "191px" }}
            alt="Image1"
          />
        ) : (
          <img
            src={myImage}
            style={{ width: "286px", height: "191px" }}
            alt="Image"
          />
        )}
        <div className="card-body">
          <h5 className="card-title" style={{ textAlign: "justify" }}>
            {title ? title.slice(0, 70) : ""}
          </h5>
          <p className="card-text" style={{ textAlign: "justify" }}>
            {desc ? desc.slice(0, 120) : title ? title.slice(0, 120) : ""}
          </p>
          <div className="text-center">
            <a href={frwdlink} className="btn btn-light">
              Read More....
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
