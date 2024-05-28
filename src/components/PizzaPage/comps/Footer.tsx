// Example of how React creates the DOM nodes with the JSX:
// React.createElement("footer", { className: "text-center text-sm my-4" }, "We're currently open!")

import { Order } from "./Order";

export const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;

  return (
    <footer className="text-center text-sm mt-10 mx-2">
      <p>
        {hour >= openHour && hour <= closeHour ? (
          <Order closeHour={closeHour} />
        ) : (
          `We're happy to welcome you between ${openHour}:00 and ${closeHour}:00`
        )}
      </p>
    </footer>
  );
};
