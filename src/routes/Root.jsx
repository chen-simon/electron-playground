import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

function Root() {
  return (
    <>
    	<Marquee
        gradient={false}
        speed={200}
      >Welcome to my amazing electron app!!</Marquee>
      <Marquee
        gradient={false}
        speed={400}
      >I am learning electron to try to be a good javascript developer!!</Marquee>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <Link to="/settings/" >Settings</Link>
    </>
  )
}

export default Root;
