// import React, { Component } from "react";
// import NewsItem from "./NewsItem";
// import Loading from "./Loading";

// export default class News extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: ["a"],
//       rowsToShow: 2,
//       page: 1,
//       articlesLenght: 0,
//       loading: false,
//       categoryName: "",
//     };
//     this.latestRowRef = React.createRef();
//     this.handleShowMoreClick = this.handleShowMoreClick.bind(this);
//   }
//   handleShowMoreClick() {
//     this.setState(
//       (prevState) => ({
//         rowsToShow: prevState.rowsToShow + 1,
//       }),
//       () => {
//         if (this.latestRowRef.current) {
//           this.latestRowRef.current.scrollIntoView({ behavior: "smooth" });
//         }
//       }
//     );
//   }

//   async updatenews() {
//     console.log(this.state.page);
//     let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=in&apiKey=52f2931a3a7147d68fc8cda7d3b3733b&page=${this.state.page}`;
//     this.setState({ loading: true });
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     if (parsedData.articles) {
//       // Check if articles are available in the response
//       this.setState({ items: parsedData.articles });
//       this.setState({ articlesLenght: parsedData.articles.length });
//       this.setState({ loading: false });
//     } else {
//       console.error("No articles found in the response:", parsedData);
//     }
//   }
//   async componentDidMount() {
//     this.updatenews();
//   }
//   previousPage() {
//     this.setState(
//       () => {
//         const previousPage = this.state.page - 1;
//         return { rowsToShow: 2, page: previousPage };
//       },
//       () => {
//         this.updatenews(); // Fetch data after updating page state
//       }
//     );
//   }

//   nextPage() {
//     this.setState(
//       () => {
//         const nextPage = this.state.page + 1;
//         return { rowsToShow: 2, page: nextPage };
//       },
//       () => {
//         this.updatenews(); // Fetch data after updating page state
//       }
//     );
//   }

//   render() {
//     const { items, rowsToShow } = this.state;
//     const numRows = Math.ceil(this.state.items.length / 4);
//     // Split items into rows
//     const rows = [];
//     for (let i = 0; i < numRows; i++) {
//       rows.push(items.slice(i * 4, (i + 1) * 4));
//     }
//     return (
//       <div className="container">
//         <h1 className="text-center mt-3 mb-3">Top Headlines for Today</h1>
//         {/* Map over rows */}
//         {this.state.loading ? <Loading /> : null}
//         {!this.state.loading &&
//           rows.slice(0, rowsToShow).map((row, index) => (
//             <div
//               key={index}
//               ref={index === rowsToShow - 1 ? this.latestRowRef : null}
//               className="row mb-4"
//             >
//               {/* Map over columns in each row */}
//               {row.map((item) => (
//                 <div key={item.id} className="col-md-3">
//                   {/* Orignal news item starts here */}
//                   <NewsItem
//                     imgsrc={item.urlToImage}
//                     title={item.title}
//                     desc={item.description}
//                     frwdlink={item.url}
//                   />
//                 </div>
//               ))}
//             </div>
//           ))}
//         <div className="container text-center">
//           {rowsToShow < numRows && (
//             <button
//               className="btn btn-secondary"
//               onClick={this.handleShowMoreClick}
//             >
//               Show More
//             </button>
//           )}
//         </div>
//         <div className="container d-flex justify-content-between">
//           <button
//             type="button"
//             disabled={this.state.page < 2}
//             onClick={(e) => {
//               this.previousPage();
//             }}
//             className="btn btn-dark"
//           >
//             &#8592;Previous{" "}
//           </button>
//           <button
//             type="button"
//             disabled={this.state.articlesLenght < 20}
//             onClick={(e) => {
//               this.nextPage();
//             }}
//             className="btn btn-dark"
//           >
//             Next &#10140;
//           </button>
//         </div>
//       </div>
//     );
//   }
// }
