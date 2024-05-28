import { Footer } from "./comps/Footer";
import { Header } from "./comps/Header";
import { Menu } from "./comps/Menu";

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
