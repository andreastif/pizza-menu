import { Pizza } from "./Pizza";

export const Menu = () => {
  return (
    <div className="mx-auto pt-20 pb-4">
      <h2 className="text-2xl sm:text-4xl text-center pb-10">Our Menu</h2>
      <div className="grid grid-cols-2 gap-2 content-center">
        <Pizza />
        <Pizza />
        <Pizza />
      </div>
    </div>
  );
};
