import { Footer } from "./Footer";
import { Header } from "./Header";
import { Menu } from "./Menu";

export const PizzaPage = () => {
  return (
    <>
      <div className="flex flex-col mx-auto">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
};
