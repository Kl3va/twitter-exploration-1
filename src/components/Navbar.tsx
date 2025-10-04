import { Play } from "lucide-react";
import { navItems } from "@/data";

interface NavbarProps {
  activeTab: number;
  activateTab: (id: number) => void;
}

const Navbar = ({ activateTab, activeTab }: NavbarProps) => {
  return (
    <nav
      className="sticky z-50 top-0 bg-gray-50"
      role="navigation"
      aria-label="breadcrumb"
    >
      <div className="w-full border flex border-b-gray-300 gap-2 p-3.5">
        {navItems.map((item, index, array) => {
          const active = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => activateTab(item.id)}
              className={`flex gap-2 items-center cursor-pointer text-sm ${
                active ? "text-black" : "text-gray-300"
              }`}
            >
              {item.label}
              {array.length - 1 !== index && (
                <Play size={5} fill={`${active ? "#000000" : "#d1d5d2"}`} />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
