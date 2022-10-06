import { Container } from 'react-bootstrap'
import { GiSurfBoard } from 'react-icons/gi'

const Logo = () => {
  return (
    <>
      <div className="logo">
        <GiSurfBoard className="logo-icon" />
        <h5 className="logo-name">surfsite</h5>
      </div>
    </>
  );
}

export default Logo