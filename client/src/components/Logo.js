import { Container } from 'react-bootstrap'
import {
  GiSurfBoard,
  GiWaveSurfer,
  GiWaveCrest,
  GiFireWave,
} from "react-icons/gi";

const Logo = () => {
  return (
    <>
      <div className="logo">
        {/* <GiSurfBoard className="logo-icon" /> */}
        {/* <GiFireWave className="logo-icon" /> */}
        {/* <GiWaveCrest className="logo-icon" /> */}
        <GiWaveSurfer className="logo-icon" />
        <h5 className="logo-name">AllThingSurf</h5>
      </div>
    </>
  );
}

export default Logo