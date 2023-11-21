const Foodcard = ({item}) => {
    const {name, image, price, recipe} = item

    const handleAddToCart = (food) => {
      console.log(food);
    }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="bg-black text-white text-center w-min px-4 py-2 rounded-lg absolute top-5 right-5">${price}</h2>
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
          onClick={() => handleAddToCart(item)}
           className="btn btn-primary ">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Foodcard;
