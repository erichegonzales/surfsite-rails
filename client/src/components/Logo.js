import { Container } from 'react-bootstrap'
import { GiSurfBoard, GiWaveSurfer } from "react-icons/gi";

const Logo = () => {
  return (
    <>
      <div className="logo">
        {/* <GiSurfBoard className="logo-icon" /> */}
        <GiWaveSurfer className="logo-icon" />
        <h5 className="logo-name">AllThingSurf</h5>
      </div>
    </>
  );
}

export default Logo