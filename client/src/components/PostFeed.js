import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "./Post";
import Loader from "./Loader";
import EndMessage from "./EndMessage";
import SuggestedCol from "./SuggestedCol";
import NewsCol from "./NewsCol";

const PostFeed = () => {
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(2);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch(`http://localhost:3001/posts?page=1`);
      const data = await res.json();
      if (data.length <= 3) {
        setHasMore(false);
      }
      setPosts(data);
    };

    getPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await fetch(`http://localhost:3001/posts?page=${page}`);
    const data = await res.json();
    return data;
  };

  const fetchData = async () => {
    const postsFromServer = await fetchPosts();
    setPosts([...posts, ...postsFromServer]);
    if (postsFromServer.length === 0 || postsFromServer.length < 1) {
      setHasMore(false);
    }
    setPage(page + 1);
  };

  return (
    <Container className="post-feed">
      <Row>
        <Col xs={2} style={{ width: "5rem" }}></Col>
        <Col xs={8} style={{ width: "60rem" }}>
          {/* <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Create a post" />
              <Button variant="primary" type="button">
                Submit
              </Button>
            </Form.Group>
          </Form> */}
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
        <Col>
          <SuggestedCol />
        </Col>
        {/* <Col><NewsCol /></Col> */}
      </Row>
    </Container>
  );
};

export default PostFeed;
