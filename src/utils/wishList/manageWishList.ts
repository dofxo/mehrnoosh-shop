import { getWishList } from "./getWishList";

let wishList = getWishList();

export const manageWishList = (productId: number, e?: any) => {
  if (!wishList.includes(productId)) {
    wishList.push(productId);
  } else {
    wishList = wishList.filter((item: number) => item !== productId);
  }

  localStorage.setItem("wishList", JSON.stringify(wishList));

  if (!e) return;

  // add related class for items of wishlist
  const parentElement = e.currentTarget.parentElement as HTMLButtonElement;

  if (parentElement.classList.contains("wishListed")) {
    parentElement.classList.remove("wishListed");
  } else {
    parentElement.classList.add("wishListed");
  }
};
