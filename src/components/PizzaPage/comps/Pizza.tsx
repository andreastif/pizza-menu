interface PizzaProps {
  name: string;
  price: number;
  ingredients: string;
  photoName: string;
  soldOut: boolean;
}

export const Pizza = ({ ...props }: PizzaProps) => {
  return (
    <div className="font-extrabold mx-20 my-4 flex flex-col sm:flex-row items-center sm:w-96">
      <div className="w-36 max-w-36 sm:w-56 sm:max-w-56 px-2 sm:px-auto">
        <div className={`${props.soldOut ? "text-gray-500" : ""}  flex flex-col sm:min-w-60 sm:flex-row`}>
          <img
            className={`${props.soldOut ? "grayscale " : ""} rounded-sm`}
            src={props.photoName}
            width="300"
            alt={props.name}
          />
          <div className="sm:px-6 sm:min-w-40 ">
            <h2 className="text-lg sm:text-xl pt-1 h-14 max-h-14 sm:h-18 sm:max-h-none">{props.name}</h2>
            <div className="italic font-light py-2 h-32 max-h-32 sm:h-40 sm:max-h-40 items-center">
              {props.ingredients}
            </div>
            <div className="py-2">{props.soldOut ? "SOLD OUT" : `${props.price} euro`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
