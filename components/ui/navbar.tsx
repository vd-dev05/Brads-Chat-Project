import{ Button }from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import MobileSidebar from "@/components/ui/mobilesidebar";
const Navbar = () => {
    return ( 
        <div className="flex items-center p-4">
         
            <div className="flex w-full justify-end">
                <UserButton afterSwitchSessionUrl="/"></UserButton>
            </div>
        </div>
     );
}
 
export default Navbar;