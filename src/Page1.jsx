import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);

  const history = useHistory();

  const onClickDetailA = () => history.push("/page1/Page1detailA");
  return (
    <div>
      <h1>Page1です</h1>
      <Link to={{ pathname: "/page1/Page1detailA", state: arr }}>DetailA</Link>
      <br />
      <Link to="/page1/Page1detailB">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
