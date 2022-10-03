import { useEffect, useState } from "react";
import { CardGroup, Container, Form, Pagination } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import NewsItem from "./NewsItem";

const NewsFeed = () => {
  const [items, setItems] = useState([]);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    const getItems = async () => {
      const res = await fetch(
        `http://localhost:3004/articles?_page=1&_limit=2`
      );
      // `https://newsapi.org/v2/everything?q=surf-wsl&page=1&pageSize=20&sortBy=relevancy&language=en&apiKey=60dcae65b56641808aafbd67b95306c8`
      const data = await res.json();
      //   setItems(data.articles);
      setItems(data);
    };

    getItems();
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch(
        `http://localhost:3004/articles?_page=${activePage}&_limit=2`
      );
      // `https://newsapi.org/v2/everything?q=surf-wsl&page=${activePage}&pageSize=20&sortBy=relevancy&language=en&apiKey=60dcae65b56641808aafbd67b95306c8`
      const data = await res.json();
      //   setItems(data.articles);
      setItems(data);
    };

    fetchItems();
  }, [activePage]);

  let handlePageKeyClick = (number) => {
    setActivePage(number);
  };

  let pageKeys = [];
  for (let number = 1; number <= 5 && number > 0; number++) {
    pageKeys.push(
      <Pagination.Item
        key={number}
        activePage={number === activePage}
        onClick={() => setActivePage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      <Container>
        <Form className="news-search">
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

      <Container>
        <CardGroup>
          {items.map((item) => (
            <NewsItem key={item.id} item={item} />
          ))}
        </CardGroup>
        <Pagination>
          {/* <Pagination.Prev /> */}
          {pageKeys}
          <Pagination.Next />
        </Pagination>
      </Container>
    </>
  );
};

export default NewsFeed;
