// Example of how React creates the DOM nodes with the JSX:
// React.createElement("footer", { className: "text-center text-sm my-4" }, "We're currently open!")

export const Footer = () => {
  return <footer className="text-center text-sm my-4">{new Date().toLocaleTimeString()} We're currently open!</footer>;
};
