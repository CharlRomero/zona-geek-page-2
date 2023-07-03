import { Device } from "../components/Device";
import { ItemGrid } from "../components/ItemGrid";

import phoneImg from "../assets/Phones.png";

export const Home = () => {
  return (
    <>
      <Device text="¡Todo en un solo lugar!" device={phoneImg} price="49.99"/>
      <ItemGrid item="item"/>
    </>
  );
};
