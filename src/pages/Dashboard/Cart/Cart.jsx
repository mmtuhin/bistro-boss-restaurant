import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure  = useAxiosSecure();

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
        title: "Are you sure?",
        text: "You want to delete",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {

        axiosSecure.delete(`/carts/${id}`)
        .then(res => {
            if(res.data.deletedCount > 0){
                refetch();
            Swal.fire({
            title: "Deleted!",
            text: "Your Item has been deleted.",
            icon: "success"
          });
            }
        })

        }
      });

  }
  return (
    <div>
      <div className="flex justify-evenly">
        <h2 className="text-3xl">Items: {cart.length}</h2>
        <h2 className="text-3xl">Total Price: {totalPrice.toFixed(2)}</h2>
        <button className="btn btn-primary">Pay</button>
      </div>
      {/* Table Starts Here */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
               #
              </th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>
                  <label>
                    {index+1}
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
  
                  </div>
                </td>
                <td>
                    <p>{item.name}</p>
                </td>
                <td>${item.price}</td>
                <th>
                  <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-lg">
                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                  </button>
                </th>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
