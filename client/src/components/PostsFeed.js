import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "./Post";
import Loader from "./Loader";
import EndMessage from "./EndMessage";

const PostsFeed = () => {
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(2);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch(`http://127.0.0.1:8000/all-posts/`);
      const data = await res.json();
      setPosts(data);
    };

    getPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await fetch(
      `http://127.0.0.1:8000/posts?_page=${page}&_limit=5`
    );
    const data = await res.json();
    return data;
  };

  const fetchData = async () => {
    const postsFromServer = await fetchPosts();
    setPosts([...posts, ...postsFromServer]);
    if (postsFromServer.length === 0 || postsFromServer.length < 5) {
      setHasMore(false);
    }
    setPage(page + 1);
  };

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col xs={8}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Create a post" />
            <Button variant="primary" type="button">
              Submit
            </Button>
            </Form.Group>

          </Form>
          <InfiniteScroll
            dataLength={posts.length} //This is important field to render the next data
            next={fetchData}
            hasMore={hasMore}
            loader={<Loader />}
            endMessage={<EndMessage />}
          >
            {posts.map((post) => {
              return <Post key={post.id} post={post} />;
            })}
          </InfiniteScroll>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default PostsFeed;
