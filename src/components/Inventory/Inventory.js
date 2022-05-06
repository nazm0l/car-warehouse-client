import { Link } from "react-router-dom";
import useCars from "../../hooks/useCars";
import Items from "../Items/Items";

const Inventory = () => {
 
  const [cars] = useCars();

  return (
    <div>
      <h2 className="text-center my-3">Inventory</h2>
      <div className="row mx-auto container">
      {
          cars.map(car => <Items key={car._id} car={car}></Items>)
      }
      </div>
    </div>
  );
};

export default Inventory;