import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Card = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, category, photo } = coffee;
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire("Deleted!", "Your file has been deleted.", "success");
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
    console.log(_id);
  };
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-between w-full items-center">
        <div>
          <h2 className="card-title">Name: {name}</h2>
          <p>Chep: {chef}</p>
          <p>Category: {category}</p>
        </div>
        <div className="btn-group btn-group-vertical space-y-3 mr-4">
          <button className="btn">View</button>
          <Link to={`UpdateCoffee/${_id}`}>
            <button className="btn">Edit</button>
          </Link>
          <button onClick={() => handleDelete(_id)} className="btn">
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
