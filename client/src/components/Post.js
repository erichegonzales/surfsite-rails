import { Card, CardGroup } from "react-bootstrap";
import Video from "./Video";

const Post = ({ post }) => {

  console.log(post)

  return (
    <CardGroup>
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <Card.Title>id: {post.id} </Card.Title>
          <Card.Img src={post.image}></Card.Img>
          {post.video === null || post.video === "null" ? null : (
            <Video src={post.video} />
          )}
          <Card.Text>comment: {post.content}</Card.Text>
          <Card.Text>user: {post.user.username}</Card.Text>
          <Card.Text>location: {post.location}</Card.Text>
          <Card.Text>likes: {post.likes}</Card.Text>
          <Card.Text>description: {post.content}</Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default Post;
