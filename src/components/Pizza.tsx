import Spinaci from "../images/spinaci.jpg";
export const Pizza = () => {
  return (
    <div className="font-extrabold">
      <img src={Spinaci} alt="Pizza spinaci" />
      <h2 className="text-4xl">Pizza Spinaci</h2>
      <p className="text-2xl">Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
};
