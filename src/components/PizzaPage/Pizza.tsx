interface PizzaProps {
  name: string;
  price: number;
  ingredients: string;
  photoName: string;
  soldOut: boolean;
}

export const Pizza = ({ ...props }: PizzaProps) => {
  return (
    <div className="font-extrabold mx-20 my-4 flex flex-col items-center">
      <div className="max-w-36 sm:max-w-52 w-36 sm:w-52 px-2 sm:px-auto">
        <div className="flex flex-col">
          <img src={props.photoName} width="200" alt={props.name} />
          <h2 className="text-lg sm:text-xl pt-1">{props.name}</h2>
          <div className="italic font-light py-2 h-20 max-h-20 items-center">{props.ingredients}</div>
          <p className="pt-2">{props.price}</p>
        </div>
      </div>
    </div>
  );
};
