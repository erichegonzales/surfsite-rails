import { Container, CardGroup } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import EndMessage from "./EndMessage";
import BookedLesson from "./BookedLesson";

const BookedLessonTab = () => {
  const [lessons, setLessons] = useState([]);
  const [userId, setUserId] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(2);

  useEffect(() => {
    const getLessons = async () => {
      const res = await fetch(`http://localhost:3001/users/1/booked_lessons?page=1`);
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
      `http://localhost:3001/users/${userId}/booked_lessons?page=${page}`
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
            return <BookedLesson key={lesson.id} booked_lesson={lesson} />;
          })}
        </CardGroup>
      </InfiniteScroll>
    </Container>
  );
};

export default BookedLessonTab;
