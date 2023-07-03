import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import { useFetch } from "../util/useFetch";
import { Button } from "../components/Button";

const apiURL = import.meta.env.VITE_API;
const googleImg = import.meta.env.VITE_GOOGLE_IMG;

export const Item = () => {
  const { item, id } = useParams();
  const navigate = useNavigate();

  const URL = `${apiURL}${item}/${id}`;
  const itemDB = useFetch(URL);

  const ITEM = {
    item: ``,
    laptop: `${itemDB.LAP_WEIGHT} gramos`,
    tablet: `${itemDB.TAB_INCHES} pulgadas`,
    phone: `${itemDB.PHO_RESOLUTION} mega pixeles`,
    videogameconsole: `${itemDB.VID_STORAGE} GB`,
  };

  const handleSubmit = () => {
    const URL = `${apiURL}item/${id}`
    axios.patch(URL).then((res) => {navigate(`/item/${id}`)});
  };

  return (
    <section className="Item">
      <section className="Item-info">
        <h1 className="Item-h">{itemDB.ITEM_NAME}</h1>
        <h2 className="Item-h Item-h--light">{itemDB.BRAN_NAME}</h2>
        <h2 className="Item-h Item-h--price">{itemDB.ITEM_PRICE} $/mes</h2>
        <h2 className="Item-h Item-h--light">{ITEM[item]}</h2>
        <span className="Item-h--span">Stock: {itemDB.ITEM_STOCK}</span>
        <section className="Item-button">
          <Button
            className="Button Button--size Item-button--absolute"
            title="¡Lo quiero!"
            onClick={handleSubmit}
          />
        </section>
      </section>
      <section className="Item-img">
        <img
          src={`${googleImg}${itemDB.ITEM_IMG}`}
          alt={itemDB.ITEM_NAME}
          className="Item-img--size"
        />
      </section>
    </section>
  );
};
