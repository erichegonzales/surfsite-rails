import { Card, CardGroup } from "react-bootstrap";
import Video from "./Video";

const Post = ({ post }) => {

  console.log(post)

  return (
    <CardGroup>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>id: {post.id} </Card.Title>
          <Card.Img src={post.image} ></Card.Img>
          {post.video === null ? null : <Video src={post.video} />}
          <Card.Text>comment: {post.content}</Card.Text>
          <Card.Text>user: {post.user.name}</Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default Post;
