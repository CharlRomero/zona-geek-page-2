export const Device = ({ text, device, price }) => {
  return (
    <section className="Device">
      <section className="Device-description">
        <h2 className="Device-h2">{text}</h2>
        <section className="Device-info">
          <h3 className="Device-h3">Tu renting desde</h3>
          <span className="Device-span">{price} $/mes</span>
        </section>
      </section>
      <section className="Device-image">
        <img src={device} alt="devices" className="Device-image--img" />
      </section>
    </section>
  );
};
