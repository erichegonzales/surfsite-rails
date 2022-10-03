import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Comment from "./Comment";
import Loader from "../Loader";
import EndMessage from "../EndMessage";

function Scroll() {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(2);

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=20`
      );
      const data = await res.json();
      setItems(data);
    };

    getComments();
  }, []);

  const fetchComments = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=20`
    );
    const data = await res.json();
    return data;
  };

  const fetchData = async () => {
    const commentsFormServer = await fetchComments();

    setItems([...items, ...commentsFormServer])

    if (commentsFormServer.length === 0 || commentsFormServer.length < 20) {
        setHasMore(false)
    }

    setPage(page+1)
  };

  console.log(items)

  return (
    <div>
      <InfiniteScroll
        dataLength={items.length} //This is important field to render the next data
        next={fetchData}
        hasMore={hasMore}
        loader={<Loader />}
        endMessage={<EndMessage />}
      >
        {items.map((item) => {
          return <Comment key={item.id} item={item} />
        })}
      </InfiniteScroll>
    </div>
  );
};

export default Scroll;
