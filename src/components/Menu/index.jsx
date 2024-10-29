import { menuItems } from "@/utils/constants";

const Menu = () => {
  return (
    <nav className="">
      {menuItems.map((item) => (
        <a key={item.title} href={item.url}>{item.title}</a>
      ))}
    </nav>
  );
};

export default Menu;
