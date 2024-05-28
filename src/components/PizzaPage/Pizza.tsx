import Spinaci from "../../images/spinaci.jpg";
export const Pizza = () => {
  return (
    <div className="font-extrabold mx-4">
      <img src={Spinaci} width="200" alt="Pizza spinaci" />
      <h2 className="text-xl">Pizza Spinaci</h2>
      <p className="text-l">Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
};
