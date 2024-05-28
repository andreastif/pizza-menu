import { Pizza } from "./Pizza";
import pizzaData from "../../data/data";

export const Menu = () => {
  return (
    <div className="mx-auto mt-16 pb-4">
      <h2 className="text-2xl sm:text-4xl text-center mb-20 ">
        <span className="border-t-2 border-b-2 uppercase border-black/50 py-1">Our Menu</span>
      </h2>
      <div className={`${pizzaData.length > 0 ? "grid-cols-2" : "grid-cols-1"} grid gap-2 content-center`}>
        {pizzaData.length > 0 ? (
          pizzaData.map((data) => {
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
          })
        ) : (
          <div className="text-center mx-2">{"We're still working on our menu. Please come back later."}</div>
        )}
      </div>
    </div>
  );
};
