import { Link } from 'react-router-dom';

const Settings = () => {
  return (
    <>
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
          <li>Developer Mode</li>
        </ul>
      </div>
    </>
  );
}

export default Settings;
