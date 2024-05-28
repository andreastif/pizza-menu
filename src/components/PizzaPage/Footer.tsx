// Example of how React creates the DOM nodes with the JSX:
// React.createElement("footer", { className: "text-center text-sm my-4" }, "We're currently open!")

export const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;

  return (
    <footer className="text-center text-sm mt-10 mx-2">
      <p>
        {hour >= openHour && hour <= closeHour
          ? `We're open until ${closeHour}:00. Come visit us or order online!`
          : `We're happy to welcome you between ${openHour}:00 and ${closeHour}:00`}
      </p>
      <button className="btn mt-4 bg-yellow-400 hover:bg-yellow-400/70 hover:border-yellow-400/70">Order now</button>
    </footer>
  );
};
