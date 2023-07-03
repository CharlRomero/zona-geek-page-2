import { useFetch } from "../util/useFetch";
import { Card } from "../components/Card";

const apiURL = import.meta.env.VITE_API;
const googleImg = import.meta.env.VITE_GOOGLE_IMG;

export const ItemGrid = ({ item }) => {
  const URL = `${apiURL}${item}`;
  const items = useFetch(URL);

  return (
    <section className="ItemGrid">
      {items.map((item, key) => (
        <Card
          key={key}
          name={item.ITEM_NAME}
          brand={item.BRAN_NAME}
          price={item.ITEM_PRICE}
          img={`${googleImg}${item.ITEM_IMG}`}
          id={item.ITEM_ID}
        />
      ))}
    </section>
  );
};
