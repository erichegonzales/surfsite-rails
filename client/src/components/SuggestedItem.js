import { Image } from 'react-bootstrap'

const SuggestedItem = ({ image, username}) => {
  return (
    <div className="sg-follower">
      <Image className="sg-img" roundedCircle thumbnail fluid src={image} />
      <p>{username}</p>
      <hr />
    </div>
  );
}

export default SuggestedItem