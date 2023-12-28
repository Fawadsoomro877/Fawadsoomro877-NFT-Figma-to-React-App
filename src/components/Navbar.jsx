import list from "../assets/list.png";
import user from "../assets/User.png";
import Icon from "./Icon";

const nav = [
  { id: 1, li: "Marketplace" },
  { id: 2, li: "Rankings" },
  { id: 3, li: "Connect wallet" },
  { id: 3, li: "Connect wallet" },
];

export const Navbar = () => {
  return (
    <section className="bg-[#2B2B2B] text-white font-fonts">
      <header className="px-[3.125rem] py-5 flex justify-between items-center max-md:px-[1.875rem] max-lg:px-[3.12rem] max-md:py-[0.94rem] max-lg:py-[0.94rem]">
        <div className="flex items-center gap-3 ">
          <Icon />
        </div>
        <ul className="flex gap-5 items-center max-md:hidden max-lg:hidden">
          {nav.map((el, i) => (
            <li className="px-5" key={el.id}>
              <a href="#" className="text-base font-semibold">
                {el.li}
              </a>
            </li>
          ))}
          <li className="flex items-center gap-3 px-[1.875rem] py-5 rounded-[1.25rem] bg-[#A259FF]">
            <img src={user} alt="" />
            <a href="#" className="text-base font-semibold">
              Sign Up
            </a>
          </li>
        </ul>
        <img src={list} alt="" className="lg:hidden " />
      </header>
    </section>
  );
};
