import { useEffect, useState } from "react";

const useCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://jade-frightened-hare.cyclic.app/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  return [cars, setCars];
};

export default useCars;
