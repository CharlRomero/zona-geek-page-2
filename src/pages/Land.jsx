import { useParams } from "react-router-dom";

import { ItemGrid } from "../components/ItemGrid";
import { Device } from "../components/Device";

import phoneImg from "../assets/Phones.png";

export const Land = () => {
  const { item } = useParams();

  const ITEM = {
    phone: { text: "Celulares", device: phoneImg, price: "49.99" },
  };

  return (
    <>
      <Device text={ITEM[item].text} device={ITEM[item].device} price={ITEM[item].price} />
      <ItemGrid item={item} />
    </>
  );
};
