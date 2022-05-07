import lambo from "../../Images/brand/lambo.png";
import ferrari from "../../Images/brand/ferrari.png";
import bmw from "../../Images/brand/bmw.png";
import bugatti from "../../Images/brand/bugatti.png";
import mclaren from "../../Images/brand/mclaren.png";
import './OurPartner.css'

const OurPartner = () => {
  const partners = [
    { id: 1, name: "Lamborgini", img: lambo },
    { id: 2, name: "Ferrari", img: ferrari },
    { id: 3, name: "BMW", img: bmw },
    { id: 4, name: "Bugatti", img: bugatti },
    { id: 5, name: "McLaren", img: mclaren },
  ];

  return (
    <div>
      <h2 className="text-center my-3 fw-bold py-2">Our Partners</h2>
      <div className="brands-container container">
        {partners.map((partner) => (<div className="partner-container">
            <img className='brand-img' src={partner.img} alt="" />
        </div>
        ))}
      </div>
    </div>
  );
};

export default OurPartner;
