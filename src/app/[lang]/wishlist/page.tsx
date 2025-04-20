"use client";

import { IProduct } from "../product/[id]/Product";
import WishListProduct from "./components/WishListProduct";
import { useAppSelector } from "@/lib/hooks";
import { getWishList } from "@/utils/wishList/getWishList";
import { Heart } from "lucide-react";

const WhishList = () => {
  const { languageData } = useAppSelector((state) => state.language);
  const { productsData } = useAppSelector((state) => state.productsData);

  const wishList = getWishList();
  const wishListedProducts = productsData?.filter((item) => {
    if (wishList.includes(item.id)) return item;
  }) as IProduct[];

  return (
    <section className="container !mt-[20px] rounded-[25px] bg-white p-[30px]">
      <h1 className="flex items-center gap-3 text-2xl font-bold text-text-primary">
        <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-[#ff4191] shadow-[0px_2px_15px_#FF419170]">
          <Heart color="white" />
        </div>
        <span> {languageData.wishlist.title}</span>
      </h1>

      <div className="list-of-products mt-[30px] rounded-[20px] bg-background p-[20px]">
        <div className="flex flex-col gap-2 rounded-[15px] bg-white p-[20px]">
          {wishList.length > 0 ? (
            wishListedProducts?.map((productData, idx) => {
              return <WishListProduct productData={productData} key={idx} />;
            })
          ) : (
            <span className="text-yellow-600">
              {languageData.wishlist.no_wishlist_item_found}.
            </span>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhishList;
