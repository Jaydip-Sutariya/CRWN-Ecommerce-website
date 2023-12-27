
import { NavLink } from "react-router-dom";

function BoxItem({ Imgurl, title, key, IndexName }) {
  // console.log(title);
  const route = `/shop/${IndexName}`;
  console.log(route);
  return (
    <div className="container" key={key}>
      <div className="box">
        <img src={Imgurl} alt="" />
      </div>
      <NavLink to={route} className="nlink">
        <h2>{title}</h2>
        <p>SHOP NOW</p>
      </NavLink>
    </div>
  );
}

export default BoxItem;
