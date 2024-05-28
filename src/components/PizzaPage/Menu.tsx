import { Pizza } from "./Pizza";
import pizzaData from "../../data/data";

export const Menu = () => {
  return (
    <div className="mx-auto mt-16 pb-4">
      <h2 className="text-2xl sm:text-4xl text-center mb-20 ">
        <span className="border-t-2 border-b-2 uppercase border-black/50 py-1">Our Menu</span>
      </h2>
      <div className="grid grid-cols-2 gap-2 content-center">
        {pizzaData.map((data) => {
          return (
            <Pizza
              photoName={data.photoName}
              name={data.name}
              ingredients={data.ingredients}
              price={data.price}
              soldOut={data.soldOut}
              key={"pizzaKey: " + data.name}
            />
          );
        })}
      </div>
    </div>
  );
};
