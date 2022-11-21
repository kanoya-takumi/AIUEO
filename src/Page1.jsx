import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>Page1です</h1>
      <Link to="/page1/Page1DetailA">DetailA</Link>
      <br />
      <Link to="/page1/Page1DetailB">DetailB</Link>
    </div>
  );
};
