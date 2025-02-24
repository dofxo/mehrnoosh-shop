import { Button } from "@/components/ui/button";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

export default function MobileNav() {
  return (
    <div className="block lg:hidden fixed bottom-0 right-0 w-full p-[10px]">
      <div className="rounded-primary bg-white p-[15px] shadow-mobile-nav">
        <Button className="rounded-primary bg-primary px-[15px] py-[10px] font-bold text-white">
          <div className="flex flex-row items-center justify-center p-1 bg-[#2786ff] rounded-primary" >
            <ShoppingBagOutlinedIcon />
          </div>
          سبد خرید
        </Button>
      </div>
    </div>
  );
}
