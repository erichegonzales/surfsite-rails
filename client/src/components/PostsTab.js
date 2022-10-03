import { Container, CardGroup} from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import EndMessage from "./EndMessage";
import Post from "./Post";

const PostsTab = () => {
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(2);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch(`http://localhost:3004/posts?_page=1&_limit=20`);
      const data = await res.json();
      setPosts(data);
    };

    getPosts();
  }, []);

  console.log(posts);

  const fetchPosts = async () => {
    const res = await fetch(
      `http://localhost:3004/posts?_page=${page}&_limit=20`
    );
    const data = await res.json();
    return data;
  };

  const fetchData = async () => {
    const postsFromServer = await fetchPosts();
    setPosts([...posts, ...postsFromServer]);
    if (postsFromServer.length === 0 || postsFromServer.length < 20) {
      setHasMore(false);
    }
    setPage(page + 1);
  };

  return (
    <Container>
      <InfiniteScroll
        dataLength={posts.length} //This is important field to render the next data
        next={fetchData}
        hasMore={hasMore}
        loader={<Loader />}
        endMessage={<EndMessage />}
      >
        <CardGroup>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </CardGroup>
      </InfiniteScroll>
    </Container>
  );
};

export default PostsTab;
