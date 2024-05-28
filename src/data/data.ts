interface IPizzaData {
  name: string;
  ingredients: string;
  price: number;
  photoName: string;
  soldOut: boolean;
}

const pizzaData: IPizzaData[] = [
  {
    name: "Focaccia Bread",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "src/images/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato, mozarella and basil",
    price: 10,
    photoName: "src/images/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach and ricotta cheese",
    price: 12,
    photoName: "src/images/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms and onion",
    price: 12,
    photoName: "src/images/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella and pepperoni",
    price: 15,
    photoName: "src/images/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula and burrata cheese",
    price: 18,
    photoName: "src/images/prosciutto.jpg",
    soldOut: false,
  },
];

export default pizzaData;
