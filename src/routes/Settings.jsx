import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

const Settings = () => {
  return (
    <>
      <Marquee
        gradient={false}
        speed={200}
      >Please change some of our settings!!</Marquee>
      <div>
        <Link to="/">Back to home</Link>
      </div>
      <div>
        Settings ⚙
        <ul>
          <li>Brightness</li>
          <li>Audio</li>
          <li>Theme</li>
          <li>About</li>
            by <a href="https://github.com/simonchenwastaken/">Simon Chen</a>
          <li>Developer Mode</li>
        </ul>
      </div> 
    </>
  );
}
export default Settings;
