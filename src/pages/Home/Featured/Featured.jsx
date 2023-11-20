import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './featured.css'

const Featured = () => {
  return (
    <div className="px-20 featured-item bg-fixed pb-12">
      <SectionTitle
        heading="Featured Item"
        subHeading="Check it out"
      ></SectionTitle>
      <div className="hero mx-auto">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={featuredImg}
            className="max-w-sm rounded-lg shadow-2xl "
          />
          <div>
            <h1 className="text-2xl font-bold">Order it now</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
