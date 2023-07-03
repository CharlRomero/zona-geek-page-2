import { Link, useParams } from "react-router-dom";

export const Card = ({ name, brand, price, img, id }) => {
  const { item } = useParams();
  return (
    <section className="Card">
      <section className="Card-img">
        <img src={img} alt="Device" className="Card-img--size" />
      </section>
      <section className="Card-item">
        <section className="Card-description">
          <h2 className="Card-h">{name}</h2>
          <h3 className="Card-h Card-h--light">{brand}</h3>
        </section>
        <section className="Card-info">
          <h3 className="Card-h Card-h--bold">{price} $/mes</h3>
          <Link
            className="Button"
            to={`/${item === undefined ? "item" : item}/${id}`}
          >
            Alquilar
          </Link>
        </section>
      </section>
    </section>
  );
};
