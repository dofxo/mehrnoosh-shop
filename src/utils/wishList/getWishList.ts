export const getWishList = () => {
  const wishListFromLs = localStorage.getItem("wishList");
  return JSON.parse(wishListFromLs ?? "[]");
};
