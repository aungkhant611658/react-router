import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>My Home Page</div>
      <p>
        Go to <Link to="/products">the list of products</Link>
      </p>
    </>
  );
}

export default Home;
