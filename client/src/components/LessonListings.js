import { useEffect, useState } from "react";
import { Container, Form, CardGroup } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import InfiniteScroll from "react-infinite-scroll-component";
import Lesson from "./Lesson";
import Loader from "./Loader";
import EndMessage from "./EndMessage";

const LessonListings = () => {
  const [lessons, setLessons] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(2);

  useEffect(() => {
    const getLessons = async () => {
      const res = await fetch(`http://localhost:3004/lessons?_page=1&_limit=5`);
      const data = await res.json();
      setLessons(data);
    };

    getLessons();
  }, []);

  const fetchLessons = async () => {
    const res = await fetch(
      `http://localhost:3004/lessons?_page=${page}&_limit=5`
    );
    const data = await res.json();
    return data;
  };

  const fetchData = async () => {
    const lessonsFromServer = await fetchLessons();
    setLessons([...lessons, ...lessonsFromServer]);
    if (lessonsFromServer.length === 0 || lessonsFromServer.length < 5) {
      setHasMore(false);
    }
    setPage(page + 1);
  };

  return (
    <>
      <Container>
        <Form className="lesson-search">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              <BsSearch />
            </Form.Label>
            <Form.Control type="text" placeholder="Search" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Filter</Form.Label>
            <Form.Select>
              <option>Select</option>
              <option>Option</option>
              <option>Option</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Container>

      <Container >
        <InfiniteScroll
          dataLength={lessons.length} //This is important field to render the next data
          next={fetchData}
          hasMore={hasMore}
          loader={<Loader />}
          endMessage={<EndMessage />}
        >
          <CardGroup>
            {lessons.map((lesson) => {
              return <Lesson key={lesson.id} lesson={lesson} />;
            })}
          </CardGroup>
        </InfiniteScroll>
      </Container>
    </>
  );
};

export default LessonListings;
