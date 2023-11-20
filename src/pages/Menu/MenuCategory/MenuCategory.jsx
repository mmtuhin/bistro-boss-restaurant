import { Link } from "react-router-dom";
import Cover from "../../shared/Cover/Cover";
import MenuItem from "../../shared/MenuItem/MenuItem";

const Menucategory = ({ items, coverImg, title }) => {
  return (
    <div className="my-8">
       {
        title &&  <Cover img={coverImg} title={title}></Cover>
       }
      <div className="grid grid-cols-1 md:grid-cols-2">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}><button className="btn btn-primary flex justify-center items-center">Order</button></Link>

    </div>
  );
};

export default Menucategory;
