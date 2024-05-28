// Example of how React creates the DOM nodes with the JSX:
// React.createElement("footer", { className: "text-center text-sm my-4" }, "We're currently open!")

import { Order } from "./Order";

export const Footer = () => {
  return (
    <footer className="text-center text-sm mt-10 mx-2">
      <Order />
    </footer>
  );
};
