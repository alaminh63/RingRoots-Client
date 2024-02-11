import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
const Navbar = () => {
  const navbarData = [
    {
      title: "Item One",
      link: "/link1",
    },
    {
      title: "Item Two",
      link: "/link2",
    },
    {
      title: "Item Three",
      link: "/link3",
    },
  ];

  return (
    <div>
      <div className="md:hidden block">
        <Sidebar navbarData={navbarData} />
      </div>
      <div className="md:block hidden border bg-red-500 py-2 ">
        <div className="flex justify-between mx-20 items-center">
          <div>
            <h2 className="text-2xl font-bold">RingRoots</h2>
          </div>
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4">
              {navbarData.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <Link to={item.link}>
                    <li className="border px-4 py-2 bg-sky-500">
                      {item.title}
                    </li>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
