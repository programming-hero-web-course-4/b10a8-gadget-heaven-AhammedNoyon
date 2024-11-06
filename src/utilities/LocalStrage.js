import { toast } from "react-toastify";

const getStoredCart = () => {
  const haveCheckCartInStore = localStorage.getItem("cart");
  if (haveCheckCartInStore) {
    const parseStoreCart = JSON.parse(haveCheckCartInStore);
    return parseStoreCart;
  }
  return [];
};

const addCartInStore = (id) => {
  const getCartCollectionByCall = getStoredCart();
  // console.log(getCartCollectionByCall);
  const isExist = getCartCollectionByCall.find(
    (item) => item.productId === id.productId
  );
  if (isExist) {
    return toast.warn("Already Exist");
  }
  getCartCollectionByCall.push(id);
  saveNewCartCollectionInStore(getCartCollectionByCall);
  toast.success("Added successful");
};

const saveNewCartCollectionInStore = (cart) => {
  const stringifyNewCollectionCart = JSON.stringify(cart);
  localStorage.setItem("cart", stringifyNewCollectionCart);
};

//ai function taw problem
const removeInLS = (id) => {
  const getCartCollectionByCall = getStoredCart();
  const remaining = getCartCollectionByCall.filter((idx) => idx !== id);
  saveNewCartCollectionInStore(remaining);
};

//heart
const getStoredWish = () => {
  const all = localStorage.getItem("getWish");
  if (all) {
    const parseAll = JSON.parse(all);
    return parseAll;
  }
  return [];
};

const addWishList = (LProduct) => {
  const getWish = getStoredWish();

  const isExistWish = getWish.find(
    (item) => item.productId == LProduct.productId
  );
  if (isExistWish) {
    return toast.warn("Already Exist");
  }
  getWish.push(LProduct);
  localStorage.setItem("getWish", JSON.stringify(getWish));
  toast.success("Added successful");
};

export {
  addCartInStore,
  getStoredCart,
  removeInLS,
  getStoredWish,
  addWishList,
};
