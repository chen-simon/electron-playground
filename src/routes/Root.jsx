import { Link } from "react-router-dom";

function Root() {
  return (
    <>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <Link to="/settings/" >Settings</Link>
    </>
  )
}

export default Root;
