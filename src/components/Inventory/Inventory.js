import useCars from "../../hooks/useCars";
import Items from "../Items/Items";
import Loading from "../Shared/Loading/Loading";

const Inventory = () => {
 
  const [cars] = useCars();
  if(!cars.length){
      return <Loading></Loading>
  }

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