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
      title: "Home",
    
    },
    {
      title: "All Users",
  
    },
    {
      title: "Add Users",
   
    },
  ];

  return (
    <div className="sticky top-0 z-50">
      <div className="md:hidden block">
        <Sidebar navbarData={navbarData} />
      </div>
      <div className="md:block hidden backdrop-blur-md border-b  py-4 ">
        <div className="flex justify-between mx-20 items-center">
          <div>
            <Link to="/">
              <customTitle className="text-3xl font-bold text-center text-white my-8">
                <button class="button" data-text="Awesome">
                  <span class="actual-text">&nbsp;RingRoots&nbsp;</span>
                  <span aria-hidden="true" class="hover-text">
                    &nbsp;RingRoots&nbsp;
                  </span>
                </button>
              </customTitle>
              {/* <h2 className="text-2xl font-bold">RingRoots</h2> */}
            </Link>
          </div>
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4 backdrop:blur-md">
              {navbarData.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <Link to={item?.link}>
                    <li className="text-lg font-bold text-white">{item.title}</li>
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
