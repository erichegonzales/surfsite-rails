// import { useEffect, useState } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
// import NewsItem from "./NewsItem";
// import Loader from "./Loader";
// import EndMessage from "./EndMessage";

// const NewsCol = () => {
//   const [items, setItems] = useState([]);
//   const [hasMore, setHasMore] = useState(true);
//   const [page, setPage] = useState(2);

//   useEffect(() => {
//     const getItems = async () => {
//       const res = await fetch(
//         `https://newsapi.org/v2/everything?q=surf-wsl&page=1&pageSize=30&sortBy=relevancy&language=en&apiKey=60dcae65b56641808aafbd67b95306c8`
//       );
//       const data = await res.json();
//       setItems(data);
//     };

//     getItems();
//   }, []);

//   const fetchItems = async () => {
//     const res = await fetch(
//       `https://newsapi.org/v2/everything?q=surf-wsl&page=${page}&pageSize=30&sortBy=relevancy&language=en&apiKey=60dcae65b56641808aafbd67b95306c8`
//     );
//     const data = await res.json();
//     return data;
//   };

//   const fetchData = async () => {
//     const itemsFromServer = await fetchItems();
//     setItems([...items, ...itemsFromServer]);
//     if (itemsFromServer.length === 0 || itemsFromServer.length < 1) {
//       setHasMore(false);
//     }
//     setPage(page + 1);
//   };

//   return (
//     <div className="news-div">
//       <h3>News</h3>
//       <hr />
//       <InfiniteScroll
//         dataLength={items.length} //This is important field to render the next data
//         next={fetchData}
//         hasMore={hasMore}
//         loader={<Loader />}
//         endMessage={<EndMessage />}
//       >
//         {items.map((item) => {
//           return <NewsItem key={item.title} item={item} />;
//         })}
//       </InfiniteScroll>
//     </div>
//   );
// };

// export default NewsCol;
