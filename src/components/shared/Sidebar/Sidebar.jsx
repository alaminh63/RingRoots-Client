import { NavigationMenuItem } from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";
const Sidebar = ({ navbarData }) => {
  return (
    <Sheet>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <ul className="flex flex-col gap-2">
            {navbarData.map((item, index) => (
              <NavigationMenuItem key={index}>
                <Link to={item.link}>
                  <li className="border mx-4 py-2 bg-sky-500">{item.title}</li>
                </Link>
              </NavigationMenuItem>
            ))}
          </ul>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
