import { Container, CardGroup } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import EndMessage from "./EndMessage";
import Lesson from "./Lesson";

const LessonTab = () => {
  const [lessons, setLessons] = useState([]);
  const [coachId, setCoachId] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(2);

  useEffect(() => {
    const getLessons = async () => {
      const res = await fetch(`http://localhost:3001/coaches/1/lessons?page=1`);
      const data = await res.json();
      if (data.length === 3) {
        setHasMore(false);
      }
      setLessons(data);
    };

    getLessons();
  }, []);

  const fetchLessons = async () => {
    const res = await fetch(
      `http://localhost:3001/coaches/${coachId}/lessons?page=${page}`
    );
    const data = await res.json();
    return data;
  };

  const fetchData = async () => {
    const lessonsFromServer = await fetchLessons();
    setLessons([...lessons, ...lessonsFromServer]);
    if (lessonsFromServer.length === 0 || lessonsFromServer.length < 1) {
      setHasMore(false);
    }
    setPage(page + 1);
  };

  return (
    <Container>
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
  );
};

export default LessonTab;
