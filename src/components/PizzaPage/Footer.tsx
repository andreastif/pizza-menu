// Example of how React creates the DOM nodes with the JSX:
// React.createElement("footer", { className: "text-center text-sm my-4" }, "We're currently open!")

export const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;

  return (
    <footer className="text-center text-sm mt-10">
      <p>{new Date().toLocaleTimeString()} </p>
      <p>{hour >= openHour && hour <= closeHour ? "We're currently open!" : "We're currently closed!"}</p>
    </footer>
  );
};
